import React from "react";
import { useState } from "react";


export default function SwitchButton({ inFahrenheit, setinFahrenheit }) {


    // const [inFahrenheit, setinFahrenheit] = useState(false);

    return (
        <>
            <div className="relative w-12  h-6">

                <div className="w-full h-full bg-gray-300 rounded-full" id='buttomBackground'></div>

                <div className="absolute top-0 left-0 h-6 w-6 bg-white rounded-full shadow transform transition-transform" id="switchButton"
                    onClick={() => {
                        buttomHandler(inFahrenheit);
                        setinFahrenheit(!inFahrenheit)
                    }}
                ></div>
            </div>
        </>
    )
}

function buttomHandler(inFahrenheit) {

    var switchButton = document.getElementById('switchButton');
    var buttomBg = document.getElementById('buttomBackground');

    if (inFahrenheit) {
        switchButton.style.transform = `translateX(${100}%)`;
        buttomBg.classList.remove('bg-gray-300');
        buttomBg.classList.add('bg-green-500');

    } else {
        switchButton.style.transform = `translateX(${0}%)`;
        buttomBg.classList.add('bg-gray-300');
        buttomBg.classList.remove('bg-green-500');
    }

}


