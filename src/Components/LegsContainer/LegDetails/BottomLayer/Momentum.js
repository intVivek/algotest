import React, {useState} from "react";
import CheckBox from '../../../CheckBox';
import DropDown from '../../../DropDown';
import NumberInput from '../../../NumberInput';
import { momentum } from "../../../../Utils/Data";
import {useLeg} from "../../../../Context/LegProvider";
const Momentum = ({index}) => {
    const [checked, setChecked] = useState(false);
    const {legs, setLegs} = useLeg();
  return (
    <div className={checked?"bottomItem":"disabledBottomItem bottomItem"}>
        <CheckBox label={"Momentum"} onChange={setChecked}/>
        <div className="input">
            {!checked && <div className='hide' />}
            <DropDown
                color={"blue"}
                options={momentum}
                value={legs[index].LegMomentum.Type}
                onChange={(value)=>{
                    setLegs((legs) => {
                        legs[index].LegMomentum.Type = value;
                        return [...legs];
                    });
                }}
            />
            <NumberInput 
                value={legs[index].LegMomentum.Value}
                default={1}
                onChange={(value) => {
                    setLegs((legs) => {
                        legs[index].LegMomentum.Value = value;
                        return [...legs];
                    });
                }}
            />
        </div>
    </div>
  );
};

export default Momentum;
