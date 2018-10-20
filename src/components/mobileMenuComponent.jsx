import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {SwipeableDrawer} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

class MobileMenuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose() {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const options = [
      <Link className='mobile-links' to={'/docs/introduction'}>Introduction</Link>,
      <Link className='mobile-links' to={'/docs/deep-dive'}>Deep Dive</Link>,
      <Divider/>,
      <Link className='mobile-links' to={'/docs/quick-start'}>Quick Start</Link>,
      <Link className='mobile-links' to={'/docs/react-guide'}>React Guide</Link>,
      <Link className='mobile-links' to={'/docs/nested-objects'}>Creating Modifiers</Link>,
      <Link className='mobile-links' to={'/docs/async-modifiers'}>Async Modifiers</Link>,
      <Divider/>,
      <Link className='mobile-links' to={'/docs/stateNode'}>StateNode</Link>,
      <Link className='mobile-links' to={'/docs/combineNodes'}>combineNodes</Link>,
      <Link className='mobile-links' to={'/docs/Provider'}>Provider</Link>,
      <Link className='mobile-links' to={'/docs/bindToSilo'}>bindToSilo</Link>,
      <Link className='mobile-links' to={'/docs/bindObjectToSilo'}>bindObjectToSilo</Link>
    ];
    
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    return (
      <div id='mobile-menu'>
        <div id='menu-icon-wrapper' onClick={this.handleClick}>
          <div className='hamburger'></div>
          <div className='hamburger'></div>
          <div className='hamburger'></div>
        </div>
        <SwipeableDrawer
          open={open}
          onClose={this.handleClose}
          onOpen={this.handleClick}
        >
          {options.map((option, i) => (
            <MenuItem key={Math.random() + i} selected={option === 'Pyxis'} onClick={this.handleClose}>
              {option}
            </MenuItem>
          ))}
        </SwipeableDrawer>
        </div>
    );
  }
}

export default MobileMenuComponent;