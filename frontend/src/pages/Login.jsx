import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import Footer from "../components/Footer"

const Login = () => {
  const [input, setInputs] = useState({
    email: "",
    password: "",
  });
  const [isInputValid, setInputValid] = useState(false);
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const {login} = useContext(AuthContext)

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  
    const { email, password } = input;
    setInputValid(email.trim().length > 0 && password.trim().length > 0);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(input)
      navigate("/user/dashboard");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className='auth2' >
    <div className='xt' data-aos="zoom-out">
      <form data-aos="zoom-in">
      <h1>LOGIN</h1>
        <input required type="email" placeholder="email" name='email' onChange={handleChange} />   
        <input required type="password" placeholder="password" name='password' onChange={handleChange}/> 
        <button  onClick={handleSubmit} className='form-btn' disabled={!isInputValid}>Login</button>
        {err && <p>{err}</p>}
        <span>New member? <Link style={{textDecoration: "none", color : '#ff9899'}} to="/register">Register</Link></span>
      </form></div>
      <Footer/>
    </div>
  )
}

export default Login;