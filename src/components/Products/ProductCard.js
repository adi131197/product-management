import React from "react";
import image from "../../assets/dummy.png";

const ProductCard = ({ isGridView, product, handleEdit, handleDelete }) => {
  return (
    <div
      className={
        !isGridView ? "card product-card flex-row" : "card product-card"
      }
    >
      <img src={image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <h6 className="card-subtext">Price: ${product.price}</h6>
        <button
          className="btn btn-outline-primary mx-1"
          data-bs-toggle="modal"
          data-bs-target="#addeditModal"
          onClick={() => handleEdit(product)}
        >
          Edit
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => handleDelete(product)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
