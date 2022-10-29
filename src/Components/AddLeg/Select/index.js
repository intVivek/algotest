import "./Select.scss";
import React from "react";
import ToggleButton from "../../ToggleButton";

const index = (props) => {
    const onChangeHandler = (val) => {
        props.setSegment(val);
    }

    return (
        <div className="selectSegment">
            <span>Select segments</span>
            <ToggleButton default={props.segment} values = {['Futures', 'Options']} onChange={onChangeHandler}/>
        </div>
    );
};

export default index;
