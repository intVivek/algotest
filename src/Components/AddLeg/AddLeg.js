import "./AddLeg.scss";
import {useState, useEffect} from "react";
import React from "react";
import Select from "./Select";
import Input from "./Input/Input";
import Submit from "./Submit";
import {defaultLeg} from "../../Utils/Data";

const AddLeg = () => {
    const [segment, setSegment] = useState(2);
    const [leg, setLeg] = useState(defaultLeg);

    useEffect(()=>{
        console.log(leg);
    },[leg]);
    return (
        <div className="addLeg">
            <Select segment={segment} setSegment={setSegment}/>
            <Input segment={segment} setLeg={setLeg}/>
            <Submit />
        </div>
    );
};

export default AddLeg;
