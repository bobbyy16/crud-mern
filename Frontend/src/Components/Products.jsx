import React from 'react'
import { Link } from 'react-router-dom'

export default function Products({products}) {
  return (
  
    <div className="bg-white rounded shadow-lg overflow-hidden">
            <img src={products.image} className="w-full h-60 object-cover" />
            <div className="px-4 pt-2 pb-4">
                <h2 className="text font-semibold">{products.name}</h2>
                <div className="text-sm">Quantity: {products.quantity}</div>
                <div className="text-sm">Price : &#8377;{products.price}</div>
            </div>

            <div className="mt-2 flex gap-4">
                <Link to={`/edit/${products._id}`} className="inline-block w-full text-center shadow-md text-sm bg-gray-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer">Edit</Link>
                <button onClick={() => deleteProduct(products._id)}  className="inline-block w-full text-center shadow-md text-sm bg-red-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-red-600 hover:cursor-pointer">Delete</button>
            </div>

    </div>
  )
}
