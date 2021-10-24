import React from 'react'
import { Announcement } from '../../components/Announcement'
import { Categories } from '../../components/category/Categories'
import { Navbar } from '../../components/nav/Navbar'
import { Slider } from '../../components/slider/Slider'

export const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  )
}
