import "./Select.scss";
import React from "react";
import ToggleButton from "../../../ToggleButton";

const index = () => {
    const onChangeHandler = () => {

    }

    return (
        <div className="segmentSelect">
            <span>Select segments</span>
            <ToggleButton values = {['Futures', 'Options']} onChange={onChangeHandler}/>
        </div>
    );
};

export default index;
