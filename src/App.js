import React from 'react';
// import logo from './logo.svg';
import './App.css';
import StateRequirement from './hooks/StateRequirement';
//import Table from './fragments/Table';
import Timer from './hooks/Timer';

function App() {
  return (
    <div className="App">
         <Timer />
         <StateRequirement/>
      </div>
  );
}

export default App;
