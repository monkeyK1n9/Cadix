import CreditFooter from "@/components/CreditFooter/CreditFooter";
import WelcomeHeader from "@/components/WelcomeHeader/WelcomeHeader";
import { getUser } from "@/lib/user";
import Project_Preview from "@/assets/Project_Preview.png"
import Image from "next/image";
import Link from "next/link";

export default async function StartPage() {
    const user = getUser();

    const userData = await user as any

    return (
        <>
            <WelcomeHeader />
            <main className="flex max-sm:flex-col max-md:flex-row justify-around">
                <div className="flex flex-col mt-3 overflow-scroll px-3">
                    {userData?.projects?.length > 0 &&
                        <div className="flex flex-col">
                            <h1 className="text-gray3 text-h1 font-bold">
                                Recent
                            </h1>
                        </div>
                    }
                    <div className="flex flex-col">
                        <h1 className="text-gray3 text-h1 font-bold">
                            Discover
                        </h1>
                        <div className="mb-3" />
                        <div className="w-60 rounded-lg overflow-hidden shadow-md bg-white">
                            <Link
                                href={{
                                    pathname: '/model/project_template',
                                    query: {
                                        isTemplate: true,
                                        modelId: "project_template"
                                    }
                                }}
                            >
                                <Image
                                    src={Project_Preview}
                                    alt="Project Preview"
                                    className="rounded-lg overflow-hidden"
                                    // onClick={openProject}
                                />
                            </Link>
                            <div className="mb-3" />
                            <div className="px-2">
                                <h3 className="text-black3 text-h3">
                                    Project Template
                                </h3>
                                <div className="mb-1" />
                                <p className="text-caption text-gray3">Last Modified: {new Date().getUTCDate()}/{new Date().getUTCMonth()}/{new Date().getUTCFullYear()}</p>
                            </div>
                            <div className="mb-3" />
                            <div className="mb-3" />

                        </div>
                    </div>
                </div>
                <div className="flex flex-col max-sm:border-t-2 max-sm:border-gray5 md:border-l-2 md:border-gray5 mt-3 px-3">
                    <div className="flex flex-col">
                        <h1 className="text-gray3 text-h1 font-bold">
                            News
                        </h1>
                    </div>
                </div>
            </main>
            <CreditFooter /> 
        </>
    )
}
