import './LegDetails.scss';
import React from "react";
import TopLayer from './TopLayer';
import BottomLayer from './BottomLayer';

const LegDetails = ({index, leg}) => {
    return (
        <div className="legDetails">
            <TopLayer index={index} leg = {leg}/>
            <BottomLayer />
        </div>
    );
};

export default LegDetails;
