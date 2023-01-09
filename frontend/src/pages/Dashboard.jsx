import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const [emp, setEmp] = useState({});

  const location = useLocation();
  const { currentUser } = useContext(AuthContext);

  const empId = location.pathname.split("/")[2];

  const fetchEmp =async () => {
    const result = await axios.get("http://localhost:8800/api/user/emp");
    setEmp(result.data);
  }

  useEffect (() => {
    fetchEmp();
  },[])

  const handleDelete = async () => {
    try {
      await axios.delete(`/user/emp/${empId}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const test = async () => {
    alert(`Deleted`)
  }

  const handle = async () => {
    handleDelete();
    test();
  }

  return (
    <div className="dash-main">
      <Link to="/employ/add">
        <button data-aos="zoom-out">
          <i className="fa-solid fa-user-plus"></i>{" "}
        </button>
      </Link>
      <table className="table">
        <thead data-aos="slide-up">
          <tr>
            <th>No. </th>
            <th>Name </th>
            <th>Age </th>
            <th>Salary P/A</th>
            <th>Designation </th>
            <th>Update </th>
            <th>Delete </th>
          </tr>
        </thead>
        <tbody data-aos="slide-up">
          {Object.keys(emp).map((item, index) => (
            <tr>
              <td>{index+1}</td>
              <td key={item.Name}>{item.Name} </td>
              <td key={item.Age}>{item.Age}</td>
              <td key={item.Salary}>{item.Salary}</td>
              <td key={item.Designation}>{item.Designation}</td>
            <td data-label="Update">
              {currentUser.username === emp.Name && (
                <Link to={`/employ/edit`}>
                  <i className="fa-regular fa-pen-to-square"></i>
                </Link>
              )}
            </td>
            <td data-label="Delete">
              {
                <Link onClick={handle}>
                  <i className="fa-solid fa-trash"></i>
                </Link>
              }
            </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
