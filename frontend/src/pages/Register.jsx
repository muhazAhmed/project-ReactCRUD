import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from '../components/Footer';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://react-crud-v3am.onrender.com/api/user/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth2" >
    <div className='xt' data-aos="zoom-out">
      <form style={{"height" : "23em"}} data-aos="zoom-in">
      <h1>REGISTER</h1>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="number"
          placeholder="phone"
          name="phone"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />

        <button onClick={handleSubmit} className='form-btn' >Register</button>
        {err && <p>{err}</p>}
        <span>
          Aldready a member?{" "}
          <Link
            style={{ textDecoration: "none", color: "#ff9899", "backgroundColor": "inherit" }}
            to="/login"
          >
            Login here
          </Link>
        </span>
      </form></div>
      <Footer/>
    </div>
  );
};

export default Register;