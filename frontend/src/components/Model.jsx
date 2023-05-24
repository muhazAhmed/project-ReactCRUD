import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Modal({ setOpenModal, employeeId, setSelectedEmployeeId, updateEmpData }) {

  const handleDelete = async () => {
    try {
      await axios.delete(`https://react-crud-v3am.onrender.com/api/user/emp/${employeeId}`);
      updateEmpData();
    } catch (error) {
      console.log(error.message);
    }
  };

  const cancel = () => {
    setOpenModal(false);
    setSelectedEmployeeId(null);
  };

  const handleCombine = () => {
    handleDelete();
    cancel();
  };

  return (
    <div className="modalBackground" data-aos="zoom-out">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={cancel}>x</button>
        </div>
        <div className="title">
          <h1>
            Are You Sure You Want to{" "}
            <span style={{ color: "red" }}>Delete?</span>
          </h1>
        </div>
        <div className="body">
          <p>
            By clicking <span style={{ color: "red" }}>Delete</span>, the employee details will be deleted
          </p>
        </div>
        <div className="footer">
          <button onClick={cancel} id="cancelBtn">
            Cancel
          </button>
          <Link to="/user/dashboard">
            <button onClick={handleCombine}>Delete</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
