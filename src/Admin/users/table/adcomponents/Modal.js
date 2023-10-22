import React, { useState } from "react";
import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue, rows }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      id: "",
      username: "",
      age: "20",
      email: "@gmail.com",
      password: "",
      status: "User",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (
      formState.username &&
      formState.age &&
      formState.email &&
      formState.password &&
      formState.status
    ) {
      if (defaultValue === null && !formState.id) {
        setErrors("ID is required.");
        return false;
      } else if (defaultValue === null) {
        const isIdUnique = !rows.some((row) => row.id === formState.id);
        if (!isIdUnique) {
          setErrors("ID must be unique.");
          return false;
        }
      } else if (defaultValue !== null) {
        const isIdUnique = !rows.some(
          (row) => row.id === formState.id && row.id !== defaultValue.id
        );
        if (!isIdUnique) {
          setErrors("ID must be unique.");
          return false;
        }
      }
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal-box">
        <form>
          <div className="form-group">
            <label htmlFor="id">ID</label>
            <input name="id" onChange={handleChange} value={formState.id} />
          </div>
          <div className="form-group">
            <label htmlFor="username">Name</label>
            <input
              name="username"
              onChange={handleChange}
              value={formState.username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              name="age"
              type="number"
              onChange={handleChange}
              value={formState.age}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              onChange={handleChange}
              value={formState.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              onChange={handleChange}
              value={formState.password}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Role</label>
            <select
              name="status"
              onChange={handleChange}
              value={formState.status}
            >
              <option value="User">User</option>
              <option value="Manager">Manager</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
