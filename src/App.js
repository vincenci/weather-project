
import './App.css';
import WeatherInfo from './weatherInfo';

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

         <WeatherInfo/>
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
