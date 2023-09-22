import React from 'react'
import { getSortedPostsData } from '@/app/info/lib/posts'
import ListItem from './ListItem'

export default function Posts() {
  const posts = getSortedPostsData()
  return (
    <section className='flex items-center justify-center my-14 mx-auto flex-col text-black'>
      <ul className='grid gap-8 w-3/4 pb-4'>
          {posts.map(post => (
              <ListItem key={post.id} post={post}></ListItem>
          ))}
      </ul>
      <style jsx>{`
        ul.grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }

        @media (max-width: 768px) {
          ul.grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 480px) {
          ul.grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
