/* eslint-disable react-hooks/exhaustive-deps */
import "./Input.scss";
import React, {useState, useEffect} from "react";
import InputElement from "./InputElement";
import {positions, optionTypes, expiries, criterias } from "../../../Utils/Data";
import StrikeType from './StrikeType';

const Input = ({setLeg, segment}) => {
    const [lot, setLot] = useState("1");
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
        setLeg(prev=>{
            prev.Lots=lot;
            return {...prev};
        });
    },[lot])

    useEffect(()=>{
        setLeg(prev=>{
            prev.PositionType=position;
            return {...prev};
        });
    },[position])

    useEffect(()=>{
        setLeg(prev=>{
            prev.OptionType=optionType;
            return {...prev};
        });
    },[optionType])

    useEffect(()=>{
        setLeg(prev=>{
            prev.ExpiryKind=expiry;
            return {...prev};
        });
    },[expiry])

    useEffect(()=>{
        setLeg(prev=>{
            prev.EntryType=criteria;
            return {...prev};
        });
    },[criteria])

    useEffect(()=>{
        setLeg((prev)=>{
            return {...prev,...strikeParameter};
        });
    },[strikeParameter])

    return (
        <div className="inputLeg">
            <InputElement label={"Total lot"} value={lot} default ={1} number={true} onChange={setLot}/>
            <InputElement label={"Position"} value={position} default ={1} options={positions} onChange={setPosition}/>
            {segment === 2 ?
                <div className="options">
                    <InputElement label={"Option Type"} default ={1} value={optionType} options={optionTypes} onChange={setOptionType}/>
                    <InputElement label={"Expiry"} default ={1} value={expiry} options={expiries} onChange={setExpiry}/>
                    <InputElement label={"Select Strike Criteria"} value = {criteria} default ={1} options={criterias} onChange={setCriteria}/>
                    <StrikeType criteria={criteria} strikeParameter={strikeParameter.StrikeParameter} setStrikeParameter={setStrikeParameter}/>
                </div>
            :""}
        </div>
    );
};

export default Input;
