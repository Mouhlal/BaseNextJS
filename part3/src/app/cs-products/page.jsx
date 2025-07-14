"use client";
import React, { useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  const url = "https://fakestoreapi.com/products";

  const getProducts = async () => {
    const response = await fetch(url,{
      cache: 'no-store' // Ensure fresh data on each request
    });
    const data = await response.json();
    console.log("Products:", data);
    setProducts(data);
  };

  return (
    <>
     <h1>Products</h1>
      <button
        onClick={getProducts}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Charger les produits
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              className="rounded-t-lg w-full h-48 object-contain p-4 bg-white"
              src={p.image}
              alt={p.title}
            />
            <div className="p-5">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {p.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {p.description}
              </p>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm font-semibold">
                ${p.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
