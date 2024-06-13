
import './App.css';
import Weather from './weather';

function App() {
  return (
  <div className='weatherProject'>
    <div className="App">
      <Weather defaultCity="Nairobi" />
     
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
    
  );
}

export default App;
