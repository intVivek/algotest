import "./DropDown.scss";
import React from "react";

const DropDown = (props) => {
    return (
        <select className={props.color==='blue'?"dropDownBlue":"dropDownWhite"}>
            {
                props?.options?.map((option, index) => {
                    return <option 
                        key={index}
                        onChange={(e) => props.onChange(e.target.value)}
                    >{option}</option>
                })
            }
        </select>
    );
};

export default DropDown;
