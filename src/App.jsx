
import React from 'react';
import MainContainer from '../components/MainContainer.jsx';
import { Component } from 'react';

//renders MainContainer and HeaderComponent
class App extends Component {
    constructor(props) {
      super(props);

    }

  
  renderDocumentation = () => {
    console.log('hi')
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
