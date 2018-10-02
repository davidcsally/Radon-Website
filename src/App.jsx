
import React from 'react';
// import Header from './HeaderComponent.jsx'; 
import MainContent from './components/MainContent';
import { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Router>
        {/* <Header /> */}
        <Route expact path='/' component={MainContent} />
        {/* <Route path='/docs' component={DocsComponent} /> */}
      </Router>
    )
  }
}

export default App;
