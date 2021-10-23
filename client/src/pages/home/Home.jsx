import React from 'react'
import { Announcement } from '../../components/Announcement'
import { Navbar } from '../../components/nav/Navbar'

export const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <h2>Home page</h2>
    </div>
  )
}
