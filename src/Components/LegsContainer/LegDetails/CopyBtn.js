import React from "react";

const CopyBtn = () => {
    const style={
        width: "24px",
        height: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        border: "none",
        outline: "none",
        borderRadius: "50%",
    }
    return <div style={style}><svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.56 0v1.44l.48.48V.48h3.6v2.88h2.88V9.6h-3.6v.48H12V3.022L8.977 0H4.56Zm4.56.818 2.063 2.062H9.12V.817ZM0 1.92V12h7.44V4.942l-.068-.075-2.88-2.88-.074-.067H0Zm.48.48h3.6v2.88h2.88v6.24H.48V2.4Zm4.08.345L6.615 4.8H4.56V2.745Z" fill="#375A9E"></path></svg></div>;
};

export default CopyBtn;
