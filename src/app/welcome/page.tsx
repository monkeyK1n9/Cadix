"use client"

import WelcomeHeader from "@/components/WelcomeHeader/WelcomeHeader";
import Lottie from "lottie-react";
import welcome_animation from "@/assets/welcome_animation.json"
import moving_square from "@/assets/moving_square.json";

export default function WelcomePage() {
  return (
    <>
        <WelcomeHeader />
        <div className="w-full h-full flex flex-row justify-evenly items-center">
            <Lottie 
                className="w-2/4 my-6"
                animationData={welcome_animation} 
                loop={false}
            />
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row flex-wrap justify-center items-center mb-3">
                    <h1 className="text-h1 mr-2 font-sans">
                        DREAM ONCE,
                    </h1>
                    <h1 className="text-primary text-h1 text-center font-sans font-semibold">
                        DESIGN EVERYWHERE
                    </h1>
                </div>
                <button
                    className="border-2 rounded-lg border-primary text-white text-h3 bg-primary px-5 py-2"
                >
                    Get Started
                </button>
            </div>
        </div>
       
    </>
  )
}
