import React, { useState } from 'react'

export default function CreatePage() {
  
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  const handleName = (e) => setName(e.target.value)
  const handleQuantity = (e) => setQuantity(e.target.value)
  const handlePrice = (e) => setPrice(e.target.value)
  const handleImage = (e) => setImage(e.target.value)

  const saveProduct = async(e) => {
    e.preventDefault()

    if(name === "" || quantity === "" || price === " " || image === ""){
      alert("Please provide all the below information")
      return;
    }

    try {
      setIsLoading(true)
        const response = await fetch('http://localhost:8080/api/products', {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify({
            name,
            quantity: parseInt(quantity),
            price: parseInt(price),
            image,
          })
        })
      
      if (!response.ok) {
        throw new Error('Failed to save product');
      }
    
      console.log('Product saved successfully');

    } catch (error) {
      console.error(error)
    } finally{
      setIsLoading(false)
    }
  }

  
  return (
    <div className='max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6'>
      <h2 className="font-semibold text-2xl mb-4 block text-center">
        Create a product
      </h2>

      <form onSubmit={saveProduct}>
        <div className="space-y-2">

          <div>
            <label>Name</label>
            <input 
              type="text" 
              value={name}
              className='w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400'
              placeholder='Enter the name'
              onChange={handleName}
            />
          </div>
          
          <div>
            <label>Quantity</label>
            <input 
              type="number" 
              value={quantity}
              className='w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400'
              placeholder='Enter the quantity'
              onChange={handleQuantity}
            />
          </div>
                    
          <div>
            <label>Price</label>
            <input 
              type="number" 
              value={price}
              className='w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400'
              placeholder='Enter the price'
              onChange={handlePrice}
            />
          </div>
                    
          <div>
            <label>Image URL</label>
            <input 
              type="text" 
              value={image}
              className='w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400'
              placeholder='Enter the quantity'
              onChange={handleImage}
            />
          </div>

          <div>
            { !isLoading && (<button className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">Save</button>)}
          </div>
        </div>
      </form>
    </div>
  )
}
