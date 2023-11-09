import React from "react";
import Product from "./Product";

//create + export imageUrl component
export function imageUrl () {
  return <img src={Product.ImageUrl} alt="Tesla" />; // Render the image property of the product object
  
};
