import React from 'react';  
import HeaderComponent from './HeaderComponent'; 
import SideBarComponent from './SideBarComponent';
import DocsTextComponent from './DocsTextComponent';

const DocsComponent = (props) => { 
  return (
    <div id='docs-component'>
      <HeaderComponent />
      <SideBarComponent path={props.match.path}/>
      <DocsTextComponent />
    </div>
  )
}

export default DocsComponent;