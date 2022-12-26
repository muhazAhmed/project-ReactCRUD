import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/page-not-found.svg";

const NotFound = () => {
  return (
    <div className="cont-404" data-aos="zoom-in">
      <img src={Logo} alt="logo"/>
      <div className="main-404">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p className="msg-404">
          The Page you are looking for is not available.
          <p>If you still have any issues, please contact us.</p>
        </p>
        <Link className="form-btn" to="/">
          <button>Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
