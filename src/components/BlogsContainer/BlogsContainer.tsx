import { getBlogsMeta } from "@/lib/blogs"
import BlogElement from "../BlogElement/BlogElement"

export default async function BlogsContainer() {
    const blogs = await getBlogsMeta()
    
    if (!blogs) {
        return <p className="mt-10 text-center">Sorry, no posts available</p>
    }
    return (
        <section className="mt-6 mx-auto max-w-2xl">
            <ul className="w-full list-none p-0">
                {blogs.map(blog => {
                    return (
                        <BlogElement blog={blog} key={blog.id} />
                    )
                })}
            </ul>
        </section>
    )
}