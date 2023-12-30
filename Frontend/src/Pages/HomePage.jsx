import React, { useEffect, useState } from 'react';
import Products from '../Components/Products';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:8080/api/products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApi();
  }, []);

  return (
    <>
        <div>
            <Link to="/create" className="inline-block mt-4 shadow-md bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">
                Create a Product
            </Link>
        </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
      {error && <p style={{color: 'red'}}>{error}</p>}
      {isLoading ? (
        "Loading..."
      ) : (
        <>
            {products.length > 0 ? (
                <>
                    {products.map((product) => {
                        return (
                            <Products key={product._id} products={product}/>
                        )
                    })}
                </>
            ) : (
                    <div className='text-gray-800'>No products found</div>
                )
            }
        </>
      )}
      
    </div>
</>
  );
}
