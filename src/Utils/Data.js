const positions = ['Sell', 'Buy'];
const optionTypes = ['Call', 'Put'];
const expiries = ['Weekly', 'Monthly'];
const criterias = ['Strike Type', 'Premium Range', 'Closest Premium', 'Straddle Width'];
const strikeTypes = ['ATM', 'OTM', 'ITM'];

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
        Type: "None",
        Value: 0
    },
    LegReentrySL: {
        Type: "ASRP",
        Value: 0
    },
    LegReentryTP: {
        Type: "ASRP",
        Value: 0
    },
    OptionType: "Call",
    ExpiryKind: "Weekly",
    EntryType: "Strike Type",
    StrikeParameter: "ATM",
}

export {positions, optionTypes, expiries, criterias, strikeTypes, defaultLeg};