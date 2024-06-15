//library used: https://www.npmjs.com/package/react-qr-code

import React from "react";
import QRCode from "react-qr-code";
const Demo = () => {
    let value = "https://www.npmjs.com/package/react-qr-code";

    return(
        
        <div className="App">
            <h1>Using react-qr-code</h1>
            <div style={{ height: "auto", margin: "0 auto", maxWidth: 256, width: "100%" }}>
                <QRCode 
                    value={value} 
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    size={256}
                />
            </div>
            <div style={{ height: "auto", margin: "0 auto", maxWidth: 256, width: "100%" }}>
                <QRCode 
                    value={value} 
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    size={256}
                    bgColor="#FFB6C1"
                    fgColor="#AA336A"
                />
            </div>
        </div>
    )
}

export {Demo};