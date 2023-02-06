import React from "react";
import image from "../../assets/dummy.png";
import "./ProductCard.css";

const ProductCard = ({ isGridView, product, handleEdit, handleDelete }) => {
  return (
    <div
      className={
        !isGridView
          ? "card product-card flex-row"
          : "card product-card card-height"
      }
    >
      <img
        src={image}
        className={!isGridView ? "card-img-top img-width" : "card-img-top"}
        alt={product.title}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <h6 className="card-subtext">Price: ${product.price}</h6>
        <button
          className="btn btn-outline-primary m-1"
          data-bs-toggle="modal"
          data-bs-target="#addeditModal"
          onClick={() => handleEdit(product)}
        >
          Edit
        </button>
        <button
          className="btn btn-outline-primary m-1"
          onClick={() => handleDelete(product)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
