import React, { Component,PropTypes } from 'react';
import Home from './components/Home/Home';
import Header from './common/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        {this.props.children}
      </div>
    );
  }
  }

App.PropTypes = {
  children:PropTypes.object.isRequired
};

export default App;
