import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className='dash-main'>
    <div>
      <h3>Your Name : {currentUser?.username}</h3>
      <h3>Your Email : {currentUser?.email} </h3>
      <h3>Your Phone : {currentUser?.phone} </h3>
      
      <Link to="/user/update">
      <button>Update Profile</button>
      </Link>
      </div>
    </div>
  )
}

export default Dashboard
