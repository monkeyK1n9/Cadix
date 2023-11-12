"use client"

import Lottie from "lottie-react";
import house_animation from "@/assets/house_animation.json"
import TextInput from "@/components/TextInput/TextInput";
import { useState } from "react";

export default function RegisterPage() {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
    
    return (
        <div className="w-full h-screen bg-gray5 flex">
            <div className="bg-gradient-to-br from-primary to-secondary w-full h-full flex flex-col justify-center items-center max-md:hidden">
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
                <div className="bg-white shadow-md w-2/4 rounded-lg p-3">
                    <h5>
                        Create Account
                    </h5>  
                    <TextInput
                        name="firstName"
                        inputHeading="First Name"
                        placeholder="Enter your first name"
                        value={}
                        onChange={() => {}}
                        isError={}
                        isObligatory
                        errorMessage="This field is required"
                    />
                </div>
                
            </div>
        </div>
    )
}
