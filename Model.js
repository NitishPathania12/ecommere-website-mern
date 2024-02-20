import React from 'react'
import ReactDom  from 'react-dom'
const MODAL_STYLE = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor:"white",
    zIndex: 1000,
    height: "90%",
    minWidth: "90%"
}
const OVERLAY_STYLE = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    backgroundColor: "rgba(0,0,0,0.7)"
}
const Model = ({ children, onClose }) => {
    return ReactDom.createPortal(
        <div>
            <div  style={OVERLAY_STYLE}></div>
            <div style={MODAL_STYLE}>
            <button className='btn btn-dark fs-4'
                style={{ marginLeft: "97%",marginTop:"-2%"  }}
                onClick={onClose}>X</button>


            {children}
            </div>
        </div>,
        document.getElementById("cart-root")
    )
}

export default Model