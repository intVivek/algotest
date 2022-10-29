import "./ToggleButton.scss";
import React, {useState} from "react";

const ToggleButton = (props) => {
    const [active, setActive] = useState(props.default);
    return (
        <div className="toggleButton">
            <div 
                className={active===1?"active":""} 
                onClick={()=>{
                    setActive(1);
                    props.onChange(1);
                }}
            >
                {props?.values[0] || ""}
            </div>
            <div 
                className={active===2?"active":""}
                onClick={()=>{
                    setActive(2);
                    props.onChange(2);
                }}
            >
                {props?.values[1] || ""}
            </div>
        </div>
    );
};

export default ToggleButton;
