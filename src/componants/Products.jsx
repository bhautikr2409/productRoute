import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

function Products() {
  const [products, setProducts] = useState([]);

  const { addCart } = useContext(CartContext);

  const apiCall = () => {
    // axios
    // .get("https://fakestoreapi.com/products")
    axios
      .get("http://localhost:5000/api/products")
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleDelete = (product) => {
    console.log("produc", product);

    axios
      .delete(`http://localhost:5000/api/products/${product._id}`)
      .then(function (response) {
        console.log("prduct delete ", response);
        apiCall();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    apiCall();
  }, []);

  console.log("product check", products);

  return (
    <>
      <div className="grid  grid-flow-col gap-4 my-6 px-2">
        {products.map((product, index) => (
          <div
            key={index}
            className="border border-black max-w-[500px] p-5 flex flex-col items-center justify-between bg-white"
          >
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="flex flex-col items-center justify-between"
            >
              <h1 className="text-[18px] font-medium text-black">
                {product.title}
              </h1>
              <img
                className="max-w-[300px] h-[300px]"
                src={product.image}
                alt={product.title}
              />
              <span className="text-[20px] mt-5 text-black font-semibold">
                {product.price}
              </span>
            </Link>

            <div className="flex justify-between gap-9 mt-5">
              <button
                type="button"
                className="px-4 py-2 text-white bg-blue-500 text-[18px] font-medium w-full rounded-xl"
              >
                Buy
              </button>
              <button
                onClick={() => addCart(product)}
                type="button"
                className="px-4 py-2 text-white bg-orange-500 text-[18px] font-medium w-full rounded-xl"
              >
                Add Cart
              </button>
              <button
                onClick={() => handleDelete(product)}
                type="button"
                className="px-4 py-2 text-white bg-red-800 text-[18px] font-medium w-full rounded-xl"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
