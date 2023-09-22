import React from 'react'
import Link from 'next/link'

type Props = {
    post: Blogpost;
}

export default function ListItem({ post }: Props) {
    const {id, title, description, icon} = post
  return (
    <li className='mt-2 p-2 border-4 rounded-md border-gray-200 border-double'>
      <Link prefetch href={`info/posts/${id}`}>
        <div className='text-8xl pb-4'>
          <i className={icon}></i>
        </div>
        <h1 className='font-bold text-lg'>{title}</h1>
        <p className='pt-4 text-md'>{description}</p>
      </Link>
    </li>
  )
}
