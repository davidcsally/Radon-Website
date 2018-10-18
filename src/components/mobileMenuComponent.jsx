import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class MobileMenuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose(this);
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
      <Link className='mobile-links' to={'/docs/quick-start'}>Quick Start</Link>,
      <Link className='mobile-links' to={'/docs/react-guide'}>React Guide</Link>,
      <Link className='mobile-links' to={'/docs/nested-objects'}>Creating Modifiers</Link>,
      <Link className='mobile-links' to={'/docs/async-modifiers'}>Async Modifiers</Link>,
      <Link className='mobile-links' to={'/docs/stateNode'}>StateNode</Link>,
      <Link className='mobile-links' to={'/docs/combineNodes'}>combineNodes</Link>,
      <Link className='mobile-links' to={'/docs/Provider'}>Provider</Link>,
      <Link className='mobile-links' to={'/docs/bindToSilo'}>bindToSilo</Link>,
      <Link className='mobile-links' to={'/docs/bindObjectToSilo'}>bindObjectToSilo</Link>
    ];
    
    const ITEM_HEIGHT = 48;

    return (
      <div id='mobile-menu'>
        <div id='menu-icon-wrapper' onClick={this.handleClick}>
          <div className='hamburger'></div>
          <div className='hamburger'></div>
          <div className='hamburger'></div>
        </div>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {options.map((option, i) => (
            <MenuItem key={Math.random() + i} selected={option === 'Pyxis'} onClick={this.handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default MobileMenuComponent;