import React from 'react';  
import { Link } from 'react-router-dom';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const SideBarComponent = (props) => { 
  console.log(window.location.href.split('/').pop());
  return (
    <div id='sidebar'>
      <ExpansionPanel defaultExpanded={true}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Motivation</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <Link to={props.path + '/introduction'} className={'subtabs ' + (window.location.href.split('/').pop() === 'introduction' ? "selected" : '')}>Introduction</Link><br/><br/>
              <Link to={props.path + '/deep-dive'} className='subtabs'>Deep Dive</Link>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Getting Started</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <Link to={props.path + '/quick-start'} className='subtabs'>Quick Start</Link><br/><br/>
              <Link to={props.path + '/react-guide'} className='subtabs'>React Guide</Link><br/><br/>
              <Link to={props.path + '/nested-objects'} className='subtabs'>Nested Objects</Link><br/><br/>
              <Link to={props.path + '/async-modifiers'} className='subtabs'>Async Modifiers</Link>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>API Reference</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <Link to={props.path + '/stateNode'} className='subtabs'>StateNode</Link><br/><br/>
              <Link to={props.path + '/combineNodes'} className='subtabs'>combineNodes</Link><br/><br/>
              <Link to={props.path + '/Provider'} className='subtabs'>Provider</Link><br/><br/>
              <Link to={props.path + '/bindToSilo'} className='subtabs'>bindToSilo</Link><br/><br/>
              <Link to={props.path + '/bindObjectToSilo'} className='subtabs'>bindObjectToSilo</Link>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
    </div> 
  )
}

export default SideBarComponent;