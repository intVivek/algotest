import './LegDetails.scss';
import {cloneDeep} from "lodash";
import React from "react";
import TopLayer from './TopLayer';
import BottomLayer from './BottomLayer';
import CloseBtn from './CloseBtn';
import CopyBtn from './CopyBtn';
import {useLeg} from "../../../Context/LegProvider";

const LegDetails = ({index, leg}) => {
    const {setLegs} = useLeg();
    return (
        <div className="legDetails">
            <div className="closeBtn"
                onClick={()=>{
                    setLegs((legs)=>{
                        legs.splice(index, 1);
                        return [...legs];
                    });
                }}
            ><CloseBtn/></div>
            <div className="copyBtn"
                onClick={()=>{
                    setLegs((legs)=>{
                        return [...legs, cloneDeep(legs[index])];
                    });
                }}
            ><CopyBtn/></div>
            <TopLayer index={index} leg = {leg}/>
            <BottomLayer index={index}/>
        </div>
    );
};

export default LegDetails;
