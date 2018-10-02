import React from 'react'
import renderDocumentation from '../src/App.jsx'
import App from '../src/App.jsx'


const buttonStyles = {maxWidth: 400}

const MainNavButtons = () => {
    
  return( 
    <div className="main-nav-buttons" style={buttonStyles}>
       <button>GitHub</button>
       <button>Download</button>
       <button>Documentation</button>
    </div>
  )
}

export default MainNavButtons;