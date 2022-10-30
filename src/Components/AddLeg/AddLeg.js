import "./AddLeg.scss";
import {useState} from "react";
import React from "react";
import Select from "./Select";
import Input from "./Input/Input";
import Submit from "./Submit";
import {defaultLeg} from "../../Utils/Data";
import {useLeg} from "../../Context/LegProvider";

const AddLeg = () => {
    const [segment, setSegment] = useState(2);
    const [leg, setLeg] = useState(defaultLeg);
    const {setLegs} = useLeg();

    const addLog = ()=>{
        setLegs((prev)=>{
            return [{...leg}, ...prev];
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
