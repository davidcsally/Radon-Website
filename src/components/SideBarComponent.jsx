import React from 'react';  
import { Link } from 'react-router-dom';

const SideBarComponent = (props) => { 

  function changeActiveTab(e) {
    const activeTab = document.querySelector('.active-tab');
    activeTab.classList.remove('active-tab');
    activeTab.classList.add('inactive-tab');

    e.target.classList.remove('inactive-tab');
    e.target.classList.add('active-tab');
  }

  // bindings
  changeActiveTab = changeActiveTab.bind(this);

  return (
    <div id='sidebar'>
      <Link to={props.path + '/motivation'} className='sidebar-tabs active-tab' onClick={changeActiveTab}>Motivation</Link>
      <Link to={props.path + '/gettingstarted'} className='sidebar-tabs inactive-tab' onClick={changeActiveTab}>Getting Started</Link>
      <Link to={props.path + '/contribute'} className='sidebar-tabs inactive-tab' onClick={changeActiveTab}>Contribute</Link>
    </div>
  )
}

export default SideBarComponent;