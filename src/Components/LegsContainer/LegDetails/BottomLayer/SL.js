import React, {useState} from "react";
import CheckBox from '../../../CheckBox';
import DropDown from '../../../DropDown';
import NumberInput from '../../../NumberInput';
import {sl} from "../../../../Utils/Data";
import {useLeg} from "../../../../Context/LegProvider";

const SL = ({index}) => {
    const [checked, setChecked] = useState(false);
    const {legs, setLegs} = useLeg();
  return (
    <div className={checked?"bottomItem":"disabledBottomItem bottomItem"}>
        <CheckBox label={"Re-entry on SL"} onChange={setChecked}/>
        <div className="input">
            {!checked && <div className='hide' />}
            <DropDown 
                color={"blue"}
                options={sl}
                value={legs[index].LegReentrySL.Type}
                onChange={(value)=>{
                    setLegs((legs) => {
                        legs[index].LegReentrySL.Type = value;
                        return [...legs];
                    });
                }}
            />
            <NumberInput 
                value={legs[index].LegReentrySL.Value}
                default={1}
                onChange={(value) => {
                    setLegs((legs) => {
                        legs[index].LegReentrySL.Value = value;
                        return [...legs];
                    });
                }}
            />
        </div>
    </div>
  );
};

export default SL;