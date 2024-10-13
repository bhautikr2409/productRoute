import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 

function Products() {
  const [products, setProducts] = useState([]);

  const apiCall = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <>
      <h1 className="text-[50px] text-center p-8 font-semibold">Product List</h1>
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="border border-black max-w-[500px] p-5 flex flex-col items-center justify-between"
          >
            <h1 className="text-[18px] font-medium">{product.title}</h1>
            <img
              className="max-w-[300px] h-[300px]"
              src={product.image}
              alt={product.title}
            />
            <span className="text-[20px] font-semibold">{product.price}</span>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Products;
