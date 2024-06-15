//library used: https://www.npmjs.com/package/qrcode.react

import QRCode from "qrcode.react";

const Demo2 = () => {
    let value = "https://www.npmjs.com/package/qrcode.react"

    return(
        <div className="App">
            <h1>Using qrcode.react</h1>
       
                <QRCode
                    value={value}
                     size={256}
                  />
                <div style={{ marginLeft: "4px", marginRight: "3px"}}>
                <QRCode
                     value={value}
                     size={256}
                     bgColor= {"#00008B"}
                     fgColor= {'#87CEEB'}
                    imageSettings={{
                        src: './telegram-5662082_1280.png',
                        height: 100,
                        width: 100,
                  }}
              />
            </div>
            

        </div>
    )
}

export {Demo2};