import React from 'react';  
import { Link } from 'react-router-dom';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const SideBarComponent = (props) => { 
  return (
    <div id='sidebar'>
      <ExpansionPanel defaultExpanded={props.expandedMotivation} onChange={props.toggleMotivation}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Motivation</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <Link to={props.path + '/introduction'} className={'subtabs ' + (window.location.href.split('/').pop().split('#')[0] === 'introduction' ? "selected" : '')}>Introduction</Link><br/><br/>
              <Link to={props.path + '/deep-dive'} className={'subtabs ' + (window.location.href.split('/').pop().split('#')[0] === 'deep-dive' ? "selected" : '')}>Deep Dive</Link>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel defaultExpanded={props.expandedGetStarted} onChange={props.toggleGetStarted}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Getting Started</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <Link to={props.path + '/quick-start'} className={'subtabs '+ (window.location.href.split('/').pop().split('#')[0] === 'quick-start' ? "selected" : '')}>Quick Start</Link><br/><br/>
              <Link to={props.path + '/react-guide'} className={'subtabs ' + (window.location.href.split('/').pop().split('#')[0] === 'react-guide' ? "selected" : '')}>React Guide</Link><br/><br/>
              <Link to={props.path + '/nested-objects'} className={'subtabs '+ (window.location.href.split('/').pop().split('#')[0] === 'nested-objects' ? "selected" : '')}>Creating Modifiers</Link><br/><br/>
              <Link to={props.path + '/async-modifiers'} className={'subtabs '+ (window.location.href.split('/').pop().split('#')[0] === 'async-modifiers' ? "selected" : '')}>Async Modifiers</Link>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel defaultExpanded={props.expandedAPIRef} onChange={props.toggleAPIRef}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>API Reference</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <Link to={props.path + '/stateNode'} className={'subtabs '+ (window.location.href.split('/').pop().split('#')[0] === 'stateNode' ? "selected" : '')}>StateNode</Link><br/><br/>
              <Link to={props.path + '/combineNodes'} className={'subtabs '+ (window.location.href.split('/').pop().split('#')[0] === 'combineNodes' ? "selected" : '')}>combineNodes</Link><br/><br/>
              <Link to={props.path + '/Provider'} className={'subtabs '+ (window.location.href.split('/').pop().split('#')[0] === 'Provider' ? "selected" : '')}>Provider</Link><br/><br/>
              <Link to={props.path + '/bindToSilo'} className={'subtabs '+ (window.location.href.split('/').pop().split('#')[0] === 'bindToSilo' ? "selected" : '')}>bindToSilo</Link><br/><br/>
              <Link to={props.path + '/bindObjectToSilo'} className={'subtabs '+ (window.location.href.split('/').pop().split('#')[0] === 'bindObjectToSilo' ? "selected" : '')}>bindObjectToSilo</Link>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
    </div> 
  )
}

export default SideBarComponent;