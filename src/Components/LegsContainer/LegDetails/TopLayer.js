import React from "react";
import Label from '../../Label';
import NumberInput from '../../NumberInput';
import DropDown from '../../DropDown';
import {useLeg} from "../../../Context/LegProvider";
import StrikeType from './StrikeType';
import { positions, optionTypes, expiries, criterias } from "../../../Utils/Data";

const TopLayer = ({index, leg}) => {
    const {legs, setLegs} = useLeg();

    return <div className='topLayer'>
        <Label label={"Lots :"}/>
        <NumberInput 
            value={leg.Lots}
            default={1}
            onChange={(value) => {
                setLegs((legs) => {
                    legs[index].Lots = value;
                    return [...legs];
                });
            }}
        />
        <DropDown 
            options={positions}
            value={leg.PositionType}
            onChange={(value)=>{
                setLegs((legs) => {
                    legs[index].PositionType = value;
                    return [...legs];
                });
            }}
        />
        <DropDown 
            options={optionTypes}
            value={leg.OptionType}
            onChange={(value)=>{
                setLegs((legs) => {
                    legs[index].OptionType = value;
                    return [...legs];
                });
            }}
        />
        <DropDown 
            options={expiries}
            value={leg.Expiry}
            onChange={(value)=>{
                setLegs((legs) => {
                    legs[index].ExpiryKind = value;
                    return [...legs];
                });
            }}
        />
        <Label label={"Select Strike"}/>
        <DropDown 
            options={criterias}
            value={leg.Criteria}
            onChange={(value)=>{
                setLegs((legs) => {
                    legs[index].EntryType = value;
                    return [...legs];
                });
            }}
        />
        <StrikeType 
            index={index}
            criteria={legs[index].EntryType}
            strikeParameter={legs[index].StrikeParameter}
        />
    </div>;
};

export default TopLayer;
