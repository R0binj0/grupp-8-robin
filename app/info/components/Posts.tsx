import React from 'react'
import { getSortedPostsData } from '@/app/info/lib/posts'
import ListItem from './ListItem'

export default function Posts() {
  const posts = getSortedPostsData()
  const firstRowPosts = posts.slice(0, 3);
  const secondRowPosts = posts.slice(3, 5);
  const thirdRowPosts = posts.slice(5);
  return (
    <section className='flex items-center justify-center my-14 mx-auto flex-col text-black'>
      <ul className='grid grid-cols-3 grid-rows-3 gap-8 w-3/4 pb-4'>
        {firstRowPosts.map((post) => (
          <ListItem key={post.id} post={post}></ListItem>
        ))}

        {secondRowPosts.map((post) => (
          <ListItem key={post.id} post={post}></ListItem>
        ))}

        {thirdRowPosts.map((post) => (
          <ListItem key={post.id} post={post}></ListItem>
        ))}
      </ul>
    </section>
  )
}
