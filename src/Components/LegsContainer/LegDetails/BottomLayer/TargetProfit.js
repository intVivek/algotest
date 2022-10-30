import React, {useState} from "react";
import CheckBox from '../../../CheckBox';
import DropDown from '../../../DropDown';
import NumberInput from '../../../NumberInput';
import { targetProfit } from "../../../../Utils/Data";
import {useLeg} from "../../../../Context/LegProvider";
const TargetProfit = ({index}) => {
    const [checked, setChecked] = useState(false);
    const {legs, setLegs} = useLeg();
  return (
    <div className={checked?"bottomItem":"disabledBottomItem bottomItem"}>
        <CheckBox label={"Target Profit"} onChange={setChecked}/>
        <div className="input">
            {!checked && <div className='hide' />}
            <DropDown 
                color={"blue"}
                options={targetProfit}
                value={legs[index].LegTarget.Type}
                onChange={(value)=>{
                    setLegs((legs) => {
                        legs[index].LegTarget.Type = value;
                        return [...legs];
                    });
                }}
            />
            <NumberInput 
                value={legs[index].LegTarget.Value}
                default={1}
                onChange={(value) => {
                    setLegs((legs) => {
                        legs[index].LegTarget.Value = value;
                        return [...legs];
                    });
                }}
            />
        </div>
    </div>
  );
};

export default TargetProfit;