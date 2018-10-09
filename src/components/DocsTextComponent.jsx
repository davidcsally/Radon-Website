import React from 'react';  
import { Switch, Route, Redirect } from 'react-router-dom';
import IntroductionComponent from './motivation/IntroductionComponent';
import DeepDiveComponent from './motivation/DeepDiveComponent';
import QuickStartComponent from './gettingStarted/quickStartComponent';
import NestedObjectsComponent from './gettingStarted/nestedObjectsComponent';
import AsyncModifiersComponent from './gettingStarted/asyncModifiersComponent';
import ReactGuideComponent from './gettingStarted/reactGuideComponent';
import StateNodeComponent from './APIReference/stateNodeComponent';
import CombineNodesComponent from './APIReference/combineNodesComponent';
import ProviderComponent from './APIReference/providerComponent';
import BindToSiloComponent from './APIReference/bindToSiloComponent';
import BindObjectToSiloComponent from './APIReference/bindObjectToSiloComponent';

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
          <Route exact path='/docs/stateNode' component={() => <StateNodeComponent currentContent={this.props.currentContent}/>}></Route>
          <Route exact path='/docs/combineNodes' component={() => <CombineNodesComponent currentContent={this.props.currentContent}/>}></Route>
          <Route exact path='/docs/provider' component={() => <ProviderComponent currentContent={this.props.currentContent} />}></Route>
          <Route exact path='/docs/bindToSilo' component={() => <BindToSiloComponent currentContent={this.props.currentContent} />}></Route>
          <Route exact path='/docs/bindObjectToSilo' component={() => <BindObjectToSiloComponent currentContent={this.props.currentContent} />}></Route>
          <Redirect from='/docs' to='/docs/introduction'></Redirect>
        </Switch>
      </div>
    )
  }
}

export default DocsTextComponent;