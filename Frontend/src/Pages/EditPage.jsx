import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function EditPage() {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({
    name: '',
    quantity: '',
    price: '',
    image: '',
  });
  const navigate = useNavigate()

  const getProduct = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(`http://localhost:8080/api/products/${id}`);

      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }

      const productData = await response.json();

      setProduct({
        name: productData.name,
        quantity: productData.quantity,
        price: productData.price,
        image: productData.image,
      });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  const updateProduct = async(e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      await fetch(`http://localhost:8080/api/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      toast.success(`Updated ${product.name} successfully`);
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  
  const handleName = (e) => setProduct({...product, name: e.target.value})
  const handleQuantity = (e) => setProduct({...product, quantity: e.target.value})
  const handlePrice = (e) => setProduct({...product, price: e.target.value})
  const handleImage = (e) => setProduct({...product, image: e.target.value})

  useEffect(() => {
    getProduct();
  }, [id]);
  
  return (
    <div className='max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6'>
    <h2 className="font-semibold text-2xl mb-4 block text-center">
      Update a product
    </h2>

    {isLoading ? ("loading...") : (
      <>
      <form onSubmit={updateProduct}>
      <div className="space-y-2">

        <div>
          <label>Name</label>
          <input 
            type="text" 
            value={product.name}
            className='w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400'
            placeholder='Enter the name'
            onChange={handleName}
          />
        </div>
        
        <div>
          <label>Quantity</label>
          <input 
            type="number" 
            value={product.quantity}
            className='w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400'
            placeholder='Enter the quantity'
            onChange={handleQuantity}
          />
        </div>
                  
        <div>
          <label>Price</label>
          <input 
            type="number" 
            value={product.price}
            className='w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400'
            placeholder='Enter the price'
            onChange={handlePrice}
          />
        </div>
                  
        <div>
          <label>Image URL</label>
          <input 
            type="text" 
            value={product.image}
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
      </>
    )}


  </div>
  );
}

