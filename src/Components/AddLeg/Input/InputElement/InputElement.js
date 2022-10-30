import "./InputElement.scss";
import React from "react";
import NumberInput from '../../../NumberInput';
import DropDown from '../../../DropDown';

const InputElement = (props) => {
    
    return (
        <div className='inputElement'>
            
            {
                props.number?
                    <NumberInput 
                        min= {props.min || 0}
                        max= {props.max || 10000000}
                        onChange={props.onChange}
                    />:
                    <DropDown options={props.options} onChange={props.onChange} />
            }
        </div>
    );
};

export default InputElement;
