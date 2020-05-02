import React, { Component } from 'react';
import Routes from './routes';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Routes />
      </div>
    );
  }
}


export default App;
