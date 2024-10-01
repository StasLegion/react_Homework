import React, { useState } from 'react';
import ModalFeedback from "./components/ModalFeedback/ModalFeedback";

const Modal = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(false);
    };

    const handleCloseModal = () => {
        setModalOpen(true);
    };

    return (
        <div className="Modal">
            <h1>Добро пожаловать на сайт Ed Space</h1>
            <button onClick={handleOpenModal}>Попробовать бесплатно</button>
            <ModalFeedback isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default Modal;