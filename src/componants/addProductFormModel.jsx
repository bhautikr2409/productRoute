import axios from "axios";
import React, { useState } from "react";

const AddProductFormModel = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productImgURL: "",
    productPrice: "",
    productDescription: "",
  });

  const [errors, setErrors] = useState({
    productName: "",
    productImgURL: "",
    productPrice: "",
    productDescription: "",
  });

  const resetForm = () => {
    setFormData({
      productName: "",
      productImgURL: "",
      productPrice: "",
      productDescription: "",
    });
    setErrors({
      productName: "",
      productImgURL: "",
      productPrice: "",
      productDescription: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on change
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      productName: "",
      productImgURL: "",
      productPrice: "",
      productDescription: "",
    };

    if (!formData.productName) {
      valid = false;
      newErrors.productName = "Product name is required.";
    }
    if (!formData.productImgURL) {
      valid = false;
      newErrors.productImgURL = "Product image URL is required.";
    }
    if (!formData.productPrice || isNaN(Number(formData.productPrice))) {
      valid = false;
      newErrors.productPrice = "Valid product price is required.";
    }
    if (!formData.productDescription) {
      valid = false;
      newErrors.productDescription = "Product description is required.";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data", formData);
      axios
        .post("http://localhost:5000/api/products", {
          title: formData.productName,
          price: formData.productPrice,
          description: formData.productDescription,
          category: "test",
          image: formData.productImgURL,
        })
        .then(function (response) {
          console.log("data added successfully", response);
        })
        .catch(function (error) {
          console.log(error);
        });

      const confirmationModal = document.getElementById("confirmation_modal");
      confirmationModal?.showModal();
      resetForm();
    }
  };

  const handleModalClose = () => {
    resetForm();
    document.getElementById("my_modal_1")?.close();
  };

  const closeConfirmationModal = () => {
    const confirmationModal = document.getElementById("confirmation_modal");
    confirmationModal?.close();
    // console.log("form data" , formData);
  };

  return (
    <>
      <button
        className="btn bg-transparent border-none !text-white !font-bold text-base hover:bg-transparent"
        onClick={() => document.getElementById("my_modal_1")?.showModal()}
      >
        Add Products
      </button>
      {/* Add Product Modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-gray-800 text-white">
          <h2 className="text-lg font-bold">Add Product</h2>
          <form onSubmit={handleSubmit}>
            {/* Product Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">
                Product Name
              </label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border text-black ${
                  errors.productName ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.productName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.productName}
                </p>
              )}
            </div>

            {/* Product Image URL */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">
                Product Image URL
              </label>
              <input
                type="text"
                name="productImgURL"
                value={formData.productImgURL}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border text-black ${
                  errors.productImgURL ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.productImgURL && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.productImgURL}
                </p>
              )}
            </div>
            {/* Product Price */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">
                Product Price
              </label>
              <input
                type="text"
                name="productPrice"
                value={formData.productPrice}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border text-black ${
                  errors.productPrice ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.productPrice && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.productPrice}
                </p>
              )}
            </div>
            {/* Product Description */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">
                Product Description
              </label>
              <textarea
                name="productDescription"
                value={formData.productDescription}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border text-black ${
                  errors.productDescription
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:ring-blue-500 focus:border-blue-500`}
                rows={3}
              />
              {errors.productDescription && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.productDescription}
                </p>
              )}
            </div>
            {/* Submit Button */}
            <div className="modal-action">
              <button
                type="submit"
                className="btn bg-blue-500 text-white hover:bg-blue-600"
              >
                Submit
              </button>
              <button type="button" className="btn" onClick={handleModalClose}>
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>

      {/* Confirmation Modal */}
      <dialog id="confirmation_modal" className="modal">
        <div className="modal-box">
          <h2 className="text-lg font-bold">Success</h2>
          <p className="my-4 text-black">
            Your product has been added successfully!
          </p>
          <div className="modal-action">
            <button
              className="btn bg-blue-500 text-white hover:bg-blue-600"
              onClick={closeConfirmationModal}
            >
              Okay
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default AddProductFormModel;
