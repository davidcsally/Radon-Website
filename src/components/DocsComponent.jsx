import React from 'react';  
import SideBarComponent from './SideBarComponent';
import DocsTextComponent from './DocsTextComponent';
import { Link } from 'react-router-dom'
import logo from '../cyanWithGlow.jpg';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MobileMenuComponent from './mobileMenuComponent';

const DocsComponent = (props) => { 
  return (
    <div id='docs-component'>
      <AppBar className="header" position="static" color="secondary">
        <Toolbar>
          <MobileMenuComponent />
          <Typography className='link-wrapper' variant="title" color="inherit">
            <Link to='/'><div id='appbar-logo-wrapper'><img id='appbar-radon-logo' src={ logo }></img></div></Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <div className="content">
        <SideBarComponent expandedMotivation={props.expandedMotivation} toggleMotivation={props.toggleMotivation} expandedGetStarted={props.expandedGetStarted} toggleGetStarted={props.toggleGetStarted} expandedAPIRef={props.expandedAPIRef} toggleAPIRef={props.toggleAPIRef} className="sidebar" path={props.match.path}/>
        <DocsTextComponent currentContent={props.currentContent} setCurrentContent={props.setCurrentContent} resetCurrentContent={props.resetCurrentContent} className="documentation"/>
      </div>
    </div>
  )
}

export default DocsComponent;