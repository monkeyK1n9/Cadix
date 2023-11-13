"use client"

import Lottie from "lottie-react";
import house_animation from "@/assets/house_animation.json"
import TextInput from "@/components/TextInput/TextInput";
import { useState } from "react";
import { validateEmail, validatePassword } from "@/utils/regex";
import Link from "next/link";
import { useRouter } from "next/navigation";

const INITIAL_USER_DATA = {
    email: "",
    password: "",
}

export default function LoginPage() {
    const [userData, setUserData] = useState(INITIAL_USER_DATA)
    const [isChecked, setIsChecked] = useState(false);

    const router = useRouter();

    const onChange = (e: any) => {
        setUserData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
        setIsChecked(false)
    }

    const handleValidation = () => {
        setIsChecked(true);

        let check: boolean = false;

        if (
            !validateEmail(userData.email) ||
            !validatePassword(userData.password)
        ) {
            check = true;
        }

        if (!check) {
            router.replace('/start')
        }
    }



    return (
        <div className="w-full h-screen bg-gray5 flex">
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

            <div className="w-full h-full flex justify-center items-center">
                <div className="bg-white shadow-md w-4/6 rounded-lg px-4 py-4 flex flex-col items-center justify-center max-md:px-3 max-md:w-5/6 overflow-scroll">
                    <h3 className="text-h3 font-semibold text-gray2 mb-3">
                        Welcome Back
                    </h3>  
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
                    <p className="text-left w-full">Don't have an account? <Link href="/register" className="text-primary">Sign up</Link></p>
                    <div className="mb-3" />
                    <button
                        className="border-2 rounded-lg border-primary text-white text-title bg-primary px-5 py-2 cursor-pointer mt-3"
                        onClick={handleValidation}
                        type="button"
                    >
                        Log In
                    </button>
                </div>
                    
                
            </div>
        </div>
    )
}

