"use client"

import WelcomeHeader from "@/components/WelcomeHeader/WelcomeHeader";
import Lottie from "lottie-react";
import welcome_animation from "@/assets/welcome_animation.json"
import CreditFooter from "@/components/CreditFooter/CreditFooter";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <>
        <WelcomeHeader />
        <div className="w-full h-full flex flex-col justify-evenly items-center">
            <div className="w-2/4 my-6">
                <Lottie 
                    className="w-full"
                    animationData={welcome_animation} 
                    loop={false}
                />
            </div>
           
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row flex-wrap justify-center items-center mb-3">
                    <h1 className="text-h1 mr-2 font-sans">
                        DREAM ONCE,
                    </h1>
                    <h1 className="text-primary text-h1 text-center font-sans font-semibold">
                        DESIGN EVERYWHERE
                    </h1>
                </div>
                <Link
                    className="border-2 rounded-lg border-primary text-white text-h3 bg-primary px-5 py-2 cursor-pointer"
                    href="/register"
                >
                    Get Started
                </Link>
            </div>
        </div>
       <CreditFooter />
    </>
  )
}
