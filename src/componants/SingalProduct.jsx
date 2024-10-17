import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; 
import { CartContext } from "./CartContext"; 
import { useContext } from "react";


function SingleProduct() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const {addCart} = useContext(CartContext)


  const singleProductApiCall = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setSingleProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    singleProductApiCall();
  }, [id]); 

  return (
    <>
      <h1 className="text-[100px] text-center font-semibold">Product Details</h1>
      <div className="border border-black max-w-[500px] p-5 flex flex-col items-center justify-between mx-auto my-6">
        {singleProduct.id && (
          <>
            <h1 className="text-[18px] font-medium">{singleProduct.title}</h1>
            <img
              className="max-w-[300px] h-[300px]"
              src={singleProduct.image}
              alt={singleProduct.title}
            />
            <span className="text-[20px] font-semibold">
              ${singleProduct.price}
            </span>
            <div className="flex justify-between gap-9 mt-5">
              <button className="px-4 py-2 bg-blue-500 text-[18px] font-medium w-full rounded-xl">Buy</button>
              <button  onClick={()=> addCart(singleProduct)} className="px-4 py-2 bg-orange-500 text-[18px] font-medium w-full rounded-xl">Add Cart</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default SingleProduct;
