import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  let product;
  try {
    const response = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
    product = response.data.data;
  } catch (error) {
    console.log(error);
  }
  console.log(product);
  return (
    <div className="h-auto flex  place-content-center ">
      <div className="w-96 pb-6 h-auto bg-danger shadow-lg m-2 bg-gradient-to-r from-gray-300 to-gray-200 grid grid-cols-1 px-10 gap-2  ">
        <div>
          <Image
            src={product.imageCover}
            alt={product.title}
            className="object-cover rounded-xl mx-auto mt-5"
            width={500}
            height={500}
          />
        </div>
        <div>
          <p>{product.category.name}</p>
        </div>
        <div className="flex justify-between mt-2">
          <h1>{product.brand.name}</h1>
          <p>{product.price}$</p>
        </div>
        <div className="mt-2">
          <p>{product.description}</p>
        </div>
        <div className="mt-4">
          <h2>{product.title}</h2>
        </div>
        <div className="grid justify-items-stretch text-center my-2 h-10">
          <Link
            className=" px-7 py-2 rounded-full bg-gray-800 text-white "
            href="/"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
