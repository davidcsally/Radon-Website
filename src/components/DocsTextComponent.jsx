import React from 'react';  
import { Switch, Route, Redirect } from 'react-router-dom';
import IntroductionComponent from './motivation/IntroductionComponent';
import DeepDiveComponent from './motivation/DeepDiveComponent';
import StateNode from './APIRefrence/StateNode.jsx';
import QuickStartComponent from './gettingStarted/quickStartComponent';
import NestedObjectsComponent from './gettingStarted/nestedObjectsComponent';
import AsyncModifiersComponent from './gettingStarted/asyncModifiersComponent';
import ReactGuideComponent from './gettingStarted/reactGuideComponent';

class DocsTextComponent extends React.Component{

  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }
  
  handleScroll (e) {
    e.preventDefault();
    let elms = document.getElementsByTagName('h3');
    let currentHighest = 0;
    for(let i = 0; i < elms.length; i++) {
      if(elms[i].getBoundingClientRect().top - document.body.getBoundingClientRect().top < 550) {
        currentHighest = i;
      }
    }
    if(currentHighest !== this.props.currentContent){
      console.log(document.getElementById('docs-text-component').scrollTop);
      this.props.setCurrentContent(currentHighest, document.getElementById('docs-text-component').scrollTop);
    }
  }

  render() {
    return (
      <div id='docs-text-component' onScroll={this.handleScroll}>
        <Switch>
          <Route exact path='/docs/introduction' component={() => <IntroductionComponent currentContent={this.props.currentContent}/>}></Route>
          <Route exact path='/docs/deep-dive' component={() =><DeepDiveComponent currentContent={this.props.currentContent}/>}></Route>
          <Route exact path='/docs/quick-start' component={() => <QuickStartComponent currentContent={this.props.currentContent}/>}></Route>
          <Route exact path='/docs/react-guide' component={() => <ReactGuideComponent currentContent={this.props.currentContent} />}></Route>
          <Route exact path='/docs/nested-objects' component={() => <NestedObjectsComponent currentContent={this.props.currentContent} />}></Route>
          <Route exact path='/docs/async-modifiers' component={() => <AsyncModifiersComponent currentContent={this.props.currentContent} />}></Route>
          <Route exact path='/docs/stateNode' component={() => <StateNode currentContent={this.props.currentContent}/>}></Route>
          <Redirect from='/docs' to='/docs/introduction'></Redirect>
        </Switch>
      </div>
    )
  }
}

export default DocsTextComponent;