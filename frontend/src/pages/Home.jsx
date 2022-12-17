import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-main' data-aos="zoom-in">
    <div className='home' >
      <h1>Welcome To The React CRUD Op. Page</h1>
    </div>
    <Link  to="/register" data-aos="slide-up">
      <button className='btn-home' >Proceed</button>
    </Link>
    </div>
  )
}

export default Home
