import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
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
      await axios.post("/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth2">
    <div className='xt' style={{"marginTop" : "4.5em"}} data-aos="zoom-out">
      <form data-aos="zoom-in">
      <h1>Update Profile</h1>
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

        <button onClick={handleSubmit} className='form-btn' >Update</button>
        {err && <p>{err}</p>}
        <span>
          Cancle Update?{" "}
          <Link
            style={{ textDecoration: "none", color: "#ff9899", "backgroundColor": "inherit" }}
            to="/user/dashboard"
          >
            Dashboard
          </Link>
        </span>
      </form>
      </div>
    </div>
  );
};

export default Update;