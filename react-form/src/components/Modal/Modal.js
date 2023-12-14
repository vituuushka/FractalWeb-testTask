import React from "react";
// import s from './Modal.module.css'
import './Modal.css'

const Modal = ({ok}) => {
    return (
        <div className='modal-content'>
        <div className='result'>
            {ok ? <p>zaebis'</p>
            :<p>ne zaebis</p>}
        </div>
        </div>
    )
}
export default Modal