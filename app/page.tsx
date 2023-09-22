import React from 'react'
import Carousel from "./components/Carousel"
import Posts from "./blog/components/Posts"

export default function page() {
  return (
      <main>
        <Carousel></Carousel>
        <Posts></Posts>
      </main>
  )
}
