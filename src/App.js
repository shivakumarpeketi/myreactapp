import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import MyGreet from './components/Greet';
// import Welcome from './components/Welcome';
// import Message from './components/Message';
import Count from './components/Count';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyGreet name="Siva" surName="PEKETI">
          <p>Hello React Library...!</p>
        </MyGreet>
        <MyGreet name="Kumar" surName="PEKETI"/>
        <Welcome name="Raghu" education="MCA"/>
        <p>
          Edit or modify <code>src/App.js</code> and save to reload.
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
     <Count/>
    </div>
  );
}

export default App;
