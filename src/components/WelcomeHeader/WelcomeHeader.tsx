"use client"

import { getUser } from "@/lib/user";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sample_User_Icon from "@/assets/Sample_User_Icon.png";
import { usePathname } from "next/navigation";

export default function WelcomeHeader() {
    const [user, setUser] = useState<any>(null)
    const [isMoreMenuVisible, setIsMoreMenuVisible] = useState<boolean>(false);

    const pathName = usePathname();

    const toggleMenu = () => setIsMoreMenuVisible(!isMoreMenuVisible);

    const signOut = () => {console.log("Sign Out")}

    useEffect(() => {
        const getUserData = async () => {
            const res = await getUser();

            setUser(res);
        }
        getUserData();
    }, [])

    return (
        <nav className="mx-auto py-3 flex flex-row justify-around items-center sticky bg-white top-0 w-screen">
            <Link className="text-primary text-4xl font-bold max-md:text-h3"
                href="/welcome"
            >
                CADiX
            </Link>

            {pathName === "/welcome" ?
                <div>
                    <Link 
                        className="border-2 rounded-lg border-primary bg-none text-primary px-3 py-2 mr-3"
                        href="/blogs"
                    >
                        Blogs
                    </Link>
                    <Link
                        className="border-2 rounded-lg border-primary text-white bg-primary px-3 py-2"
                        href="/start"
                    >
                        Projects
                    </Link>
                </div>
                :
                user ? (
                    <div className="relative">
                        <Image
                            src={user?.imageUrl ? user.imageUrl : Sample_User_Icon}
                            alt="profile"
                            className="rounded-3xl border-2 border-secondary"
                            width={45}
                            height={45}
                            onClick={toggleMenu}
                        />
                        {isMoreMenuVisible &&
                            <div className="rounded-lg bg-secondary p-3 absolute top-5 overflow-hidden z-50 w-fit">
                                <Link href="/start" className="text-white mb-3 block">
                                    Projects
                                </Link>
                                <Link href="/start" className="text-white mb-3 block">
                                    Profile
                                </Link>
                                <button type="button" className="text-white flex-nowrap w-5" onClick={signOut}>
                                    Sign Out
                                </button>
                            </div>
                        }
                    </div>
                ):(
                    <div>
                        <Link
                            className="border-2 rounded-lg border-primary bg-none text-primary px-3 py-2 mr-3"
                            href="/login"                    
                        >
                            Log in
                        </Link>
                        <Link
                            className="border-2 rounded-lg border-primary text-white bg-primary px-3 py-2"
                            href="/register"
                        >
                            Sign up
                        </Link>
                    </div>
                )
            }
        </nav>
    )
}
