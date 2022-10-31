import "./Button.scss";
import React from "react";

const Button = ({color, loading, label, onClick}) => {
    return (
        <div 
            className={color==='blue'?"blueButton":"whiteButton"}
            onClick={onClick}
        >
            {loading?"Loading...":label}
        </div>
    );
};

export default Button;
