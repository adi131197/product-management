import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ isGridView, products, handleEdit, handleDelete }) => {
  if (products.length === 0) {
    return (
      <div className="container">
        <h1>No Products Found.</h1>
      </div>
    );
  }
  return (
    <>
      <div className="container">
        <div className={!isGridView ? "row flex-column" : "row"}>
          {products.map((product) => (
            <div
              className={
                isGridView ? "col-xs-12 col-sm-6 col-md-4 my-1" : "my-1"
              }
              key={product.id}
            >
              <ProductCard
                isGridView={isGridView}
                product={product}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
