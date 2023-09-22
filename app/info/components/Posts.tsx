import React from 'react'
import { getSortedPostsData } from '@/app/info/lib/posts'
import ListItem from './ListItem'

export default function Posts() {
  const posts = getSortedPostsData()
  return (
    <section className='flex items-center justify-center my-14 mx-auto flex-col text-black'>
      <ul className='grid grid-cols-3 gap-8 w-3/4 pb-4'>
          {posts.map(post => (
              <ListItem key={post.id} post={post}></ListItem>
          ))}
      </ul>
    </section>
  )
}
