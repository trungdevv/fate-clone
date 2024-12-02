"use client";
import { useState } from "react";
import { ProductCard } from "./product-card";
import { CategoryFilter } from "./category-filter";

/* eslint-disable @typescript-eslint/no-explicit-any */
type props = {
  products: any;
  categories: any;
};
export default function ProductFilter({ products, categories }: props) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (category: string) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(
          (product: any) => product.categories[0].title === category
        )
      );
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-[#32343e42] rounded-xl p-4 container max-w-7xl mx-auto gap-8">
      <div className="bg-[#1a1b219f] p-4 rounded-xl">
        <CategoryFilter
          categories={categories}
          onFilterChange={handleFilterChange}
        />
      </div>

      <div className=" grid grid-cols-2  md:grid-cols-3 gap-4 md:gap-8">
        {filteredProducts.map((product: any) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
