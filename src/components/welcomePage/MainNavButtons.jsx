import React from 'react'
import { Link } from 'react-router-dom'

const MainNavButtons = () => {
    
  return( 
    <div id="main-nav-buttons">
      <Link to='/docs/introduction' className='nav-button' >Documentation</Link><br/>
      <a href='https://github.com/radonjs/Radon' className='nav-button'>GitHub</a><br/>
      <Link to='/docs/quick-start' className='nav-button'>Download</Link><br/>
    </div>
  )
}

export default MainNavButtons;