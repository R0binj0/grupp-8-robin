import React from 'react'
import { getSortedPostsData, getPostData } from '@/app/info/lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export function generateStaticParams(){
    const posts = getSortedPostsData()

    return posts.map((post) => ({
        postId: post.id
    }))
}

export function generateMetadata({params}: { params: {postId: string}}) {
    const posts = getSortedPostsData()
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if (!post){
        return {
            title: 'Post Not Found'
        }
    }

    return{
        title: post?.title,
    }

}

export default async function Post({params}: { params: {postId: string}}) {
    const posts = getSortedPostsData()
    const { postId } = params

    if (!posts.find(post => post.id === postId)){
        return notFound()
    }

    const { title, contentHtml} = await getPostData(postId)

    return (
        <main className='pt-24 px-4 mx-auto prose prose-xl prose-slate'>
            <h1 className='text-6xl mt-4'>{title}</h1>
            <article>
                <section className='post-section' dangerouslySetInnerHTML={{__html: contentHtml}}></section>
                <p className='text-3xl'>
                    <Link prefetch href="/info">Back</Link>
                </p>
            </article>
        </main>
    )
}
