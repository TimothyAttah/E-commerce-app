import React from 'react'
import { Announcement } from '../../components/Announcement'
import { Navbar } from '../../components/nav/Navbar'
import { Slider } from '../../components/slider/Slider'

export const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  )
}
