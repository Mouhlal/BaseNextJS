import React from 'react'

export default function ProductByCategory({params , searchParams}) {
    console.log(params , searchParams);
  return (
   <>
    <div>Category is : {params.CategoryName} </div>
    <div>Product is : {params.ProductId} </div>
   </> 

  )
}
