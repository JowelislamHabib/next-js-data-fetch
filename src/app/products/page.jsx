import Products from "@/components/Products";
import React from "react";

const getProducts = async () => {
  const res = await fetch("http://localhost:8000/products", {
    cache: "force-cache",
  });
  return res.json();
};

const Productpage = async () => {
  const products = await getProducts();

  console.log(products);
  return (
    <div className="container mx-auto px-4">
      <h1>Products: {products.length}</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Productpage;
