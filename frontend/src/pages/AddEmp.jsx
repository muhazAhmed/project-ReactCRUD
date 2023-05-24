import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddEmp = () => {

    const [inputs, setInputs] = useState({
        Name: "",
        Age: "",
        Salary: "",
        Designation: "",
      });
      const [err, setError] = useState(null);
    
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post("https://react-crud-v3am.onrender.com/api/user/emp", inputs);
          navigate("/user/dashboard");
        } catch (err) {
          setError(err.response.data);
        }
      };

  return (
    <div className="auth2" >
    <div className='xt' style={{"marginTop" : "4.5em"}} data-aos="zoom-out">
      <form style={{"height" : "23em"}} data-aos="zoom-in">
      <h1>Add Employee</h1>
        <input
          required
          type="text"
          placeholder="Name"
          name="Name"
          onChange={handleChange}
        />
        <input
          required
          type="number"
          placeholder="Age"
          name="Age"
          onChange={handleChange}
        />
        <input
          required
          type="number"
          placeholder="Salary"
          name="Salary"
          onChange={handleChange}
        />
        <input
          required
          type="text"
          placeholder="Designation"
          name="Designation"
          onChange={handleChange}
        />

        <button onClick={handleSubmit} className='form-btn' >ADD</button>
        {err && <p>{err}</p>}
        <span>
          Nothing to add ?{" "}
          <Link
            style={{ textDecoration: "none", color: "#ff9899", "backgroundColor": "inherit" }}
            to="/user/dashboard"
          >
            Dashboard
          </Link>
        </span>
      </form></div>
    </div>
  )
}

export default AddEmp
