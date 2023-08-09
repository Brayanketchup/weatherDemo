import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCloud, faSun, faCloudBolt, faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { MainCity, SearchBar, NavBar, SwitchButton, DailyData } from "./components";
import fetchWeatherData from "./utils/fetchFromAPI";
import fetchCurrentLocation from "./utils/fetchCurrentLocation";
import axios from 'axios';


function App() {
  const [inFahrenheit, setinFahrenheit] = useState(true);
  const [isCityActive, setIsCityActive] = useState(false);
  const [cityData, setCityData] = useState(null);
  const [dailyData, setDailyData] = useState(null);

  useEffect(() => {
    fetchCurrentLocation()
      .then((stateName) => {
        updateDebounceText(stateName);
      })
      .catch((error) => {
        console.error('Error getting current location:', error);
      });
  }, []); // Only fetch location on initial render using useEffect

  const updateDebounceText = debounce(searchData => {

    fetchWeatherData(searchData)
      .then((data) => {
        if (data.errorCode != null) {
          console.log("Error:", data.message);
        } else {
          console.log(data);

          setCityData(data.locations[searchData]);
          setDailyData(data.locations[searchData].values);
          setIsCityActive(true);
        }
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });

  }, 500)


  function debounce(cb, delay = 1000) {
    let timeout

    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        cb(...args);
      }, delay)

    }
  }


  return (
    <>
      <div className=''>
        <NavBar />

        <div className='text-white flex flex-row p-2'>
          <h1 className='pr-2'>F°</h1>
          <SwitchButton
            inFahrenheit={inFahrenheit}
            setinFahrenheit={setinFahrenheit}
          />
          <h1 className='pl-2'>C°</h1>
        </div>
        <SearchBar onSearchChange={updateDebounceText} />
        <MainCity
          inFahrenheit={inFahrenheit}
          isCityActive={isCityActive}
          cityData={cityData}
        />

        <div className='w-full flex justify-center'>
          <h1 className='w-2/6 h-7 rounded-xl text-center text-white bg-sky-900 mb-3'>Daily Weather</h1>
        </div>

        <DailyData
        dailyData={dailyData}
        inFahrenheit={inFahrenheit}
        />
      </div>
    </>
  );
}

export default App

