
import React from "react";
import { useState } from "react";
import { motion as m } from 'framer-motion';


const fadeInAnimationVariants = {

  initial: {
    opacity: 0,
    y:100,
  },
  animate: (index) => ({
    opacity: 1,
    y:0,
    transition:{
      delay: 0.50 * index,
      // duration:.7
    },
  }),

};

export default function DailyData({ dailyData, inFahrenheit }) {
  if (!dailyData) {
    // If dailyData is not available, show a loading state or error message
    return <p className="w-full text-center">Loading...</p>;
  }

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const today = new Date(); // Get the current date

    const options = { month: 'short', day: 'numeric', weekday: 'short' };

    // Check if the date is today
    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return 'Today';
    } else {
      return date.toLocaleDateString(undefined, options);
    }
  }

{/* <img src="../assets/iconCloud.png"/> */}


  function getWeatherIcon(condition) {
    // Assuming you have some logic to map conditions to appropriate weather icons
    // For example, you could use a switch statement or an object to handle various cases
    // Here's a simple example:
    switch (condition) {
      case 'Clear':
      case 'sunny':
        return `src/assets/iconSun.png`; // Replace with the sunny weather icon
      case 'Partially cloudy':
        return 'src/assets/iconsPartly-cloudy.png'; // Replace with the cloudy weather icon
      case 'Rain, Partially cloudy':
      case 'Rain, Overcast':
      case 'Rain':
        return 'src/assets/iconRain.png'; // Replace with the rainy weather icon
      default:
        return ''; // If no matching condition is found, display a question mark
    }
  }


  function convertTemperature(temperature, inFahrenheit) {
    if (!inFahrenheit) {
      //   console.log('convert to Celsius');
      temperature = Math.round(((temperature - 32) * 5) / 9);
    } else {
      //   console.log('convert to Fahrenheit');
      temperature = Math.round(temperature);
    }
    return temperature;
  }


  const [expandedDay, setExpandedDay] = useState(null);

  // Function to toggle the expanded state of a day
  function toggleExpandDay(index) {
    setExpandedDay((prevExpandedDay) => (prevExpandedDay === index ? null : index));
  }


 return (
    <>
      {dailyData.slice(1, 8).map((dayData, index) => (
        <m.div
          key={index}
          className={`w-full mt-2 flex justify-center flex-wrap content-center h-15 transition-transform`}
          initial='initial'
          animate='animate' // Use the animation name defined in variants
          variants={fadeInAnimationVariants} // Provide the variants object
          custom={index}
          onViewportEnter={() => console.log('this is on view')}
        >
        <div className=" w-2/3 min-w-[350px] h-fit m-2 flex flex-wrap items-center rounded-xl text-white font-semibold 
           bg-sky-400 hover:bg-blue-300 transition-all"
         onClick={() => toggleExpandDay(index)}
         style={{ cursor: "pointer" }} // Add a pointer cursor to indicate it's clickable    
         >

          <div id="mainDisplay" className={`w-full h-auto p-5 flex flex-row flex-wrap place-content-evenly `}>
            <div className="flex flex-col self-center m-3">
              <p className=" text-base">{formatDate(dayData.datetimeStr)}</p>
            </div>
            <div className="flex self-center flex-row m-3">
              <p className=" text-base h-7 w-7">
                <img src={getWeatherIcon(dayData.conditions)} alt="ICON" />
                </p>
              <p className=" text-base">{dayData.conditions}</p>
            </div>

            <div className="flex flex-col self-center m-3">
              <p className=" text-base flex flex-row">
                <img className='h-7 w-7' src="src/assets/iconsThermometer-up.png" alt=" " />
                Max Temp: {convertTemperature(dayData.maxt, inFahrenheit)} {inFahrenheit ? '°F' : '°C'}</p>
              <p className=" text-base flex flex-row">
                <img className='h-7 w-7' src="src/assets/iconThermometer-down.png" alt=" " />
                Min Temp: {convertTemperature(dayData.mint, inFahrenheit)} {inFahrenheit ? '°F' : '°C'}</p>
            </div>
            
            <div className="flex self-center m-3">
              <img className='h-7 w-7' src="src\assets\iconsWind-1.png" alt=" " />
              <p className=" text-base">Wind: {dayData.wspd}mph</p>
            </div>
          </div>
          {expandedDay === index && (
            <div id="extraInformationDisplay" className="w-full h-auto p-5 flex flex-row flex-wrap place-content-evenly">
              <div className="flex flex-col self-center m-2">
                {/* Add the additional information you want to display */}
                <p className="text-base flex flex-row">
                  <img className='h-7 w-7' src="src\assets\iconsWet.png" alt=" " />
                  Precipitation: {dayData.precip}</p>
              </div>
              <div className="flex flex-col self-center m-2">
                {/* Add the additional information you want to display */}
                <p className="text-base flex flex-row">
                  <img className='h-7 w-7' src="src\assets\iconsUv-index.png" alt=" " />
                  Uv Index: {dayData.uvindex}</p>
              </div>
              <div className="flex flex-col self-center m-2">
                {/* Add the additional information you want to display */}
                <p className="text-base flex flex-row">
                  <img className='h-7 w-7' src="src\assets\iconVisibility.png" alt=" " />
                  Visibility: {dayData.visibility} mi</p>
              </div>
              <div className="flex flex-col self-center m-2">
                {/* Add the additional information you want to display */}
                <p className="text-base flex flex-row">
                  <img className='h-7 w-7' src="src\assets\iconSnow.png" alt=" " />
                  Snow: {dayData.snow}%</p>
              </div>
            </div>
          )}
        </div>
      </m.div>
    ))}
  </>
);
}

