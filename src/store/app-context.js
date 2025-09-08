import { createContext } from "react";

const AppContext=createContext({
     cartItems:[],
    products:[],
    showAddProduct:false,
    showCart:false,
    openCart: ()=>{},
    closeCart: ()=>{},
    handleAddProduct: ()=>{},
    handleDecreaseQuantity: ()=>{},
    handleIncreaseQuantity: ()=>{},
    handleAddToCart: ()=>{},
    closeAddProduct: ()=>{},
    openAddProduct: ()=>{},

});

export default AppContext;