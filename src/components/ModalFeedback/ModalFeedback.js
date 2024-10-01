import React, { useState } from 'react';
import './modalFeedback.css';

const ModalFeedback = ({ isOpen, onClose }) => {
    const [formData, setFormData ] = useState({
        name: '',
        email: '',
        message: ''
    });

    const hendleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        onClose();
        setFormData({name: '', email: '', message: ''});
    };

    if (isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modalContent">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Обратная связь</h2>
                <form action="" onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={hendleChange} required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={hendleChange} required />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" value={formData.message} onChange={hendleChange} required />
                    </label>

                    <button type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default ModalFeedback;