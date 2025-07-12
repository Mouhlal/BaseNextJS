import Link from 'next/link';
import React from 'react'

export const metadata = {
    title : {
        default: "All Products",
        template: "%s | All Products",
        absolute: "All Products", //ecraser le titre par défaut
    },
    description: "This is the All Products page",
}

export default function AllProducts() {
    const products = [
        { id: 1, name: 'Product 1' , description: 'This is product 1' },
        { id: 2, name: 'Product 2' , description: 'This is product 2' },
        { id: 3, name: 'Product 3', description: 'This is product 3' },
    ];
  return (
    <>
        <div>
            <h1>All Product</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id} className="border p-4 mb-4">
                        <h2 className="text-xl font-bold">{product.name}</h2>
                        <Link href={`/products/${product.id}`} className="bg-blue-500 text-white p-2 rounded">
                            View Details
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
} 
