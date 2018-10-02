
import React from 'react';
import MainContainer from './components/MainContainer.jsx';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <MainContainer />
      </div> 
    )
  }
}

export default App;
