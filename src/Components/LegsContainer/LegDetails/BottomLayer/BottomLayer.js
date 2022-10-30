import "./BottomLayer.scss";
import React from "react";
import Momentum from "./Momentum";
import TargetProfit from "./TargetProfit";
import StopLoss from "./StopLoss";
import TrailSL from "./TrailSL";
import TGT from "./TGT";
import SL from "./SL";

const BottomLayer = ({index}) => {
  return (
    <div className="bottomLayer">
      <Momentum index={index}/>
      <TargetProfit index={index}/>
      <StopLoss index={index}/>
      <TrailSL index={index}/>
      <TGT index={index}/>
      <SL index={index}/>
    </div>
  );
};

export default BottomLayer;
