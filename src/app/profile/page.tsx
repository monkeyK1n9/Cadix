"use client"
import React, {useEffect, useState} from 'react';
import CreditFooter from "@/components/CreditFooter/CreditFooter";
import WelcomeHeader from "@/components/WelcomeHeader/WelcomeHeader";
import Image from "next/image";
import { IoMdPhotos } from "react-icons/io";
import Sample_User_Icon from "@/assets/Sample_User_Icon.png";

export default function ProfilePage() {
    const [newUsername, setNewUsername] = useState<string>("")
    const user: any = { username: "My test username", email: "test@example.com" };

    const handleChangeImage = () => {

    }

    useEffect(() => {
        setNewUsername(user?.username);
    }, [])

    return (
        <>
        <WelcomeHeader />
        <div className="mx-auto px-4 md:px-6 prose prose-2xl prose-slate flex flex-col justify-center items-center">
            <div className="relative mb-12 flex justify-center items-center">
                <Image
                    className="rounded-full w-56 h-56 bg-tertiary cursor-pointer"
                    src={user?.imageURL ? user?.imageURL : Sample_User_Icon}
                    alt="profile"
                    onClick={handleChangeImage}
                />
                <p className="text-h1 absolute bottom-2 right-2 cursor-pointer" onClick={handleChangeImage}>
                    <IoMdPhotos />
                </p>
            </div>
            <input 
                className="tracking-widest border-b-4 px-16 text-center text-secondary text-4xl focus:outline-none font-sans font-bold mb-3"
                value={newUsername}
                onChange={e => setNewUsername(e.target.value)}
                type="text"
            />
            <h5 className="text-h5 font-sans font-regular">
                {user?.email}
            </h5>
        </div>
        <CreditFooter />
        </>
    )
}
