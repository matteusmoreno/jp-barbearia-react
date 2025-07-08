import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ selectedImg, setSelectedImg }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains(styles.backdrop)) {
            setSelectedImg(null);
        }
    };
    return (
        <div className={styles.backdrop} onClick={handleClick}>
            <img src={selectedImg} alt="Imagem em tamanho maior" />
        </div>
    );
};

export default Modal;