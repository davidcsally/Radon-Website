import React from 'react';  
import SideBarComponent from './SideBarComponent';
import DocsTextComponent from './DocsTextComponent';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const DocsComponent = (props) => { 
  return (
    <div id='docs-component'>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Radon
          </Typography>
        </Toolbar>
      </AppBar>

      <SideBarComponent path={props.match.path}/>
      <DocsTextComponent />
    </div>
  )
}

export default DocsComponent;