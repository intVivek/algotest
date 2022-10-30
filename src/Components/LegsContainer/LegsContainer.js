import React from "react";
import {useLeg} from "../../Context/LegProvider";
import LegDetails from "./LegDetails";

const LegsContainer = () => {
  const {legs, setLegs} = useLeg();
  return (
    <div className="legsContainer">
      {legs.map((leg, index) => {
        return <LegDetails key={index} leg={leg} index ={index}/>
      })}
    </div>
  );
};

export default LegsContainer;
