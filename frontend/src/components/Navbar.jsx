import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../images/logo.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
        <Link>
        <img src={Logo} alt="logo" />
        </Link>
        </div>
        <div className="links">
            <Link className="link" to="/">
              <h6>Home</h6>
            </Link>
            <Link className="link" to="/about">
              <h6>About</h6>
            </Link>
            <Link className="link" to="/contact">
              <h6>Contact Us</h6>
            </Link>

            <span>{"Muhaz"}</span>
             <Link className="link" to="/login"><span>logout</span></Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar
