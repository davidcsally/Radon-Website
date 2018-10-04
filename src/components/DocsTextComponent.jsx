import React from 'react';  
import IntroductionComponent from './IntroductionComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

const DocsTextComponent = (props) => { 
  return (
    <div id='docs-text-component'>
      <Switch>
        <Route exact path='/docs/introduction' component={IntroductionComponent}></Route>
        <Route exact path='/docs/gettingstarted'></Route>
        <Route exact path='/docs/contribute'></Route>
        <Redirect from='/docs' to='/docs/introduction'></Redirect>
      </Switch>
    </div>
  )
}

export default DocsTextComponent;