import React from 'react'
import { getSortedPostsData } from '@/app/blog/lib/posts'
import ListItem from './ListItem'
import Link from 'next/link'

export default function Posts() {
  const posts = getSortedPostsData()
  return (
    <section className='flex items-center justify-center my-14 mx-auto flex-col text-black'>
      <ul className='grid grid-cols-3 gap-8 w-3/4 pb-4'>
        <Link prefetch href="info" className='mt-2 p-2 border-4 rounded-md border-gray-200 border-double'>
            <div className='text-8xl pb-4'>
              <i className="fa-solid fa-info"></i>
            </div>
            <h1 className='font-bold text-lg'>Ennetav info</h1>
            <p className='pt-4 text-md'>Laste vigastusi ja hädaolukordi on kergem ära hoida kui nende tagajärgi taluda. Selleks on vaja teada üldisi reegleid ning olla tähelepanelik ja hooliv. Veenduge veelkord, kas te olete teinud kõik oma lapse ohutuseks nii kodus, õues-aias kui tänaval. Ehk saab veel midagi teha.</p>
        </Link>
          {posts.map(post => (
              <ListItem key={post.id} post={post}></ListItem>
          ))}
      </ul>
    </section>
  )
}
