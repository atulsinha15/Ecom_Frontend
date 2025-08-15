import "./Header.css";

function Header({ onCartClick, onAddProductClick }) {
  return (
    <div className="header">
      <h1>This is React store</h1>

       <div>
            <button
            className="yellow-button"
            onClick={onAddProductClick}
            style={{ marginRight: "20px" }}
            >
            Add Product
            </button>
            <button className="yellow-button" onClick={onCartClick}>
            Cart
            </button>
      </div>

    </div>
  );
}

export default Header;
