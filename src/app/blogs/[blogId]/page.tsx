import React from 'react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import getFormattedDate from '@/lib/getFormattedDate'
import Link from 'next/link'
import 'highlight.js/styles/github-dark.css'
import { getBlogByName, getBlogsMeta } from '@/lib/blogs'
import WelcomeHeader from '@/components/WelcomeHeader/WelcomeHeader'
import CreditFooter from '@/components/CreditFooter/CreditFooter'


type Props = {
    params: {
        blogId: string
    }
}

export const revalidate = 10;

export async function generateStaticParams() {
    const blogs = await getBlogsMeta(); //deduped, so don't worry

    if (!blogs) return []; //we return empty array to solve the empty params if blogs is undefined

    return blogs.map(blog => ({
        blogId: blog.id
    }))
}

export async function generateMetadata({params: { blogId }}: Props) {
    const blog = await getBlogByName(`${blogId}.mdx`);

    if (!blog) {
        return {
            title: "404 Not Found",
            description: "Couldn't find post"
        }
    }

    return {
        title: blog.meta.title,
        description: "Blog post written on: " + blog.meta.date
    }
}

export default async function Blog({params: { blogId }}: Props) {
    const blog = await getBlogByName(`${blogId}.mdx`); //deduped, so don't worry
    
    if (!blog) notFound(); //returns not found page if the post id is not valid

    const {meta, content} = blog;

    const pubDate = getFormattedDate(meta.date);

    const tags = meta.tags?.map((tag, index) => (
        <Link key={index} href={`/tags/${tag}`}>{tag}</Link>
    ))

    return (
        <>
        <WelcomeHeader />
            <div className="mx-auto px-4 md:px-6 prose prose-2xl prose-slate">
                <h2 className='text-3xl mt-4 mx-0'>{meta.title}</h2>
                <p className='mt-0 text-sm'>
                    {pubDate}
                </p>
                <article>
                    {content}
                </article>
                <section>
                    <h3>
                        Related:
                    </h3>
                    <div className='flex flex-row gap-4'>
                        {tags}
                    </div>
                </section>
                <p className='mb-10 pb-32'>
                    <Link href="/blogs" className="hover:text-black/70">⬅ Back</Link>
                </p>
            </div>
        <CreditFooter /> 
        </>
    )
}
