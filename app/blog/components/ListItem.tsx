import React from 'react'
import Link from 'next/link'

type Props = {
    post: Blogpost
}

export default function ListItem({ post }: Props) {
    const {id, title, description} = post
  return (
    <li className='mt-2 p-2 border-2 rounded-md border-black border-double'>
        <Link prefetch className='font-bold underline text-lg' href={`blog/posts/${id}`}>{title}</Link>
        <br />
        <p>{description}</p>
    </li>
  )
}
