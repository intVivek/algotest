import "./Input.scss";
import React from "react";
import InputElement from "./InputElement";

const Input = () => {
    const position = ['Buy', 'Sell'];
    return (
        <div className="inputLeg">
            <InputElement label={"Total lot"} default ={1} number={true}/>
            <InputElement label={"Position"} default ={1} options={position}/>
        </div>
    );
};

export default Input;
