import "./Submit.scss";
import React from "react";
import Button from '../../Button';

const Submit = (props) => {
    return (
        <div className="submitLeg">
            <Button color={'blue'} label={"Add Leg"} onClick={props.addLog}/>
            <Button label={"Cancel"}/>
        </div>
    )
};

export default Submit;
