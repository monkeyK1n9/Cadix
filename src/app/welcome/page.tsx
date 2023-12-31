"use client"

import WelcomeHeader from "@/components/WelcomeHeader/WelcomeHeader";
import Lottie from "lottie-react";
import welcome_animation from "@/assets/welcome_animation.json"
import CreditFooter from "@/components/CreditFooter/CreditFooter";
import Link from "next/link";
import Image from "next/image";
import Background from "@/assets/welcome_background.jpg"

export default function WelcomePage() {
  return (
    <div className="h-screen relative flex flex-1 flex-col items-center justify-start">
        <WelcomeHeader />
        <div className="relative w-full h-full">
            <Image
                src={Background}
                alt="background_image"
                layout="fill"
                objectFit="cover"
            />
        </div>
        <div className="absolute w-full lg:h-screen flex max-lg:flex-col justify-evenly items-center bg-gradient">
            <div className="flex flex-1 justify-center items-center max-lg:mt-6 max-lg:mb-5 my-5 mx-4">
                <Lottie 
                    className="w-full max-lg:w-2/3"
                    animationData={welcome_animation} 
                    loop={false}
                />
            </div>
           
            <div className="flex-1 flex-col justify-center items-center mx-4">
                
                <div className="flex flex-wrap justify-center items-center mb-4 mx-auto min-lg:flex-col">
                    <h1 className="max-lg:text-3xl text-5xl max-sm:mr-2 font-sans">
                        DREAM ONCE,
                    </h1>
                    <h1 className="text-primary max-lg:text-3xl text-5xl text-center font-sans font-semibold">
                        DESIGN EVERYWHERE
                    </h1>
                </div>
                <div className="flex flex-wrap justify-center items-center mb-4 mx-auto min-lg:flex-col">
                    <h1 className="max-lg:text-3xl text-5xl font-sans text-secondary text-center">
                        A unified platform for collaboration, design and planning
                    </h1>
                </div>
                <div className="flex gap-4 justify-center items-center max-md:flex-col">
                    <Link
                        className="border-2 rounded-lg border-primary text-white text-h3 text-center bg-primary px-5 py-2 cursor-pointer max-md:w-full"
                        href="/start"
                    >
                        Get Started
                    </Link>
                </div>

            </div>
        </div>
       <CreditFooter />
    </div>
  )
}
