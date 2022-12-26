import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about'>
      <div>
      This is about page
      <h2>If you like our work, Please Donate</h2>
      <div className='btn'>
      <Link to="/donate">
        <button>Donate</button>
      </Link></div>
      </div>
    </div>
  )
}

export default About
