import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Employ = () => {
  const [err, setError] = useState(null);
  const [value, setValue] = useState({});
  const [emp, setEmp] = useState({
    Name: value.Name,
    Age: value.Age,
    Salary: value.Salary,
    Designation: value.Designation,
  });

  
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  
  const fetchEmp = async () => {
    const res = await axios.get(`http://localhost:8800/api/user/emp/${id}`)
    setValue(res.data);
  }

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmp((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/api/user/emp/${id}`, emp);
      navigate("/user/dashboard");
    } catch (error) {
      setError(error.message);
    }
  }
  
  useEffect (() => {
    fetchEmp();
  },[])

    return (
      <div className="auth2">
        <div className="xt" style={{ marginTop: "4.5em" }} data-aos="zoom-out">
          <form style={{ height: "23em" }} data-aos="zoom-in">
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

            <button onClick={handleSubmit} className="form-btn">
              Update
            </button>
            {err && <p>{err}</p>}
            <span>
              Cancle Edit ?{" "}
              <Link
                style={{
                  textDecoration: "none",
                  color: "#ff9899",
                  backgroundColor: "inherit",
                }}
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
export default Employ;
