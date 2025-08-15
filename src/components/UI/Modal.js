import "./Modal.css"

function Modal({showCart,closeCart,children}){
if(!showCart){
    return null;
}
    return (
        <div className="backdrop" onClick={closeCart}>
        <div className="modal" onClick={(event)=>(event.stopPropagation())}>
              { children}
        </div>
        </div>
    );

}

export default Modal;