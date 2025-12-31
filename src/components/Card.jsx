import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ product }) => {
  console.log(product);
  return (
    <div className="min-h-96 shadow-lg m-2 bg-gradient-to-r from-gray-300 to-gray-200 grid grid-cols-1 px-10 ">
      <div>
        <Image
          src={product.imageCover}
          alt={product.title}
          className="object-cover rounded-xl mx-auto mt-5"
          width={500}
          height={500}
        />
      </div>
      <div className="flex justify-between mt-4">
        <h1>{product.brand.name}</h1>
        <p>{product.price}$</p>
      </div>
      <div className=" mt-4">
        <h2 className="truncate">{product.title}</h2>
      </div>
      <div className="grid justify-items-stretch text-center my-5 h-10">
        <Link
          className=" px-7 py-2 rounded-full bg-gray-800 text-white "
          href={`/details/${product.id}`}
        >
          {" "}
          more..
        </Link>
      </div>
    </div>
  );
};

export default Card;
