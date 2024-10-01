import React from 'react';
import "./checkboxText.css"

const CheckboxText = ({text, imageSrc}) => {
    return (
        <div className="checkbox-Text">
            <span className="checkbox-label">{text}</span>
            <img src={imageSrc} alt="" className="checkbox-image"/>
        </div>
    );
};

export default CheckboxText;