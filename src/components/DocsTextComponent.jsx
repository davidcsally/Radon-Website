import React from 'react';  
import { Switch, Route, Redirect } from 'react-router-dom';
import IntroductionComponent from './IntroductionComponent';
import DeepDiveComponent from './DeepDiveComponent';
import StateNode from './APIRefrence/StateNode.jsx';

const DocsTextComponent = (props) => { 
  return (
    <div id='docs-text-component'>
      <Switch>
        <Route exact path='/docs/introduction' component={IntroductionComponent}></Route>
        <Route exact path='/docs/deep-dive' component={DeepDiveComponent}></Route>
        <Route exact path='/docs/stateNode' component={StateNode}></Route>
        {/* <Route exact path='/docs/contribute'></Route> */}
        {/* <Redirect from='/docs' to='/docs/introduction'></Redirect> */}
      </Switch>
    </div>
  )
}

export default DocsTextComponent;