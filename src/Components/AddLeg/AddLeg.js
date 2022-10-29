import "./AddLeg.scss";
import {useState} from "react";
import React from "react";
import Select from "./Select";
import Input from "./Input/Input";
import Submit from "./Submit";

const AddLeg = () => {
    const [segment, setSegment] = useState(2);
    return (
        <div className="addLeg">
            <Select segment={segment} setSegment={setSegment}/>
            <Input segment={segment}/>
            <Submit />
        </div>
    );
};

export default AddLeg;
