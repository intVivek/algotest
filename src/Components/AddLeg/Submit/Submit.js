import "./Submit.scss";
import React from "react";
import Button from '../../Button';

const Submit = () => {
    return (
        <div className="submitLeg">
            <Button color={'blue'} label={"Add Leg"}/>
            <Button label={"Cancel"}/>
        </div>
    )
};

export default Submit;
