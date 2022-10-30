import "./Input.scss";
import React, {useState, useEffect} from "react";
import InputElement from "./InputElement";
import {positions, optionTypes, expiries, criterias } from "../../../Utils/Data";
import StrikeType from './StrikeType';

const Input = (props) => {
    const [lot, setLot] = useState(1);
    const [position, setPosition] = useState(positions[0]);
    const [optionType, setOptionType] = useState(optionTypes[0]);
    const [expiry, setExpiry] = useState(expiries[0]);
    const [criteria, setCriteria] = useState(criterias[0]);
    const [strikeParameter, setStrikeParameter] = useState({StrikeParameter: "ATM"});


    const strikeParam = {
        'Strike Type': ()=>{return {StrikeParameter: "ATM"}},
        'Premium Range': ()=>{return {StrikeParameter: {Lower: 50, Upper: 200}}},
        'Closest Premium': ()=>{return {StrikeParameter: {"Closest Premium": 50}}},
        'Straddle Width': ()=>{return {StrikeParameter: {"Adjustment": "+", Width: 0}}}
    }
    useEffect(()=>{
        setStrikeParameter({...strikeParam[criteria]()})
    },[criteria]);

    useEffect(()=>{
        props.setLeg(prev=>{
            prev.Lots=lot;
            return {...prev};
        });
    },[lot])

    useEffect(()=>{
        props.setLeg(prev=>{
            prev.PositionType=position;
            return {...prev};
        });
    },[position])

    useEffect(()=>{
        props.setLeg(prev=>{
            prev.ExpiryKind=optionType;
            return {...prev};
        });
    },[optionType])

    useEffect(()=>{
        props.setLeg(prev=>{
            prev.ExpiryKind=expiry;
            return {...prev};
        });
    },[expiry])

    useEffect(()=>{
        props.setLeg(prev=>{
            prev.EntryType=criteria;
            return {...prev};
        });
    },[criteria])

    useEffect(()=>{
        props.setLeg((prev)=>{
            return {...prev,...strikeParameter};
        });
    },[strikeParameter])

    return (
        <div className="inputLeg">
            <InputElement label={"Total lot"} default ={1} number={true} onChange={setLot}/>
            <InputElement label={"Position"} default ={1} options={positions} onChange={setPosition}/>
            {props.segment === 2 ?
                <div className="options">
                    <InputElement label={"Option Type"} default ={1} options={optionTypes} onChange={setOptionType}/>
                    <InputElement label={"Expiry"} default ={1} options={expiries} onChange={setExpiry}/>
                    <InputElement label={"Select Strike Criteria"} default ={1} options={criterias} onChange={setCriteria}/>
                    <StrikeType criteria={criteria} setStrikeParameter={setStrikeParameter}/>
                </div>
            :""}
        </div>
    );
};

export default Input;
