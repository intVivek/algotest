import"./NumberInput.scss";
import React from "react";

const NumberInput = (props) => {
    return (
        <input 
            className='numberInput'
            type="number"
            step="any"
            default={props.default}
            value={props.value}
            min= {props.min || 0}
            max= {props.max || 10000000}
            onChange={(e) => {
                props.onChange(e.target.value)
            }}
        />
    )
};

export default NumberInput;
