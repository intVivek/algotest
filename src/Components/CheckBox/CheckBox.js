import "./CheckBox.scss";
import React from "react";

const CheckBox = ({label, onChange}) => {
  return (
    <div className="CheckBox">
        <input type="checkbox" onChange={()=>onChange((prev=>!prev))}/>
        <span>{label}</span>
    </div>
  );
};

export default CheckBox;
