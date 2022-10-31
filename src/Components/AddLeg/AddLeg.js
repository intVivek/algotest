import "./AddLeg.scss";
import {useState} from "react";
import {cloneDeep} from "lodash";
import React from "react";
import Select from "./Select";
import Input from "./Input/Input";
import Submit from "./Submit";
import {defaultLeg} from "../../Utils/Data";
import {useLeg} from "../../Context/LegProvider";

const AddLeg = () => {
    const [segment, setSegment] = useState(2);
    const [leg, setLeg] = useState(cloneDeep(defaultLeg));
    const {setLegs} = useLeg();

    const addLog = ()=>{
        console.log(defaultLeg, leg);
        setLegs((prev)=>{
            return [...prev, {...leg}];
        });
    }

    return (
        <div className="addLeg">
            <Select segment={segment} setSegment={setSegment}/>
            <Input segment={segment} setLeg={setLeg}/>
            <Submit addLog={addLog}/>
        </div>
    );
};

export default AddLeg;
