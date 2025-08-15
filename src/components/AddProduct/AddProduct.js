import { useState } from "react";
// import { useRef, useState } from "react";
import Modal from "../UI/Modal";

import "./AddProduct.css";

function AddProduct({ showAddProduct, closeAddProduct, onAddProduct }) {
  // const nameRef = useRef();
  const [productName, setProductName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(nameRef.current.value);
    // const nameValue=nameRef.current.value;

    // onAddProduct(nameValue);
    onAddProduct(productName);
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };


  return (
    <Modal show={showAddProduct} onClose={closeAddProduct}>
      <div className="add-product-container">
        <p className="add-product-heading">Add Product</p>
        <form onSubmit={handleSubmit} className="add-product-form">
          <label htmlFor="productName" className="form-label">
            Enter Product Name
          </label>
          <input className="form-input"
                  name="product-name"
                  value={productName}
                  onChange={handleProductNameChange} />
          <button type="submit" className="submit-button">
            Add Product
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AddProduct;
