import React from 'react';
import './App.css';
import Div from './components/Div';

const App = () =>{
  return (
    <div className="">
      <h1 className="App">Welcome to React</h1>
      <h1 className="student">Name of Students</h1>
      <div className="container">
        <div class="row">
          <Div name="Sara" age="30"/>
          <Div name="Maria" age="35"/>
          <Div name="Smith" age="40"/>
        </div>
      </div>
      </div>
  
  );
}

export default App;
