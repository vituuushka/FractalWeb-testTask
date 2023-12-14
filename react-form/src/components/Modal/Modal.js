import React from "react";
import './Modal.css';
import close from '../../assets/images/Close.png'
import error from '../../assets/images/error-modal.png'
import success from '../../assets/images/success-modal.png'

const Modal = ({ok, closeModal, goMain}) => {
    return (
        <div className='modal-content'>
        <div className='result'>
            {ok ? 
            <div className="success-modal" >
            <div className="success-modal-header">
                <div className="success-header-text">Форма успешно отправлена</div>
            </div>
            <div className="success-modal-container">
                <img src={success} />
            </div>
            <div className="success-modal-footer">
                <button type="button" onClick={goMain} className="success-modal-button" >На главную</button>
            </div>
            </div>
            : <div className="error-modal" >
                <div className="error-modal-header">
                    <div className="error-header-text">Ошибка</div>
                    <div className="error-header-button" >
                    <button type="button" onClick={closeModal} className="error-header-btn"><img src={close} /></button>
                    </div>
                </div>
                <div className="error-modal-container">
                    <img src={error} />
                </div>
                <div className="error-modal-footer">
                    <button type="button" onClick={closeModal} className="error-modal-button" >Закрыть</button>
                </div>
                </div>}
        </div>
        </div>
    )
}
export default Modal