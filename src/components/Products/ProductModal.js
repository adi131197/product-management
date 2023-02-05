import React, { useState, useEffect } from "react";

const ProductModal = ({ product, products, updateProducts }) => {
  let [data, setData] = useState({
    id: 0,
    title: "",
    description: "",
    price: "0",
  });

  useEffect(() => {
    setData(product);
  }, [product]);

  let [error, setError] = useState({
    title: "",
    description: "",
    price: "",
  });

  const validateData = () => {
    if (data.title === "") {
      setError({ title: "Title is required." });
      return false;
    } else if (data.description === "") {
      setError({ description: "Description is required." });
      return false;
    } else if (data.price === "0") {
      setError({ price: "Price is required." });
      return false;
    } else {
      return true;
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (validateData()) {
      let newData = { ...data };

      if (data.id === 0) {
        newData.id = products.length + 1;
      }
      updateProducts(newData);
      setData({
        id: 0,
        title: "",
        description: "",
        price: "0",
      });

      document.getElementById("addeditModal").classList.remove("show");
      document
        .querySelectorAll(".modal-backdrop")
        .forEach((el) => el.classList.remove("modal-backdrop"));
    }
  };

  return (
    <div
      className="modal fade"
      id="addeditModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add / Edit Product</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Product Title
                </label>
                <input
                  type="text"
                  className={
                    error.title ? "form-control is-invalid" : "form-control"
                  }
                  id="title"
                  name="title"
                  value={data.title}
                  onChange={(e) => handleChange(e)}
                />
                <div className="invalid-feedback">{error.title}</div>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  rows="3"
                  className={
                    error.description
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  id="description"
                  name="description"
                  value={data.description}
                  onChange={(e) => handleChange(e)}
                />
                <div className="invalid-feedback">{error.description}</div>
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="text"
                  className={
                    error.price ? "form-control is-invalid" : "form-control"
                  }
                  id="price"
                  name="price"
                  value={data.price}
                  onChange={(e) => handleChange(e)}
                />
                <div className="invalid-feedback">{error.price}</div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
