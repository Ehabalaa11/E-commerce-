import React from "react";
import Card from "./Card";

const ProductCard = (data) => {
  return (
    <div className="sm:grid grid-cols-3  md:grid-cols-4 lg:grid-cols-5 xl:grid-clos-6 bg-gradient-to-r from-gray-400 to-gray-300">
      {data.data.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCard;
