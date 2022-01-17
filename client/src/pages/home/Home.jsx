import React from 'react'
import { Announcement } from '../../components/Announcement'
import { Categories } from '../../components/category/Categories'
import { Footer } from '../../components/footer/Footer';
import { Navbar } from '../../components/nav/Navbar'
import { Newsletter } from '../../components/Newsletter'
import { Products } from '../../components/products/Products'
import { Slider } from '../../components/slider/Slider'

export const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}
