import React from 'react';  
import { Link } from 'react-router-dom';

class IntroductionComponent extends React.Component { 
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="docContent">
      <div className='all-text-components apiref'>
        <h1>Introduction</h1>
        <p className='subheaders'>An abstract look into Radon.</p>
        <p className='paragraph'>A predictable state management tool that enforces data encapsulation via 
          a state tree to encourage logically obvious state structures. The state tree design coupled with time travel 
          debugging makes the Radon framework an ideal tool for designing state with complex relationships.</p>
        <img src='https://img.shields.io/travis/com/radonjs/Radon/master.svg?style=flat-square'/>
        <img src="https://camo.githubusercontent.com/17256699f80f9a741d0a009cd672030498f0b2bd/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f7261646f6e2d6a732e7376673f7374796c653d666c61742d737175617265" alt="npm" data-canonical-src="https://img.shields.io/npm/v/radon-js.svg?style=flat-square" style={{maxWidth: "100%", paddingLeft: 15}}/>
        <hr/>
        <h3 id='background'>Background</h3>
        <p className='paragraph'>
          When it comes to adopting a state manager for frontend frameworks, considerations for variable scoping 
          are rarely addressed. Popular state managers such as redux and mobx do not address the issue, and yet 
          scope is a ubiquitous concern across all programming languages. Radon is a state manager that was built 
          on the idea that state should be stored in a single source of truth, but also that data should be 
          encapsulated and accessible only to components whose functionality directly relates to the stored variables.
        </p>
        <p className='paragraph'>
          The implementation of data encapsulation in Radon led to two other key features of the state management 
          framework. Radon employs deconstruction of nested objects in state to further privitize individual 
          variables. An immensely useful side effect of object deconstruction is the ability for components to 
          subscribe to particular key/values or indices within objects. Ultimately this specialized subscription 
          eliminates the necessity for all components listening to an object to re-render, and instead for only 
          the component subscribed to a particular index or key/value to re-render.
        </p>
        <p className='paragraph'>
          Lastly, isolating data within Radon allowed for seamless integration of asynchronous state 
          modifications. Radon can natively handle asynchronous modifier functions and will ensure that all 
          state updates to a particular variable will occur in a predictable and orderly manner. 
        </p>
        <h3 id='howitworks'>How It Works</h3>
        <p className='paragraph'>
          Radon is built using a tree data structure named the Silo. Pieces of state are stored in the Silo as 
          specially designed nodes that are organized in a way to parallel the component tree of many common 
          frontend frameworks such as React or Vue. The intention for the Silo State Tree is for state nodes to 
          share their data and modifier functions with corresponding frontend components. However, this 
          implementation alone would be too constricting of the data. Therefore, frontend components are not only 
          able to access the data from their corresponding state nodes, but also the data from its parent, 
          grandparent, and any further parent tracing back to the root of the Silo. In sum, frontend components 
          will have access to parental lineage data, but will not have access to their sibling’s or children's data.
        </p>
        <p className='paragraph'>
          Modifiers are functions written by the developer that can only modify a single state variable. Developers 
          have the option to create an asynchronous modifier which may seem problematic if multiple modifiers are 
          called in tandem to edit the same piece of state. However, Radon ensures that all state changes, whether 
          asynchronous or synchronous, occur in the order of initial invocation. This is accomplished with an 
          asynchronous queue that awaits the completion of the most recently invoked modifier before progressing 
          to the next.
        </p>
      </div>
      <div className='pageContents'>
        <ul>
          <p>CONTENTS</p>
          <li className={this.props.currentContent === 0 ? "currentlyReading" : ""}><Link to={'#background'}>Background</Link></li>
          <li className={this.props.currentContent === 1 ? "currentlyReading" : ""}><Link to={'#howitworks'}>How It Works</Link></li>
        </ul>
      </div>
      </div>
    )
  }
}

export default IntroductionComponent;