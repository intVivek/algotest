import "./AddLeg.scss";
import React from "react";
import Select from "./Select";
import Input from "./Input";
import Submit from "./Submit";

const AddLeg = () => {
  return (
    <div className="addLeg">
        <Select />
        <Input />
        <Submit />
    </div>
  );
};

export default AddLeg;
