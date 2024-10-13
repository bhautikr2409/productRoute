import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; 


function SingleProduct() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});

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
      <div className="border border-black max-w-[500px] p-5 flex flex-col items-center justify-between mx-auto">
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
            <p className="text-[16px]">{singleProduct.description}</p>
          </>
        )}
      </div>
    </>
  );
}

export default SingleProduct;
