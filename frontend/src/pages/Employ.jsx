import React, { useEffect } from 'react'
import { useState  } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Employ = () => {
      const [inputs, setInputs] = useState({
        Name: "",
        Age: "",
        Salary: "",
        Designation: "",
      });
      const [err, setError] = useState(null);
      let { id } = useParams() 
    
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };

      useEffect(() => {
        fetchEmp ();
      }, [])
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8800/api/user/emp/${id}`, inputs)
          navigate("/user/dashboard");
        } catch (err) {
          console.log(err.message);
        }
      };

      const fetchEmp =async () => {
        const result = await axios.get(`http://localhost:8800/api/user/emp/${id}`);
        setInputs(result.data)
      }

  return (
    <div className="auth2" >
    <div className='xt' style={{"marginTop" : "4.5em"}} data-aos="zoom-out">
      <form style={{"height" : "23em"}} data-aos="zoom-in">
      <h1>Edit Employee</h1>
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

        <button onClick={handleSubmit} className='form-btn' >Update</button>
        {err && <p>{err}</p>}
        <span>
          Cancle Edit ?{" "}
          <Link
            style={{ textDecoration: "none", color: "#ff9899", "backgroundColor": "inherit" }}
            to="/user/dashboard"
          >
            dashboard
          </Link>
        </span>
      </form></div>
    </div>
  )
}

export default Employ
