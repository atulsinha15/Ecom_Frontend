
import { useContext } from "react";
import "./Products.css";
import AppContext from "../../store/app-context";

function Product({name, id,image}){
  const {handleAddToCart}=useContext(AppContext);
    return <div key={id} className="product">
            <img src={require(`../../assets/${image}`)}  alt={name}/>
            <div className="product-name">{name}</div>
            <button className="yellow-button" onClick={() => handleAddToCart(id, name, image) }>Add to cart</button>
        </div>
        
    
}
function Products(){
  const {products}=useContext(AppContext);
    return (<div className="products-container"> 

      {
        products.map((product)=>(
            <Product
            key={product.id}
            name={product.name}
            id={product.id}
            image={product.image}
             
            />

               
            
        ))
      }

    </div>);
}

export default Products