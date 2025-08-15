import "./Modal.css"

function Modal({show,onClose,children}){
if(!show){
    return null;
}
    return (
        <div className="backdrop" onClick={onClose}>
        <div className="modal" onClick={(event)=>(event.stopPropagation())}>
              { children}
        </div>x
        </div>
    );

}

export default Modal;