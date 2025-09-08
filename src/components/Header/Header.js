import AppContext from "../../store/app-context";
import "./Header.css";
import { useContext } from "react";

function Header( ) {
  const {openCart,openAddProduct}=useContext(AppContext);
  return (
    <div className="header">
      <h1>This is React store</h1>

       <div>
            <button
            className="yellow-button"
            onClick={openAddProduct}
            style={{ marginRight: "20px" }}
            >
            Add Product
            </button>
            <button className="yellow-button" onClick={openCart}>
            Cart
            </button>
      </div>

    </div>
  );
}

export default Header;
