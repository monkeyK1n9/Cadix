'use client'

import CreditFooter from "@/components/CreditFooter/CreditFooter"
import TextInput from "@/components/TextInput/TextInput"
import WelcomeHeader from "@/components/WelcomeHeader/WelcomeHeader"
import Link from "next/link"

export default function Project() {
    // TODO: Fetch user, if he is signed in, then he can create a new project, otherwise, redirect back to login page with a modal


    return (
        <>
            <WelcomeHeader />
            <div className="flex md:flex-row flex-col h-full">
                {/* project creation steps */}
                <div className="flex md:flex-col bg-primary md:w-3/12 md:h-full w-full md:px-20 px-3 md:py-3 py-2">
                    <h2 className="md:text-h2 max-md:hidden">
                        Lets create your project
                    </h2>
                    <h3 className="md:text-h3 text-h5">
                        Create a project
                    </h3>
                    <h3 className="md:text-h3 text-h5">
                        Create a team
                    </h3>
                    <h3 className="md:text-h3 text-h5">
                        Invitation link
                    </h3>
                </div>

                {/* Project creation */}
                <div className="flex grow flex-col bg-gray5 md:w-9/12 w-full my-auto justify-center items-center overflow-scroll">
                    <div className="bg-white shadow-md w-4/6 rounded-lg px-4 py-4 flex flex-col items-center justify-center max-md:px-3 max-md:w-5/6 overflow-hidden">
                        <h3 className="text-h3 font-semibold text-gray2 mb-3">
                            Create a project
                        </h3>  
                        <TextInput
                            inputHeading="Email"
                            name="email"
                            type="email"
                            placeholder="Input your email address"
                            value={"userData.email"}
                            onChange={() => console.log("changing")}
                            isObligatory
                            errorMessage="Valid field is required"
                            // isError={isChecked && (!userData.email || !validateEmail(userData.email))}
                        />
                        <div className="mb-3" />
                        <TextInput
                            inputHeading="Password"
                            name="password"
                            type="password"
                            placeholder="Create password"
                            value={"userData.email"}
                            onChange={() => console.log("changing")}
                            isObligatory
                            errorMessage="The password is at least 8 characters long, has at least one uppercase letter, at least one lowercase letter, at least one digit and at least one special character"
                            // isError={isChecked && (!userData.password || !validatePassword(userData.password))}
                        />
                        <div className="mb-3" />
                        <p className="text-left w-full">Don't have an account? <Link href="/register" className="text-primary cursor-pointer">Sign up</Link></p>
                        <div className="mb-3" />
                        <button
                            className="border-2 rounded-lg border-primary text-white text-title bg-primary px-5 py-2 cursor-pointer mt-3"
                            // onClick={handleValidation}
                            type="button"
                        >
                            Create
                        </button>
                    </div>
                </div>
            </div>
        
            <CreditFooter />
        </>
    )
}
