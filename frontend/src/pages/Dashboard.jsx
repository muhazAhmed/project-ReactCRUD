import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";
import { AuthContext } from "../context/AuthContext";
import Modal from "../components/Model";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [emp, setEmp] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [isLoading, setIsLoading] = useState(false); // New state variable

  const { currentUser } = useContext(AuthContext);

  const fetchEmp = async () => {
    setIsLoading(true); // Set loading state to true
    try {
      const result = await axios.get(
        "https://react-crud-v3am.onrender.com/api/user/emp"
      );
      setEmp(result.data);
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false); // Set loading state to false after data fetch
  };

  const updateEmpData = async () => {
    setIsLoading(true); // Set loading state to true
    try {
      const result = await axios.get(
        "https://react-crud-v3am.onrender.com/api/user/emp"
      );
      setEmp(result.data);
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false); // Set loading state to false after data update
  };

  useEffect(() => {
    fetchEmp();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Object.entries(emp)
    .filter((item) =>
      item[1].Name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(
    Object.entries(emp).filter((item) =>
      item[1].Name.toLowerCase().includes(searchQuery.toLowerCase())
    ).length / itemsPerPage
  );

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <>
      <Navbar />
      <div>
        {modalOpen && (
          <Modal
            setOpenModal={setModalOpen}
            employeeId={selectedEmployeeId}
            setSelectedEmployeeId={setSelectedEmployeeId}
            updateEmpData={updateEmpData}
          />
        )}
        <div className="dash-main">
          <div className="header">
            <Link to="/employ/add">
              <button data-aos="zoom-out">
                <i className="fa-solid fa-user-plus"></i>{" "}
              </button>
            </Link>
            <h1 data-aos="zoom-in">
              Welcome back{" "}
              <span style={{ color: "red" }}>{currentUser.User.username}</span>
            </h1>
          </div>
          <div className="search" data-aos="zoom-in">
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            <input
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {isLoading ? ( // Display loading animation if isLoading is true
            <div style={{marginLeft : "40rem", marginTop : "2rem"}}><HashLoader color="#3EDFFF" loading={isLoading} size={180} /></div>
          ) : (
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
                {currentItems.map((item, index) => (
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
                      <Link
                        onClick={() => {
                          setSelectedEmployeeId(item[1]._id);
                          setModalOpen(true);
                        }}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <div className="pagination-btn">
            <div>
              <button
                onClick={() => handlePageChange(1)}
                disabled={isFirstPage}
                className={isFirstPage ? "disabled" : ""}
              >
                &lt;&lt;
              </button>
              &nbsp;&nbsp;
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={isFirstPage}
                className={isFirstPage ? "disabled" : ""}
              >
                Previous Page ({currentPage - 1})
              </button>
            </div>
            <div>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={isLastPage}
                className={isLastPage ? "disabled" : ""}
              >
                Next Page ({currentPage + 1})
              </button>
              &nbsp;&nbsp;
              <button
                onClick={() => handlePageChange(totalPages)}
                disabled={isLastPage}
                className={isLastPage ? "disabled" : ""}
              >
                &gt;&gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
