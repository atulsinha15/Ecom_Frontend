import productsData from "../../data/products.json";
import "./Products.css";

function Product({name, id,image,onAddToCart}){
    return <div key={id} className="product">
            <img src={require(`../../assets/${image}`)}  alt={name}/>
            <div className="product-name">{name}</div>
            <button className="yellow-button" onClick={() => onAddToCart(id, name, image) }>Add to cart</button>
        </div>
        
    
}
function Products({onAddToCart}){
    return (<div className="products-container"> 

      {
        productsData.map((product)=>(
            <Product
            key={product.id}
            name={product.name}
            id={product.id}
            image={product.image}
            onAddToCart={onAddToCart}
            />

               
            
        ))
      }

    </div>);
}

export default Products