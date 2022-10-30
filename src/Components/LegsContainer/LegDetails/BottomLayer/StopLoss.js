import React, {useState} from "react";
import CheckBox from '../../../CheckBox';
import DropDown from '../../../DropDown';
import NumberInput from '../../../NumberInput';
import { stopLoss } from "../../../../Utils/Data";
import {useLeg} from "../../../../Context/LegProvider";
const StopLoss = ({index}) => {
    const [checked, setChecked] = useState(false);
    const {legs, setLegs} = useLeg();
  return (
    <div className={checked?"bottomItem":"disabledBottomItem bottomItem"}>
        <CheckBox label={"Stop Loss"} onChange={setChecked}/>
        <div className="input">
            {!checked && <div className='hide' />}
            <DropDown 
                color={"blue"}
                options={stopLoss}
                value={legs[index].LegStopLoss.Type}
                onChange={(value)=>{
                    setLegs((legs) => {
                        legs[index].LegStopLoss.Type = value;
                        return [...legs];
                    });
                }}
            />
            <NumberInput 
                value={legs[index].LegStopLoss.Value}
                default={1}
                onChange={(value) => {
                    setLegs((legs) => {
                        legs[index].LegStopLoss.Value = value;
                        return [...legs];
                    });
                }}
            />
        </div>
    </div>
  );
};

export default StopLoss;