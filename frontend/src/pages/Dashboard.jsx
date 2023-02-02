import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import Modal from "../components/Model";

const Dashboard = () => {
  const [emp, setEmp] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const fetchEmp = async () => {
    const result = await axios.get("http://localhost:8800/api/user/emp");
    setEmp(result.data);
  };

  useEffect(() => {
    fetchEmp();
  }, []);

  return (
    <div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      <div className="dash-main">
        <div className="header">
          <Link to="/employ/add">
            <button data-aos="zoom-out">
              <i className="fa-solid fa-user-plus"></i>{" "}
            </button>
          </Link>
          <h1 data-aos="zoom-in">Welcome back {currentUser.User.username}</h1>
        </div>
        <div className="search" data-aos="zoom-in">
          <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
          <input type="search" placeholder="Search" />
        </div>

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
            {Object.entries(emp).map((item, index) => (
              <tr key={item[1]._id}>
                <td>{index + 1}</td>
                <td>{item[1].Name}</td>
                <td>{item[1].Age}</td>
                <td>{item[1].Salary}</td>
                <td>{item[1].Designation}</td>
                <td data-label="Update">
                  {currentUser.username === emp.Name && (
                    <Link to={`/employ/edit/${item[1]._id}`}>
                      <i className="fa-regular fa-pen-to-square"></i>
                    </Link>
                  )}
                </td>
                <td data-label="Delete">
                  {
                    <Link
                      onClick={() => {
                        setModalOpen(true);
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </Link>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
