import React from "react";
import Product from "./Product";

//create + export Description component
export const Description = () => {
  return <p>{Product.Description}</p>; // Render the description property of the product object
};

