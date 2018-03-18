import React, { Component } from 'react';
import SampleChildComponent from './SampleChildComponent';
import PureChildComponent from './PureChildComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      componentText: '1'
    }
  };

  componentTextSetter = (newText) => {
    this.setState({
      componentText: newText
    });
  };

  render = () => {
    console.log('Rendering App');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-body">
          <SampleChildComponent pureComponentTextSetter={ this.componentTextSetter }/>
          <PureChildComponent passedInt={ this.state.componentText }/>
        </div>
      </div>
    );
  }
}

export default App;
