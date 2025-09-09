import React, { useEffect } from "react";
import AppContext from "./app-context";

import { useState } from "react";

const AppContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [loading,setLoading]=useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [products, setProducts] = useState([]);

  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);

  const openAddProduct = () => setShowAddProduct(true);
  const closeAddProduct = () => setShowAddProduct(false);

  const handleAddToCart = (productId, productName, productImg) => {
    const productInCartIndex = cartItems.findIndex(
      (item) => item.id === productId
    );
    if (productInCartIndex === -1) {
      setCartItems((prev) => [
        ...prev,
        { id: productId, name: productName, image: productImg, quantity: 1 },
      ]);
    } else {
      const newCartItems = [...cartItems];
      newCartItems[productInCartIndex].quantity += 1;
      setCartItems(newCartItems);
    }
  };

  const handleIncreaseQuantity = (productId) => {
    const productIndex = cartItems.findIndex((item) => item.id === productId);
    if (productIndex === -1) return;
    const newCartItems = [...cartItems];
    newCartItems[productIndex].quantity += 1;
    setCartItems(newCartItems);
  };

  const handleDecreaseQuantity = (productId) => {
    const productIndex = cartItems.findIndex((item) => item.id === productId);
    if (productIndex === -1) return;
    let newCartItems = [...cartItems];
    if (newCartItems[productIndex].quantity === 1) {
      newCartItems = newCartItems.filter((item) => item.id !== productId);
    } else {
      newCartItems[productIndex].quantity -= 1;
    }
    setCartItems(newCartItems);
  };

  const handleAddProduct = (productName) => {
    setProducts((prev) => [
      ...prev,
      { id: prev.length + 1, name: productName, image: "default_product.png" },
    ]);
    closeAddProduct(); //close modal after adding
  };

  useEffect(() => {
    const fetchProducts = async () => {
        setLoading(true);
      try {
        const response = await fetch(
          "https://ecomdb-71424-default-rtdb.firebaseio.com/products.json"
        );
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  const appContextValue = {
    cartItems,
    products,
    showAddProduct,
    showCart,
    loading,
    openCart,
    closeCart,
    handleAddProduct,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    handleAddToCart,
    closeAddProduct,
    openAddProduct,
  };
  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
