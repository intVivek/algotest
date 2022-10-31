import React, {useState} from "react";
import {strikeTypes} from "../../../Utils/Data";
import DropDown from '../../DropDown';
import Label from '../../Label';
import NumberInput from '../../NumberInput';
import { useLeg } from '../../../Context/LegProvider';

const StrikeType = ({index, criteria, strikeParameter}) => {

    const {setLegs} = useLeg();
    const [lower, setLower] = useState(50);
    const [upper, setUpper] = useState(200);
    const [operator, setOperator] = useState("+");
    const [widthValue, setWidthValue] = useState(0);

    const type = (val)=>{
        setLegs((prev)=>{
            prev[index].StrikeParameter = val;
            return [...prev];
        });
    }


    const minRange=(val)=>{
        setLower(val);
        setLegs((prev)=>{
            prev[index].StrikeParameter= {Lower: val, Upper: upper};
            return [...prev];
        });
    }

    const maxRange=(val)=>{
        setUpper(val);
        setLegs((prev)=>{
            prev[index].StrikeParameter = {Lower: lower, Upper: val};
            return [...prev];
        });
    }

    const closest= (val)=>{
        setLegs((prev)=>{
            prev[index].StrikeParameter = {"Closest Premium": val};
            return [...prev];
        });
    }

    const opp = (val)=>{
        setOperator(val);
        setLegs((prev)=>{
            prev[index].StrikeParameter = {Operator: val, Width: widthValue};
            return [...prev];
        });
    }
    const width = (val)=>{
        setWidthValue(val);
        setLegs((prev)=>{
            prev[index].StrikeParameter = {"Adjustment": operator, Width: val};
            return [...prev];
        });
    }
    
    return (
        <div className="strikeType">
            {
                criteria === "Strike Type"? 
                    <DropDown
                        color={"blue"}
                        value={strikeParameter}
                        default ={1}
                        options={strikeTypes}
                        onChange={type}
                    />:""}
            {
                criteria === "Premium Range"?<>
                    <NumberInput label={"Lower Range"} default ={50 } value={strikeParameter.Lower || 50} onChange={minRange}/>
                    <NumberInput label={"Upper Range"} default ={200} value={strikeParameter.Upper || 200} onChange={maxRange}/>
                </>:""

            }
                        {
                criteria === "Closest Premium"?<>
                    <NumberInput label={"Premium"} default ={50} value={strikeParameter["Closest Premium"] || 50} onChange={closest}/>
                </>:""

            }
            {
                criteria === "Straddle Width"?<>
                    <Label label={"[ATM Strike"}/>
                    <DropDown options={["+", "-"]} value={strikeParameter.Adjustment} onChange={opp}/>
                    <Label label={"("}/>
                    <NumberInput default={1.5} min = {1.5} value={strikeParameter.Width || 1.5} onChange={width}/>
                    <Label label={"xATM Straddle Price)]"}/>
                </>:""

            }
        </div>
    );
};

export default StrikeType;