import CreditFooter from "@/components/CreditFooter/CreditFooter";
import WelcomeHeader from "@/components/WelcomeHeader/WelcomeHeader";
import { getUser } from "@/lib/user";
import Project_Preview from "@/assets/Project_Preview.png"
import Image from "next/image";
import Link from "next/link";
import BlogsContainer from "@/components/BlogsContainer/BlogsContainer";
import { getBlogsMeta } from "@/lib/blogs";
import BlogElement from "@/components/BlogElement/BlogElement";

export default async function StartPage() {
    // const user = getUser();
    const user = null;

    const userData = await user as any

    const blogs = await getBlogsMeta()
    
    if (!blogs) {
        return <p className="mt-10 text-center">Sorry, no posts available</p>
    }

    return (
        <>
            <WelcomeHeader />
            <main className="flex max-md:flex-col justify-around">
                <div className="flex flex-col mt-3 md:px-20 px-3 w-full overflow-hidden">
                    <div className="flex flex-row items-right justify-end w-full">
                        <Link
                            className="border-2 rounded-lg border-primary text-white bg-primary px-3 py-2"
                            href="/project"
                        >
                            Create Project
                        </Link>
                    </div>
                    {userData?.projects?.length > 0 &&
                        <div className="flex flex-col">
                            <h1 className="text-gray3 text-h1 font-bold">
                                Recent
                            </h1>
                        </div>
                    }
                    <div className="flex flex-col mb-3">
                        <h1 className="text-gray3 text-h1 font-bold">
                            Discover
                        </h1>
                        <div className="mb-3" />
                        <div className="w-60 rounded-lg overflow-hidden shadow-md bg-white">
                            <Link
                                href={'/model/project_template'}
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
                <div className="flex flex-col max-md:border-t-2 max-md:border-gray5 md:border-l-2 md:border-gray5 md:w-2/5 mt-3 md:pr-20 px-3 py-3">
                    <div className="flex flex-col">
                        <h1 className="text-gray3 text-h1 font-bold">
                            News
                        </h1>
                        <section className="max-w-2xl">
                            <ul className="w-full list-none p-0">
                                {blogs.map(blog => {
                                    return (
                                        <BlogElement blog={blog} key={blog.id} />
                                    )
                                })}
                            </ul>
                        </section>
                    </div>
                </div>
            </main>
            <CreditFooter /> 
        </>
    )
}
