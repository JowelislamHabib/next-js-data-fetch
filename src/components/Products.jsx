import React from "react";

const Products = ({ product }) => {
  const { name, category, price, stock, rating, brand, description, image } =
    product;
  return (
    <div>
      <div className="card  bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
