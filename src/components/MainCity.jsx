import React from "react";

export default function MainCity({ inFahrenheit, cityData }) {
  if (!cityData) {
    // If cityData is not available, show a loading state or error message
    return <p className="w-full text-center">Loading...</p>;
  }

  // let tempInCelsius
  // Destructure the cityData object to access its properties
  let {
    address: cityAddress,
    currentConditions: {
      temp: temperature,
      humidity,
      visibility,
      icon: weatherIcon,
      wspd: windSpeed,
      precip: precipitation,
      sunrise,
      sunset,
    },
  } = cityData;

  if (!inFahrenheit) {
    // console.log('convert to celcius');
    temperature = Math.round(((temperature - 32) * 5) / 9);
  } else {
    temperature = Math.round(temperature);
  }

  const formattedDate = formatDate(new Date());
  const formattedSunrise = formatTime(new Date(sunrise));
  const formattedSunset = formatTime(new Date(sunset));

  return (
    <section className='w-full flex h-[50vh] min-h-[394px] justify-center mb-4'>
      <div className=' text-white w-2/3 min-w-[350px] h-full inline-flex flex-col bg-gradient-to-b from-blue-500 to-sky-400 rounded-xl place-content-around'>
        <h3 className='inline-flex text-white ml-5 text-2xl'>{cityAddress}</h3>
        <h1 className='inline-flex justify-center text-5xl'>{`${temperature}${inFahrenheit ? '°F' : '°C'}`}</h1>
        <h6 className='inline-flex text-white ml-5 text-xl underline'>{`date ${formattedDate}`}</h6>
        <ul className='inline-flex flex-row flex-wrap place-content-evenly text-white text-xl'>

          <li className='flex flex-col text-center m-4'>
            <div className="flex flex-row">
              <img className=' h-7 w-7' src="src\assets\iconUmbrella.png" alt="" />
              <p>Precipitation</p>
            </div>
            <span className='text-base'>{`${precipitation} %`}</span>
          </li>

          <li className='flex flex-col text-center m-4'>
            <div className="flex flex-row">
              <img className='h-7 w-7' src="src\assets\iconVisibility.png" alt="" />
              <p >Visibility</p>
            </div>

            <span className='text-base'>{`${visibility} km`}</span>
          </li>

          
          <li className='flex flex-col text-center m-4'>
            <div className="flex flex-row">
              <img className='h-7 w-7' src="src\assets\iconsWet.png" alt="" />
              <p >Humidity</p>
            </div>

            <span className='text-base'>{`${humidity} %`}</span>
          </li>

          
          <li className='flex flex-col text-center m-4'>
            <div className="flex flex-row">
              <img className='h-7 w-7' src="src\assets\iconsWind-1.png" alt="" />
              <p >Wind</p>
            </div>

            <span className='text-base'>{`${windSpeed} mph`}</span>
          </li>

          
        </ul>
      </div>
    </section>
  );
}

// Helper function to format date (e.g., "Jun 19, Tue")
function formatDate(date) {
  const options = { month: 'short', day: 'numeric', weekday: 'short' };
  return date.toLocaleDateString(undefined, options);
}


// Helper function to format time (e.g., "6:30 AM")
function formatTime(date) {
  const options = { hour: 'numeric', minute: 'numeric', hour12: true };
  return date.toLocaleTimeString(undefined, options);
}