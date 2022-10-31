import React from "react";
import AddLeg from "../../Components/AddLeg";
import LegsContainer from "../../Components/LegsContainer";
import SubmitLegs from "../../Components/SubmitLegs";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LegProvider } from "../../Context/LegProvider";

const AlgoTest = () => {

  return (
    <div>
      <LegProvider>
        <AddLeg />
        <LegsContainer />
        <SubmitLegs />
      </LegProvider>
      <ToastContainer />
    </div>
  );
};

export default AlgoTest;
