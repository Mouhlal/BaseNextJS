/* 'use client'

import React, { useState } from 'react'
import Link from 'next/link'    
import { useRouter } from 'next/navigation';
export default function Posts() {
    const [posts, setPosts] = useState([
         { id: 1, title: 'Post 1', content: 'Content of Post 1' },
        { id: 2, title: 'Post 2', content: 'Content of Post 2' },
        { id: 3, title: 'Post 3', content: 'Content of Post 3' }
    ]);

    const router = useRouter();

    const handleDelete = (id) => {
        const deletePosts = posts.filter((post)=>post.id !==id);
        setPosts(deletePosts);
        console.log(`Post with id ${id} deleted`);
    }
  return (
   <>
   <div>
    <h1>Les Posts </h1>
    {
        posts.map((post) =>(
            <div key={post.id} className="border p-4 mb-4">
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p>{post.content}</p>
                <button onClick={()=>handleDelete(post.id)} className="bg-blue-500 text-white p-2 rounded mr-2">
                    Supprimer
                </button>
            </div>
        ))
    }
   </div>
   </>
  )
}
 */

'use client';
import { useSearchParams } from 'next/navigation';

export default function Products() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  const allProducts = [
    { id: 1, name: 'Banane', category: 'fruits' },
    { id: 2, name: 'Pomme', category: 'fruits' },
    { id: 3, name: 'Carotte', category: 'légumes' },
    { id: 4, name: 'Brocoli', category: 'légumes' },
  ];

  const filteredProducts = category
    ? allProducts.filter((p) => p.category === category)
    : allProducts;

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Produits {category && `(${category})`}</h1>
      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id} className="border p-2 mb-2">{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
