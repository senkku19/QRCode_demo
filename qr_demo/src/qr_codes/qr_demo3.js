//library used: https://www.npmjs.com/package/next-qrcode

import React from 'react';
import { useQRCode } from 'next-qrcode';

const Demo3 = () => {
    let value = "https://www.npmjs.com/package/next-qrcode"
    const { Canvas } = useQRCode();

    return(
        <div className="App">
            <h1>Using next-qrcode</h1>
            <Canvas 
                text={value}
                options={{
                    errorCorrectionLevel: 'H',
                    margin: 2,
                    scale: 5,
                    width: 256,
                    color: {
                        dark: '#00008B',
                        light: '#87CEEB',  
                    },
                }}
                logo={{
                    src: './telegram-5662082_1280.png',
                    options: {
                        width: 100,
                        x: undefined,
                        y: undefined,
                    }
                }}
            />
             <Canvas 
                text={value}
                options={{
                    errorCorrectionLevel: 'H',
                    margin: 2,
                    scale: 5,
                    width: 256,
                }}
            />
        </div>
    )
}

export {Demo3};