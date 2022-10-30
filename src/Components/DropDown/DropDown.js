import "./DropDown.scss";
import React from "react";

const DropDown = (props) => {
    return (
        <select 
            className={props.color==='blue'?"dropDownBlue":"dropDownWhite"}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
        >
            {
                props?.options?.map((option, index) => {
                    return <option 
                        key={index}
                    >{option}</option>
                })
            }
        </select>
    );
};

export default DropDown;
