'use client'

import CreditFooter from "@/components/CreditFooter/CreditFooter"
import WelcomeHeader from "@/components/WelcomeHeader/WelcomeHeader"

export default function Project() {
    // TODO: Fetch user, if he is signed in, then he can create a new project, otherwise, redirect back to login page with a modal


    return (
        <>
            <WelcomeHeader />

            {/* project creation steps */}
            <div className="flex md:flex-col bg-white md:w-2/5 w-full">

            </div>
            {/* Project creation */}

        
        <div>Project Presentation</div>
            <CreditFooter />
        </>
    )
}
