import BlogElement from "@/components/BlogElement/BlogElement";
import CreditFooter from "@/components/CreditFooter/CreditFooter";
import WelcomeHeader from "@/components/WelcomeHeader/WelcomeHeader";
import { getBlogsMeta } from "@/lib/blogs";
import Link from "next/link"

type Props = {
    params: {
        tagId: string,
    }
}

export const revalidate = 10;

export async function generateStaticParams() {
    const blogs = await getBlogsMeta(); //deduped

    if (!blogs) return [];

    const tags = new Set(blogs.map(blog => blog.tags).flat());
    
    return Array.from(tags).map(tagId => ({ tagId }));
}

export async function generateMetadata({ params: { tagId } }: Props) {
    return {
        title: `Blogs about ${tagId}`
    }
}

export default async function TagPostList({ params: { tagId } }: Props ) {
    const blogs = await getBlogsMeta(); //deduped

    if (!blogs) return <p className="mt-10 text-center">Sorry, no blog available</p>
console.log(tagId)
    const tagBlogs = blogs.filter(blog => blog.tags?.includes(tagId));

    if (!tagBlogs.length) {
        return (
            <>
            <WelcomeHeader />
                <div className="text-center">
                    <p className="mt-10">Sorry, no blog with that keyword</p>
                    <Link href="/blogs">⬅ Back</Link>
                </div>
            <CreditFooter />
            </>
        )
    }

    return (
        <>
        <WelcomeHeader />
        <div className="mx-auto px-4 md:px-6 prose prose-2xl prose-slate">
            <h2 className="text-3xl mt-3 mb-0">
                Results for: #{tagId}
            </h2>
            <section className="mt-6 mx-auto max-w-2xl">
                <ul className="w-full list-none p-0">
                    {tagBlogs.map(blog => {
                        return (
                            <BlogElement blog={blog} key={blog.id} />
                        )
                    })}
                </ul>
            </section>
        </div>
        <CreditFooter />
        </>
    )
}
