import "./InputElement.scss";
import React from "react";
import NumberInput from '../../../NumberInput';
import DropDown from '../../../DropDown';
import Label from '../../../Label';

const InputElement = (props) => {
    
    return (
        <div className='inputElement'>
            <Label label={props.label} />
            {
                props.number?
                    <NumberInput 
                        min= {props.min || 0}
                        max= {props.max || 10000000}
                        value={props.value}
                        default={props.default}
                        onChange={props.onChange}
                    />:
                    <DropDown 
                        options={props.options}
                        value={props.value}
                        default={props.default}
                        onChange={props.onChange}
                    />
            }
        </div>
    );
};

export default InputElement;
