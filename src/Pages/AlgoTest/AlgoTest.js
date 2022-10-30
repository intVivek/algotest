import React from "react";
import AddLeg from "../../Components/AddLeg";
import LegsContainer from "../../Components/LegsContainer";
import { LegProvider } from "../../Context/LegProvider";

const AlgoTest = () => {

  return (
    <div>
      <LegProvider>
        <AddLeg />
        <LegsContainer />
      </LegProvider>
    </div>
  );
};

export default AlgoTest;
