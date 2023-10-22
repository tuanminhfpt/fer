import React, { useState, useEffect } from "react";
import "../style/admin.css";
import { Table } from "./table/components/Table";
import { Modal } from "./table/components/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Contact() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      id: "1708",
      username: "John Doe",
      age: "23",
      email: "johndoe@gmail.com",
      password: "123",
      status: "User",
    },
    {
      id: "0608",
      username: "David Smith",
      age: "45",
      email: "davidsmith@gmail.com",
      password: "123",
      status: "Manager",
    },
    {
      id: "2404",
      username: "Jane Doe",
      age: "39",
      email: "janedoe@gmail.com",
      password: "123",
      status: "Admin",
    },
    {
      id: "1202",
      username: "Jenny Huynh",
      age: "28",
      email: "jennyhuynh@gmail.com",
      password: "abc",
      status: "User",
    },
    {
      id: "2512",
      username: "Ariana Grande",
      age: "20",
      email: "arianagrande@gmail.com",
      password: "abc",
      status: "User",
    },
    {
      id: "0507",
      username: "Jack Sparrow",
      age: "33",
      email: "jacksparrow@gmail.com",
      password: "456",
      status: "User",
    },
  ]);

  const localStorageKey = "tableData";

  const saveTableDataToLocalStorage = (data) => {
    localStorage.setItem(localStorageKey, JSON.stringify(data));
  };

  const loadTableDataFromLocalStorage = () => {
    const storedData = localStorage.getItem(localStorageKey);
    if (storedData) {
      setRows(JSON.parse(storedData));
    }
  };

  const [rowToEdit, setRowToEdit] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    loadTableDataFromLocalStorage();
  }, []);

  const handleDeleteRow = (targetIndex) => {
    const actualIndex = (currentPage - 1) * itemsPerPage + targetIndex;

    const updatedRows = [...rows];

    updatedRows.splice(actualIndex, 1);

    setRows(updatedRows);
    saveTableDataToLocalStorage(updatedRows);
  };

  const handleEditRow = (targetIndex) => {
    const actualIndex = (currentPage - 1) * itemsPerPage + targetIndex;

    setRowToEdit(actualIndex);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    let updatedRows;

    if (rowToEdit === null) {
      updatedRows = [...rows, newRow];
    } else {
      if (rowToEdit !== null) {
        const editedRowIndex = rowToEdit;
        updatedRows = [...rows];
        updatedRows[editedRowIndex] = newRow;
      } else {
        updatedRows = [...rows];
      }
    }

    setRows(updatedRows);
    saveTableDataToLocalStorage(updatedRows);

    setRowToEdit(null);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const getFilteredAndPaginatedData = () => {
    const filteredRows = rows.filter(
      (row) =>
        row.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.age.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.password.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.status.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredRows.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const itemsToDisplay = filteredRows.slice(startIndex, endIndex);

    return { itemsToDisplay, totalPages };
  };

  const { itemsToDisplay, totalPages } = getFilteredAndPaginatedData();

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="App">
      <h1>Contact List</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-3">
            <div className="search-bar input-group">
              <input
                className="form-control search-input"
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
              <button className="search-button" type="button">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-2"></div>
          <div className="col-md-1"></div>
          <div className="col-md-3">
            <button
              onClick={() => setModalOpen(true)}
              className="btn btn-success btn-block"
            >
              <i className="bi bi-person-add"></i> Create New User
            </button>
          </div>
        </div>
      </div>
      <Table
        rows={itemsToDisplay}
        deleteRow={handleDeleteRow}
        editRow={handleEditRow}
      />

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null ? rows[rowToEdit] : null}
          rows={rows}
        />
      )}
    </div>
  );
}

export default Contact;
