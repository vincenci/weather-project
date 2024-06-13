import React from "react";
import FormattedDate from "./formattedDate";
import WeatherIcon from "./WeatherIcons";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props){
    return(
       <div className="WeatherInfo">
      
      
      <div className="row mt-3">
        <div className="col-6">
          
           <h1>{props.data.city}</h1>
      
        <span>
          <FormattedDate date={props.data.date}/>
        </span>
        <span className="text-capitalize">{props.data.description}</span>
        <br/>
          
            <span>Humidity: {props.data.humidity}%</span>
            <span>Wind: {props.data.wind} km/h</span> 
          
        </div>
        <div className="col-6">
          <div className="d-flex">
          <div>
             <WeatherIcon code={props.data.icon} size={52} />
            </div>

            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
            </div>
        </div>
      </div>
    </div> 
    )
}