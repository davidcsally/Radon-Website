import React from 'react';  
import { Link } from 'react-router-dom';

const DeepDiveComponent = (props) => { 
  return (
    <div className="docContent">
    <div className='all-text-components apiref' id='motivation-component'>
      <h1>Deep Dive</h1>
      <p className='subheaders'>A deeper look into how Radon works.</p>
      <h3 id='data-encapsulation'>Data Encapsulation</h3>
        <p className='paragraph'>
          One of the first goals of Radon was to implement an object oriented state manager capable of data 
          encapsulation. Many state managers allow pieces of state to be accessible by any component or module, 
          and with that access follows modification allowances. This inherently conflicts with a ubiquitous object 
          oriented programming practice: limiting scope. Limiting the scope of a variable or method provides better 
          context for its purpose and makes it easier to reason about. Plus, there's the added bonus of protecting 
          data from being modified by script that has several degrees of separation. Many programming languages have 
          native features to handle data encapsulation such as privatized class attributes and methods. Unfortunately, 
          Javascript doesn't have the same privatization features held by universal languages such as Java and C/C++. 
          Therefore, the data encapsulation feature of Radon needed to be derived by other means.
        </p>
        <p className='paragraph'>
          To understand encapsulation in Radon, it is first important to understand how the data is organized. 
          Radon is built using a tree data structure. Pieces of state are stored in specially designed nodes 
          and are organized in a way that parallels the component tree of many common frontend frameworks such 
          as React or Vue. For example, if a developer created an initial App component that needed access to 
          variables in state, a corresponding AppState node would be created that contained those specific 
          variables and any accompanying modifier functions. Now let's say the App component renders two more 
          components named Navbar and Main. If Navbar were to be stateful, it would need a corresponding node 
          called NavbarState. If the same thing can be said for Main, then it would have a corresponding state 
          node called MainState. If a frontend component is intended to be stateless, then there will be no 
          corresponding state node. So now we can hopefully start to imagine that the App Component is at the 
          top of a component tree (as the root), with NavbarState and MainState branching beneath it. The same 
          can be said for the State Tree. AppState is our root, with NavbarState and MainState branching below.
        </p>
        <p className='paragraph'>
          But what does this mean for data encapsulation? The intention for the State Tree is for state nodes 
          to share their data and modifiers with corresponding frontend components. However, this implementation 
          alone would be too constricting of the data. Therefore, frontend components are not only able to access 
          the data from their corresponding state nodes, but also the data from its parent, grandparent, and any 
          further parent tracing back to the root. Now there's a greater sense of flow that encourages commonly 
          used and shared data to be stored near the root, and specialized data to be stored as leaves on the tree. 
          In sum, frontend components will have access to parental lineage data, but will not have access to their 
          sibling’s or children's data. Thus, varying pieces of state are exposed where they are needed, and hidden 
          where they are not.
        </p>
        <h3 id='component-rendering'>Component Rendering Linked to Objects in State</h3>
        <p className='paragraph'>
          Another feature of Radon intends to remove unnecessary re-rendering that can emerge from modifying 
          objects in state. In other state management systems, modifying a single key/value pair in a plain object 
          or an index in an array will result in a re-render of any component subscribed to the object. The Radon 
          State Tree solves this problem by deconstructing objects into state nodes by index or key/value pairs. 
          The object deconstruction feature allows for direct modification of these indices/pairs and triggers a 
          re-render of only the component listening to that particular data point.
        </p>
        <h3 id='asychronicity'>Asynchronous Modifications to State</h3>
        <p className='paragraph'>
          Modifiers are functions written by the developer that can only modify a single state variable. 
          Developers have the option to create an asynchronous modifier which may seem problematic if multiple 
          modifiers are called in tandem to edit the same piece of state. However, Radon ensures that all state 
          changes, whether asynchronous or synchronous, occur in the order of initial invocation. This is 
          accomplished with an asynchronous queue that awaits the completion of the most recently invoked modifier 
          before progressing to the next. Hence, the developer does not need to worry about conflicting state 
          changes or out of order updates.
        </p>
    </div>
    <div className='pageContents'>
            <ul>
            <p>CONTENTS</p>
                <li className={props.currentContent === 0 ? "currentlyReading" : ""}><Link to={'#data-encapsulation'}>Data Encapsulation</Link></li>
                <li className={props.currentContent === 1 ? "currentlyReading" : ""}><Link to={'#component-rendering'}>Component Rendering</Link></li>
                <li className={props.currentContent === 2 ? "currentlyReading" : ""}><Link to={'#asychronicity'}>Asynchronicity</Link></li>
            </ul>
    </div>
    </div>
  )
}

export default DeepDiveComponent;