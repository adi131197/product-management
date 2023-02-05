import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header d-flex justify-content-between">
        <span className="header-product">Product List</span>
        <button
          className="btn btn-outline-primary"
          data-bs-toggle="modal"
          data-bs-target="#addeditModal"
        >
          Add Product
        </button>
      </div>
    </>
  );
};

export default Header;
