import"./NumberInput.scss";
import React, {useState} from "react";

const NumberInput = (props) => {
    const [value, setValue] = useState(props.default);
    return (
        <input 
            className='numberInput'
            type="number"
            value={value}
            min= {props.min || 0}
            max= {props.max || 10000000}
            onChange={(e) => {
                props.onChange(e.target.value)
                setValue(e.target.value)
            }}
        />
    )
};

export default NumberInput;
