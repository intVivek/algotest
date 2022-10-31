import React from "react";
import {strikeTypes} from "../../../Utils/Data";
import DropDown from '../../DropDown';
import Label from '../../Label';
import NumberInput from '../../NumberInput';
import { useLeg } from '../../../Context/LegProvider';

const StrikeType = ({index, criteria, strikeParameter}) => {

    const {setLegs} = useLeg();

    const type = (val)=>{
        setLegs((prev)=>{
            prev[index].StrikeParameter = val;
            return [...prev];
        });
    }


    const minRange=(val)=>{
        setLegs((prev)=>{
            prev[index].StrikeParameter.Lower = val;
            return [...prev];
        });
    }

    const maxRange=(val)=>{
        setLegs((prev)=>{
            prev[index].StrikeParameter.Upper = val;
            return [...prev];
        });
    }

    const closest= (val)=>{
        setLegs((prev)=>{
            prev[index].StrikeParameter["Closest Premium"] = val;
            return [...prev];
        });
    }

    const opp = (val)=>{
        setLegs((prev)=>{
            prev[index].StrikeParameter.Adjustment = val;
            return [...prev];
        });
    }
    const width = (val)=>{
        setLegs((prev)=>{
            prev[index].StrikeParameter.Width = val;
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
                    <NumberInput label={"Lower Range"} default ={50 } value={strikeParameter.Lower} onChange={minRange}/>
                    <NumberInput label={"Upper Range"} default ={200} value={strikeParameter.Upper} onChange={maxRange}/>
                </>:""

            }
                        {
                criteria === "Closest Premium"?<>
                    <NumberInput label={"Premium"} default ={50} value={strikeParameter["Closest Premium"]} onChange={closest}/>
                </>:""

            }
            {
                criteria === "Straddle Width"?<>
                    <Label label={"[ATM Strike"}/>
                    <DropDown options={["+", "-"]} value={strikeParameter.Adjustment} onChange={opp}/>
                    <Label label={"("}/>
                    <NumberInput default={1.5} min = {1.5} value={strikeParameter.Width} onChange={width}/>
                    <Label label={"xATM Straddle Price)]"}/>
                </>:""

            }
        </div>
    );
};

export default StrikeType;