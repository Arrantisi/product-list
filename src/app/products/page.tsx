import ProductLayout from "@/components/layouts/product-layout";
import { SearchParams } from "@/types";
import React from "react";

const Product = ({ searchParams }: SearchParams) => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <ProductLayout searchParams={searchParams} />
    </section>
  );
};

export default Product;
