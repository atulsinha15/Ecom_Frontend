import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

import AddProduct from "./components/AddProduct/AddProduct";

import AppContextProvider from "./store/AppContextProvider";

function App() {
  return (
    <AppContextProvider>
      <div>
        <Header />
        <Products />
        <Cart />

        <AddProduct />
      </div>
    </AppContextProvider>
  );
}

export default App;
