import React from 'react';  
import { Link } from 'react-router-dom';
import IntroductionComponent from './IntroductionComponent';

const SideBarComponent = (props) => { 

  function changeActiveHeaderTab(e) {
    e.preventDefault();
    const activeTab = document.querySelector('.active-tab');
    const activeList = document.querySelector('.active-list');
    const parent = e.target.parentElement.querySelector('ul');
    
    activeTab.classList.remove('active-tab');
    activeList.classList.remove('active-list');
    e.target.parentElement.classList.add('active-tab');
    parent.classList.add('active-list');
  }

  // bindings
  changeActiveHeaderTab = changeActiveHeaderTab.bind(this);

  return (
    <div id='sidebar'>
      <div className='active-tab'>
        <Link to={props.path + '/motivation/introduction'} className='sidebar-tabs' onClick={changeActiveHeaderTab}>Motivation</Link>
        <ul className='active-list'>
          <li><Link to={props.path + '/motivation/introduction'} className='list-tabs active-list-tab'>Introduction</Link></li>
          <li><Link to={props.path + '/motivation/deepdive'} className='list-tabs inactive-list-tab'>Deep Dive</Link></li>
        </ul>
      </div>
      <div>
        <Link to={props.path + '/gettingstarted'} className='sidebar-tabs' onClick={changeActiveHeaderTab}>Getting Started</Link>
        <ul>
          <li>hey</li>
          <li>there</li>
        </ul>
      </div>
      <div>
        <Link to={props.path + '/contribute'} className='sidebar-tabs' onClick={changeActiveHeaderTab}>Contribute</Link>
        <ul>
          <li>sup</li>
          <li>mate</li>
        </ul>
      </div>
    </div>
  )
}

export default SideBarComponent;