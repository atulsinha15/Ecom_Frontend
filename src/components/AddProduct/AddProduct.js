
import Modal from "../UI/Modal";

import "./AddProduct.css";

function AddProduct({ showAddProduct, closeAddProduct }) {

  const handleSubmit = (event) => {
   
  };

  return (
    <Modal show={showAddProduct} onClose={closeAddProduct}>
      <div className="add-product-container">
        <p className="add-product-heading">Add Product</p>
        <form onSubmit={handleSubmit} className="add-product-form">
          <label htmlFor="productName" className="form-label">
            Enter Product Name
          </label>
          <input
           
            className="form-input"
          />
          <button type="submit" className="submit-button">
            Add Product
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AddProduct;