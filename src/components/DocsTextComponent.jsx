import React from 'react';  
import MotivationComponent from './MotivationComponent.jsx';
import { Switch, Route, Redirect } from 'react-router-dom';

const DocsTextComponent = (props) => { 
  return (
    <div id='docs-text-component'>
      <Switch>
        <Route exact path='/docs/motivation' component={MotivationComponent}></Route>
        <Route exact path='/docs/gettingstarted'></Route>
        <Route exact path='/docs/contribute'></Route>
        <Redirect from='/docs' to='/docs/motivation'></Redirect>
      </Switch>
    </div>
  )
}

export default DocsTextComponent;