import React from 'react'; 
import { Component } from 'react';
import MainContent from './MainContent.jsx'
import Header from './HeaderComponent.jsx'; 
import SidebarModal from './SidebarModal.jsx'

//Will hold state for app. Child comps will be 

class MainContainer extends Component {
    constructor(props){
        super(props); 
    }

  render() {
    return (
      <div>
        <Header />
        <MainContent />
        {/* <SidebarModal /> */}
      </div>
    )
  }
}


export default MainContainer; 