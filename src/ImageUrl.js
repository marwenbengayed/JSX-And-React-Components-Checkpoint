import React from "react";
import Product from "./Product";

// Define the Image component
export function imageUrl () {
  return <img src={Product.ImageUrl} alt="Tesla" />; // Render the image property of the product object
  
};
  // Export the Image component as the default export