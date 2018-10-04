import React from 'react';
import MainContent from './components/MainContent';
import DocsComponent from './components/DocsComponent';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div id='route-wrapper'>
        <Router>
          <Switch>
            <Route exact path='/' component={MainContent} />
            <Route path='/docs' component={DocsComponent} />
            <Redirect from='/*' to='/' />
          </Switch>
        </Router>

      </div>
    )
  }
}

export default App;
