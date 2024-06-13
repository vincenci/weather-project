
import './App.css';

function App() {
  return (
  <div className='weatherProject'>
    <div className="App">
     
      <div className="Weather">
        <form >
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

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
      <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/vincenci"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vincencia
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/vincenci/weather-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://lovely-pika-675f60.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
    </div>
    </div>
    </div>
  );
}

export default App;
