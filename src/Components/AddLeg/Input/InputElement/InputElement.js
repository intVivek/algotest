import "./InputElement.scss";
import React,{ useState } from "react";

const InputElement = (props) => {
    const [value, setValue] = useState(props.default);
    return (
        <div className='inputElement'>
            <label>{props.label}</label>
            {
                props.number?
                    <input 
                        type="number"
                        value={value}
                        min= {props.min || 0}
                        max= {props.max || 10000000}
                        onChange={(e) => {
                            props.onChange(e.target.value)
                            setValue(e.target.value)
                        }}
                    />:
                    <select>
                        {
                            props?.options?.map((option, index) => {
                                return <option 
                                    key={index}
                                    onChange={(e) => props.onChange(e.target.value)}
                                >{option}</option>
                            })
                        }
                    </select>
            }
        </div>
    );
};

export default InputElement;
