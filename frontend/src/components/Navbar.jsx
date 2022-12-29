import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Logo from "../images/logo.png"

const Navbar = () => {

  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
        <Link to="/">
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

            <Link className="link" to="/donate">
              <h6>Donate Us</h6>
            </Link>

            <Link to="/user/update" style={{"textDecoration" : "none"}}>
            <span>{currentUser?.User.username}</span></Link>
            {currentUser ? (
              <Link to="/login" style={{"textDecoration" : "none"}}>
            <span onClick={logout}>Logout</span></Link>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
        </div>

      </div>
    </div>
  )
}

export default Navbar
