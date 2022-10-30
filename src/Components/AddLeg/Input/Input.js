import "./Input.scss";
import React from "react";
import InputElement from "./InputElement";

const Input = (props) => {
    const position = ['Buy', 'Sell'];
    const optionType = ['Call', 'Put'];
    const expiry = ['Weekly', 'Monthly'];
    const criteria = ['Strike Type', 'Premium Range', 'Closest Premium', 'Straddle Width'];
    const strikeType = ['ATM', 'OTM', 'ITM'];
    return (
        <div className="inputLeg">
            <InputElement label={"Total lot"} default ={1} number={true}/>
            <InputElement label={"Position"} default ={1} options={position}/>
            {props.segment === 2 ?
                <div className="options">
                    <InputElement label={"Position"} default ={1} options={position}/>
                    <InputElement label={"Option Type"} default ={1} options={optionType}/>
                    <InputElement label={"Expiry"} default ={1} options={expiry}/>
                    <InputElement label={"Select Strike Criteria"} default ={1} options={criteria}/>
                    <InputElement label={"Strike Type"} default ={1} options={strikeType}/>
                </div>
            :""}
        </div>
    );
};

export default Input;
