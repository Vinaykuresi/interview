import logo from './logo.svg';
import './App.css';
import Demo from "./Components/demo";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { initStore } from './Store/index';
import { Provider } from 'react-redux';

const store = initStore();

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      {console.log("In app.js",store)}
      <Demo/>

      {/* <header className="App-header">
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
      </header> */}
    </div>
    </Router>
    </Provider>
  );
}

export default App;
