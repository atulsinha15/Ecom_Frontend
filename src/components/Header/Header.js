import "./Header.css"

function Header({openCart}){
     return   <div className="header">
        <h1>
            This is React store            
        </h1>
        <div>
                <button className="yellow-button" onClick={openCart}>Cart</button>
        </div>

        
        
        
    </div>
}

export default Header