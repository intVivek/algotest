import "./Button.scss";
import React from "react";

const Button = (props) => {
    return (
        <div 
            className={props.color==='blue'?"blueButton":"whiteButton"}
            onClick={props.onClick}
        >
            {props.label}
        </div>
    );
};

export default Button;
