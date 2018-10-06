import React from 'react';
import MainContent from './components/welcomePage/MainContent';
import DocsComponent from './components/DocsComponent';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import {withRouter} from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {currentContent: 0, scrollX: 0, expandedMotivation: true, expandedGetStarted: false, expandedAPIRef: false};

    this.setCurrentContent = this.setCurrentContent.bind(this);
    this.resetCurrentContent = this.resetCurrentContent.bind(this);
    this.toggleAPIRef = this.toggleAPIRef.bind(this);
    this.toggleGetStarted = this.toggleGetStarted.bind(this);
    this.toggleMotivation = this.toggleMotivation.bind(this);
  }

  resetCurrentContent() {
    this.setState({...this.state, currentContent: 0});
  }

  setCurrentContent(count, scrollY) {
    this.setState({...this.state, currentContent: count, scrollY: scrollY}, () => {
      document.getElementById('docs-text-component').scrollTop = scrollY;
    });
  }

  toggleMotivation() {
    this.setState({...this.state, expandedMotivation: !this.state.expandedMotivation})
  }

  toggleGetStarted() {
    this.setState({...this.state, expandedGetStarted: !this.state.expandedGetStarted});
  }

  toggleAPIRef() {
    this.setState({...this.state, expandedAPIRef: !this.state.expandedAPIRef});
  }

  render() {
    return (
      <div id='route-wrapper'>
        <Router>
          <Switch>
            <WipeCurrentContent resetCurrentContent={this.resetCurrentContent}>
              <Route exact path='/' component={MainContent} />
              <Route path='/docs' component={(props) => <DocsComponent {...props} scrollX={scrollX} currentContent={this.state.currentContent} setCurrentContent={this.setCurrentContent} expandedAPIRef={this.state.expandedAPIRef} expandedGetStarted={this.state.expandedGetStarted} expandedMotivation={this.state.expandedMotivation} toggleAPIRef={this.toggleAPIRef} toggleGetStarted={this.toggleGetStarted} toggleMotivation={this.toggleMotivation}/>}/>
              <Redirect from='/*' to='/' />
            </WipeCurrentContent>
          </Switch>
        </Router>

      </div>
    )
  }
}

class WipeCurrentContent extends React.Component{
  constructor(props) {
    super(props);

    this.unlisten = this.props.history.listen((location, action) => {
      this.props.resetCurrentContent();
    }) 
  }


  componentDidMount() {

  }

  render() {
    return (
        this.props.children
     );
  }

  componentWillUnmount() {
    this.unlisten();
  }
}

WipeCurrentContent = withRouter(WipeCurrentContent);

export default App;
