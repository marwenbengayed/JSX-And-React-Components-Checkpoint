import React from "react";
import Product from "./Product";

// Define the Description component
export const Description = () => {
  return <p>{Product.Description}</p>; // Render the description property of the product object
};

  // Export the Description component as the default export