// 494d1ec1824f95912118bcbb3c441709
import React, { useState } from 'react';
import Weather from "./Weatherresult"
import './App.css';

function App() {
  const key = "e56b41ea8e3b48b18ad142332233105"

  let cityinput = ""
  const [weatherdata, setWeatherdata] = useState([])

  function citytext() {
    document.querySelector("input").addEventListener("input", (e) => {
      e.preventDefault();
      cityinput = e.target.value;
    
      console.log(cityinput)
     
      
     
    })
   

    
  }
 

  async function getdata(value) {
    const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${value}&days=7&aqi=&alerts=no&lang=tr
    `)
    const result = await data.json();
    setWeatherdata(result.forecast.forecastday)

    console.log(result)
    
    
  }


  return (
    <div>
      <div className='search'>
        <input type="text" placeholder='Search a city...' onChange={citytext} />
        <button onClick={() => getdata(cityinput)}>Search</button>
      </div>

      {weatherdata.map(item => (
        <Weather
          key={item.date}
          date={item.date}
          mintemp={item.day.mintemp_c}
          maxtemp={item.day.maxtemp_c}
          condition={item.day.condition.text}
          icon={item.day.condition.icon} />))}
    </div>
  );

}
export default App;
