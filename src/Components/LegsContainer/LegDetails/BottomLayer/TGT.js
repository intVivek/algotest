import React, {useState} from "react";
import CheckBox from '../../../CheckBox';
import DropDown from '../../../DropDown';
import NumberInput from '../../../NumberInput';
import {tgt} from "../../../../Utils/Data";
import {useLeg} from "../../../../Context/LegProvider";

const TGT = ({index}) => {
    const [checked, setChecked] = useState(false);
    const {legs, setLegs} = useLeg();
  return (
    <div className={checked?"bottomItem":"disabledBottomItem bottomItem"}>
        <CheckBox label={"Re-entry on TGT"} onChange={setChecked}/>
        <div className="input">
            {!checked && <div className='hide' />}
            <DropDown 
                color={"blue"}
                options={tgt}
                value={legs[index].LegReentryTP.Type}
                onChange={(value)=>{
                    setLegs((legs) => {
                        legs[index].LegReentryTP.Type = value;
                        return [...legs];
                    });
                }}
            />
            <NumberInput 
                value={legs[index].LegReentryTP.Value}
                default={1}
                onChange={(value) => {
                    setLegs((legs) => {
                        legs[index].LegReentryTP.Value = value;
                        return [...legs];
                    });
                }}
            />
        </div>
    </div>
  );
};

export default TGT;
