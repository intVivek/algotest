import React, {useState} from "react";
import CheckBox from '../../../CheckBox';
import DropDown from '../../../DropDown';
import NumberInput from '../../../NumberInput';
import { trailSL } from "../../../../Utils/Data";
import {useLeg} from "../../../../Context/LegProvider";
const TrailSL = ({index}) => {
    const [checked, setChecked] = useState(false);
    const {legs, setLegs} = useLeg();
  return (
    <div className={checked?"bottomItem":"disabledBottomItem bottomItem"}>
        <CheckBox label={"Trail SL"} onChange={setChecked}/>
        <div className="input">
            {!checked && <div className='hide' />}
            <DropDown 
                color={"blue"}
                options={trailSL}
                value={legs[index].LegTrailSL.Type}
                onChange={(value)=>{
                    setLegs((legs) => {
                        legs[index].LegTrailSL.Type = value;
                        return [...legs];
                    });
                }}
            />
            <NumberInput 
                value={legs[index].LegTrailSL.Value.InstrumentMove}
                default={1}
                onChange={(value) => {
                    setLegs((legs) => {
                        legs[index].LegTrailSL.Value.InstrumentMove = value;
                        return [...legs];
                    });
                }}
            />
            <NumberInput 
                value={legs[index].LegTrailSL.Value.StopLossMove}
                default={1}
                onChange={(value) => {
                    setLegs((legs) => {
                        legs[index].LegTrailSL.Value.StopLossMove = value;
                        return [...legs];
                    });
                }}
            />
        </div>
    </div>
  );
};

export default TrailSL;