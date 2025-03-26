"use client"
import React from "react";

import { useGetAllCategories } from "./queries/products/useGetAllCategories";
export default function Example() {
 const {data} = useGetAllCategories()
  console.log(data)
  return (
    <div>
    
    </div>
  );
}
