import logo from './logo.svg';
import './App.css';
import MainComponent  from './components/MainComponent';

function App() {
  function trackingFunction() { console.log('I SHALL GET ALL OF YOU DATA') };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MainComponent showSmallText trackData={trackingFunction} submit={() => {console.log('CLICKED!')}}/>
      </header>
    </div>
  );
}

export default App;
