import React from "react";
import "./ProductView.css";

const ProductView = ({ handleSearch, handleViewChange }) => {
  return (
    <div className="d-flex justify-content-between">
      <input
        className="searchbar"
        type="search"
        placeholder="Search by Title"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div>
        <button
          className="btn btn-primary m-2"
          onClick={() => handleViewChange("list")}
        >
          <i className="fa fa-list" aria-hidden="true"></i> List View
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => handleViewChange("grid")}
        >
          <i className="fa fa-th" aria-hidden="true"></i> Grid View
        </button>
      </div>
    </div>
  );
};

export default ProductView;
