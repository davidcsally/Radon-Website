import React from 'react';  
import SideBarComponent from './SideBarComponent';
import DocsTextComponent from './DocsTextComponent';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const DocsComponent = (props) => { 
  return (
    <div id='docs-component'>
      <AppBar className="header" position="static" color="secondary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Radon
          </Typography>
        </Toolbar>
      </AppBar>

      <div className="content">
        <SideBarComponent className="sidebar" path={props.match.path}/>
        <DocsTextComponent className="documentation"/>
      </div>
    </div>
  )
}

export default DocsComponent;