import Card from '@/components/Card'
import ProductCard from '@/components/ProductCard';
import axios from 'axios';
import React from 'react'

const page = async() => {
let product;
try{
  const response =await axios.get("https://ecommerce.routemisr.com/api/v1/products")
  product = response.data.data
}catch(error){
  console.log(error)
}
  return (
    <div><ProductCard data={product}/></div>
  )
}

export default page