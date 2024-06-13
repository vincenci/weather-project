import React from "react";

export default function WeatherInfo(){
    return(
       <div className="WeatherInfo">
      
      
      <div className="row mt-3">
        <div className="col-6">
          
           <h1>paris</h1>
      
        <span>
          wednesday 13 12:05
        </span>
        <span className="text-capitalize">rainy</span>
        <br/>
          
            <span>Humidity: 80%</span>
            <span>Wind: 30 km/h</span> 
          
        </div>
        <div className="col-6">
          <div className="d-flex">
          <div>
              🌦
            </div>

            <div>
              16℃
            </div>
            </div>
        </div>
      </div>
    </div> 
    )
}