import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const [emp, setEmp] = useState({});

  const location = useLocation();
  const {currentUser} = useContext(AuthContext)

  const empId = location.pathname.split("/")[2];

  useEffect (() => {
    getAllEmp()
  }, [])

  const getAllEmp = async () => {
    await axios.get("/users/emp")
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`/user/emp/${empId}`);
    } catch (error) {
      console.log(error.message);
    }
  };

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
          <th>Name </th>
          <th>Age </th>
          <th>Salary P/A</th>
          <th>Position </th>
          <th>Update </th>
          <th>Delete </th>
        </tr>
        </thead>
        <tbody data-aos="slide-up">
        {/* {emp.map((emp, index) => ( */}
          <tr>
          {/* <th>{index + 1}</th> */}
            <td data-label="Name">{emp.Name}</td>
            <td data-label="Age">{emp.Age}</td>
            <td data-label="Salary">{emp.Salary}</td>
            <td data-label="Position">{emp.Designation}</td>
            <td data-label="Update">
              { currentUser.username === emp.Name &&
                <Link to={`/employ/edit/${emp.id}`}>
                  <i className="fa-regular fa-pen-to-square"></i>
                </Link>
              }
            </td>
            <td data-label="Delete">
              {
                <Link onClick={handleDelete}>
                  <i className="fa-solid fa-trash"></i>
                </Link>
              }
            </td>
          </tr>
          {/* ))} */}
          <tr>
            <td data-label="Name">Sahima</td>
            <td data-label="Age">20</td>
            <td data-label="Salary">1199999</td>
            <td data-label="Position">Frontend Developer</td>
            <td data-label="Update">
              <i className="fa-regular fa-pen-to-square"></i>
            </td>
            <td data-label="Delete">
              <i className="fa-solid fa-trash"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
