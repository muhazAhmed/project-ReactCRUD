import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Modal({ setOpenModal }) {
  const navigate = useNavigate();
  let id = setOpenModal.id;
  console.log(setOpenModal)

  const handleDelete = async () => {
    try {
      await axios.delete(`/user/emp/${id}`);
      navigate("/user/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  const cancle = () => {
    setOpenModal(false);
  };


  const handleCombain = () => {
    handleDelete();
    cancle();
    
  };

  return (
    <div className="modalBackground" data-aos="zoom-out">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={cancle}>x</button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to <span style={{"color" : "red"}}>Delete?</span></h1>
        </div>
        <div className="body">
          <p>By clicking <span style={{"color" : "red"}}>Delete </span>, the employ details will be deleted</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <Link to="/user/dashboard">
            <button  onClick={handleCombain}>Delete</button>{}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
