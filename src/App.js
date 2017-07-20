import React, { Component,PropTypes } from 'react';
import Home from './components/Home/Home';

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

App.propTypes = {
  children:PropTypes.object.isRequired
};

export default App;
