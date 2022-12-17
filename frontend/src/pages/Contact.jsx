import React, { useState } from 'react'

const Contact = () => {

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { name, phone, email, message } = userData;

    if (name && phone && email && message) {
      const res = fetch(
        "https://reactcrud-1a2b3c-default-rtdb.firebaseio.com/reactCRUD.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            phone,
            email,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
        alert("Thank you for contacting us");
      } else {
        alert("Please fill all the fields");
      }
    } else {
      alert("Please fill all the fields");
    }
  };


  return (
    <div className='contact'>
      <div>
          <div className='form'data-aos="slide-down" >
        <form method="POST" data-aos="zoom-in">
          <h1>Contact &nbsp; <span>Us</span></h1>
        <div>
          <input required type="text" placeholder="Your Name" name='name' autoComplete='off' value={userData.name} onChange={postUserData} /></div>
        <div>
          <input required type="email" placeholder="Your Email" name='email' autoComplete='off' value={userData.email} onChange={postUserData} /></div>
        <div>
          <input required type="number" placeholder="Your Number" name='phone' autoComplete='off' value={userData.phone} onChange={postUserData} /></div>
        <div className='msg'>
          <input required type="text" placeholder="Your Message" name='message' autoComplete='off' value={userData.message} onChange={postUserData} /></div>
          <div className='form-btn'>
            <button onClick={submitData} >Submit</button>
          </div>
        </form></div>
          </div>
    </div>
  )
}

export default Contact
