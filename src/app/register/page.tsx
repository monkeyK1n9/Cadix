"use client"

import Lottie from "lottie-react";
import house_animation from "@/assets/house_animation.json"
import TextInput from "@/components/TextInput/TextInput";
import { useState } from "react";
import { validateEmail, validatePassword } from "@/utils/regex";
import Link from "next/link";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/navigation";
import { setHttpOnlyCookie } from "@/lib/user";

type UserData = {
    email: string,
    username: string,
    password: string,
    confirmPassword: string
}

const INITIAL_USER_DATA = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
}

export default function RegisterPage() {
    const [userData, setUserData] = useState<UserData>(INITIAL_USER_DATA)
    const [hasAgreed, setHasAgreed] = useState<boolean>(false);
    const [agreeError, setAgreeError] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [otp, setOtp] = useState<string>("");
    const [userId, setUserId] = useState<string>("");
    const [isVerifyOtp, setIsVerifyOtp] = useState<boolean>(false);

    const router = useRouter()

    const onChange = (e: any) => {
        setUserData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleValidation = async () => {
        setLoading(true);
        setIsChecked(true);

        let check: boolean = false;

        if (!hasAgreed) {
            setAgreeError(true);
        }

        if (
            !validateEmail(userData.email) ||
            !validatePassword(userData.password)
        ) {
            check = true;
        }

        if (!check && hasAgreed) {

            try {

                const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + "/api/v1/register", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                })
                
                const response = await res.json();
                setUserId(response?.data?.userId);
                setLoading(false);
                // router.replace('/start')
                setIsChecked(false)
                setAgreeError(false)
                setIsVerifyOtp(true);
            }
            catch (err) {
                toast.error("Something went wrong");
                setLoading(false);
            }
        }
    }

    const handleGoBack = () => {
        setIsVerifyOtp(false);
    }

    const handleOtpVerification = async () => {
        try {
            if(!otp) {
                return toast.error("You need to provide an otp")
            }
            //implement send otp for validation and give a toast message then redirect to start page
            const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + "/api/v1/verifyotp", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId,
                    otp
                })
            })

            const response = await res.json();
            if(response.status != 'FAILED') {
                const { accessToken, ...userInfo} = response;

                //save token
                setHttpOnlyCookie("accessToken", accessToken, 90);
            }
            else {
                throw new Error("Failed to verify otp")
            }
        }
        catch (err: any) {
            //permit retrial, sent toast to tell user it failed
            toast.error(err?.message);
        }
    }



    return (
        <div className="w-full h-screen bg-gray5 flex">
            <Toaster />
            <div className="bg-gradient-to-br from-primary to-secondary w-full h-full flex flex-col justify-center items-center max-lg:hidden">
                <h1 className="text-tertiary font-bold text-6xl font-sans">
                    CADiX
                </h1>
                <Lottie 
                    className="w-3/5 mb-6"
                    animationData={house_animation} 
                    loop={true}
                />
                <h1 className="text-tertiary font-medium text-h1 font-sans">
                    IMAGINE EVERYTHING
                </h1>
            </div>

            <div className="w-full h-screen flex justify-center items-center overflow-scroll">
                <div className="bg-white shadow-md w-4/6 rounded-lg px-4 py-4 flex flex-col items-center justify-center max-md:px-3 max-md:w-5/6 overflow-scroll">
                    {!isVerifyOtp ? (
                        <>
                        <h3 className="text-h3 font-semibold text-gray2 mb-3">
                            Create Account
                        </h3>  
                        <TextInput
                            name="username"
                            inputHeading="User name"
                            placeholder="Enter your name"
                            value={userData.username}
                            onChange={onChange}
                            isError={isChecked && (!userData.username || userData.username.trim().length === 0)}
                            isObligatory
                            errorMessage="Valid field is required"
                        />
                        <div className="mb-3" />
                        <TextInput
                            inputHeading="Email"
                            name="email"
                            type="email"
                            placeholder="Input your email address"
                            value={userData.email}
                            onChange={onChange}
                            isObligatory
                            errorMessage="Valid field is required"
                            isError={isChecked && (!userData.email || !validateEmail(userData.email))}
                        />
                        <div className="mb-3" />
                        <TextInput
                            inputHeading="Password"
                            name="password"
                            type="password"
                            placeholder="Create password"
                            value={userData.password}
                            onChange={onChange}
                            isObligatory
                            errorMessage="The password is at least 8 characters long, has at least one uppercase letter, at least one lowercase letter, at least one digit and at least one special character"
                            isError={isChecked && (!userData.password || !validatePassword(userData.password))}
                        />
                        <div className="mb-3" />
                        <TextInput
                            inputHeading="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm your password"
                            value={userData.confirmPassword}
                            onChange={onChange}
                            isObligatory
                            errorMessage="Required. Must be the same as the password"
                            isError={isChecked && (!userData.confirmPassword || userData.password !== userData.confirmPassword)}
                        />
                        <div className="mb-3" />
                        <div className="flex w-full">
                            <input
                                name="agree"
                                type="checkbox"
                                className="mr-2"
                                checked={hasAgreed}
                                onChange={(e) => setHasAgreed(e.target.checked)}
                            />
                            <label
                                htmlFor="agree"
                            >
                                Agree to the <Link className="text-primary" target="_blank" href="https://google.com/">Terms of services</Link>
                            </label>
                        </div>
                        {agreeError && <p className="text-error text-caption w-full">You need to agree to proceed</p>}
                        <div className="mb-3" />
                        <p className="text-left w-full">Already have an account? <Link href="/login" className="text-primary cursor-pointer">Log in</Link></p>
                        <button
                            className="border-2 rounded-lg border-primary text-white text-title bg-primary px-5 py-2 cursor-pointer mt-3"
                            onClick={handleValidation}
                            type="button"
                        >
                            { loading ? "Loading..." : "Sign Up" }
                        </button>
                        </>
                    ):(
                        <>
                        <h3 className="text-h3 font-semibold text-gray2 mb-3">
                            Verify your account
                        </h3> 
                        <h5 className="text-h5 font-medium text-gray1 mb-4">
                            We have sent a verification code to your email {userData.email}. Check your spam too.
                        </h5>
                        <input
                            className="w-full tracking-widest border-b-4 px-16 text-center text-secondary font-bold text-4xl focus:outline-none"
                            placeholder="0000"
                            value={otp}
                            onChange={e => setOtp(e.target.value)}
                            type="text"
                            maxLength={4}
                        />
                        <div className="mb-3" />
                        <p className="text-left w-full">Did not receive the mail? <p onClick={handleValidation} className="text-primary inline cursor-pointer">Resend</p> or <p onClick={handleGoBack} className="text-primary inline cursor-pointer">Go back</p></p>
                        <button
                            className="border-2 rounded-lg border-primary text-white text-title bg-primary px-5 py-2 cursor-pointer mt-3"
                            onClick={handleOtpVerification}
                            type="button"
                        >
                            { loading ? "Loading..." : "Verify" }
                        </button>
                        </>
                    )}
                </div>
                    
                
            </div>
        </div>
    )
}
