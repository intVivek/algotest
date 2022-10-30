import React, {useState} from "react";
import InputElement  from './InputElement';
import {strikeTypes} from "../../../Utils/Data";
import DropDown from '../../DropDown';
import Label from '../../Label';
import NumberInput from '../../NumberInput';

const StrikeType = ({criteria, setStrikeParameter}) => {
    const [lower, setLower] = useState(50);
    const [upper, setUpper] = useState(200);
    const [operator, setOperator] = useState("+");
    const [widthValue, setWidthValue] = useState(0);

    const type = (val)=>{
        setStrikeParameter({StrikeParameter: val});
    }

    const minRange=(val)=>{
        setLower(val);
        setStrikeParameter({StrikeParameter: {Lower: val, Upper: upper}});
    }

    const maxRange=(val)=>{
        setUpper(val);
        setStrikeParameter({StrikeParameter: {Lower: lower, Upper: val}});
    }

    const closest= (val)=>{
        setStrikeParameter({StrikeParameter: {"Closest Premium": val}});
    }

    const opp = (val)=>{
        setOperator(val);
        setStrikeParameter({StrikeParameter: {Operator: val, Width: widthValue}});
    }
    const width = (val)=>{
        setWidthValue(val);
        setStrikeParameter({StrikeParameter: {"Adjustment":operator, Width: val}});
    }
    
    return (
        <div className="strikeType">
            {
                criteria === "Strike Type"? 
                    <InputElement 
                        label={"Strike Type"}
                        default ={1}
                        options={strikeTypes}
                        onChange={type}
                    />:""}
            {
                criteria === "Premium Range"?<>
                    <InputElement label={"Lower Range"} default ={50 } number={true} onChange={minRange}/>
                    <InputElement label={"Upper Range"} default ={200} number={true} onChange={maxRange}/>
                </>:""

            }
                        {
                criteria === "Closest Premium"?<>
                    <InputElement label={"Premium"} default ={50} number={true} onChange={closest}/>
                </>:""

            }
            {
                criteria === "Straddle Width"?<>
                    <Label label={"[ATM Strike"}/>
                    <DropDown options={["+", "-"]} onChange={opp}/>
                    <Label label={"("}/>
                    <NumberInput default={1.5} min = {1.5} onChange={width}/>
                    <Label label={"xATM Straddle Price)]"}/>
                </>:""

            }
        </div>
    );
};

export default StrikeType;
