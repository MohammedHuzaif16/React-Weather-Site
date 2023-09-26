import React from "react";
import { useState, useEffect } from "react";
import '../App.css'
import * as Icon from 'react-bootstrap-icons';
import cloudy from '../images/cloudy.png'
import sunny from '../images/sunny.png'
import drizzle from '../images/drizzle.png'
import rainy from '../images/rainy.png'
import windy from '../images/windy.png'
import snow from '../images/snowy.png'
import thunder from '../images/thunder.png'



export default function Card() {
  const [city, setCity] = useState('')
  const [cityData, setCityData] = useState()
  // ADD API KEY FROM OPEN WEATHER HERE BY CREATING A FREE ACCOUNT.
  let apiKey = '';
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

  const search = async () => {
    if (city === '') {
      return 0
    }
    let res = await fetch(url)
    let data = await res.json()
    setCityData(data)
  }

  console.log(cityData)
  return (
    <div className="weather-box">
      <div className="weather-search">
        <input type="text"
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city" />
        <button
          onClick={() => {
            search()
          }}>
          <Icon.Search size={25} />
        </button>
      </div>
      {cityData &&
        <div className="weather-detail">
          <div className="weather-image-temp">
            <div className="weather-image">
              <img src={sunny} alt="" />
            </div>
            <div className="temperature">
              <h2>Temperature</h2>
              <div className="temp-value">
                <Icon.ThermometerHigh size={50} />
                <h1>
                  {Math.floor(cityData.main.temp - 273)}<sup>&deg; C</sup>
                </h1>
              </div>
            </div>
          </div>
          <div className="city-name"><h1 className="city">
            {cityData.name}
          </h1></div>
          <div className="weather-additionals">

            <div className="humidity">
              <h2>Humidity</h2>
              <div className="humid-value">
                <Icon.Water size={30} />
                <h3>
                  {cityData.main.humidity}%
                </h3>
              </div>
            </div>
            <div className="wind">
              <h2>Wind</h2>
              <div className="wind-value">
                <Icon.Wind size={30} />
                <h3>
                  {Math.floor(cityData.wind.speed * (18 / 5))}Km/hr
                </h3>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}