const positions = ['Sell', 'Buy'];
const optionTypes = ['Call', 'Put'];
const expiries = ['Weekly', 'Monthly'];
const criterias = ['Strike Type', 'Premium Range', 'Closest Premium', 'Straddle Width'];
const strikeTypes = ['ATM', 'OTM', 'ITM'];
const momentum = ["Points ↑", "Points ↓", "Percentage ↑", "Percentage ↓", "Underlying Points↑", "Underlying Points↓", "Underlying Percentage", "Underlying Percentage"];
const targetProfit = ["Points", "Underlying Points", "Percentage", "Underlying Percentage"];
const stopLoss = [...targetProfit];
const trailSL = ["Points", "Percentage"]; 
const tgt = ["RE ASAP", "RE ASAP ↩", "RE MOMENTUM", "RE MOMENTUM ↩", "RE COST", "RE COST ↩"];
const sl = [...tgt];

const defaultLeg = {
    PositionType: "Sell",
    Lots: 1,
    LegStopLoss: {
        Type: "Points",
        Value: 0
    },
    LegTarget: {
        Type: "Points",
        Value: 0
    },
    LegTrailSL: {
        Type: "None",
        Value: {
            "InstrumentMove": 0,
            "StopLossMove": 0
        }
    },
    LegMomentum: {
        Type: "Points ↑",
        Value: 0
    },
    LegReentrySL: {
        Type: "RE ASRP",
        Value: 0
    },
    LegReentryTP: {
        Type: "RE ASRP",
        Value: 0
    },
    OptionType: "Call",
    ExpiryKind: "Weekly",
    EntryType: "Strike Type",
    StrikeParameter: "ATM",
}

export {positions, optionTypes, expiries, criterias, strikeTypes, defaultLeg, momentum, targetProfit, stopLoss, trailSL, tgt, sl};