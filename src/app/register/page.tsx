"use client"

import Lottie from "lottie-react";
import house_animation from "@/assets/house_animation.json"

export default function RegisterPage() {
    return (
        <div className="w-full h-screen">
            <div className="bg-gradient-to-br from-primary to-secondary w-1/2 h-full flex flex-col justify-center items-center max-md:hidden">
                <Lottie 
                    className="w-2/4 mb-6"
                    animationData={house_animation} 
                    loop={true}
                />
                <h1 className="text-tertiary font-medium text-h1 font-sans">
                    IMAGINE EVERYTHING
                </h1>
            </div>
        </div>
    )
}
