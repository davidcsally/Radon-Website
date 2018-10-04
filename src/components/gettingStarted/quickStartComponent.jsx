import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { foundation } from 'react-syntax-highlighter/styles/hljs';
import { Link } from 'react-router-dom';

const QuickStartComponent = (props) => {

  const importRadon = 
`import { StateNode } from 'radon-js';`;
  const instantiate = 
`const AppState = new StateNode('AppState');
// or
// const AppState = new StateNode('AppState', 'OtherState');`;
  const initializeState = 
`AppState.initializeState({
  name: 'Radon',
  status: true,
  arrayOfNames: []
})`;
  const initializeModifiers = 
`AppState.initializeModifiers({
  name: {
    updateName: (current, payload) => {
      return payload;
    }
  },
  status: {
    toggleStatus: (current) => {
      return !current;
    }
  }
})`;
  const buttons = 
`<button onClick={() => this.props.updateName('Radon is cool!!!')}>Click Me</button>
<button onClick={() => this.props.toggleStatus()}>Click Me Too</button>`;
//   const otherInitializaModifiers = 
// `AppState.initializeModifiers({
//   arrayOfNames: {
//     addNameToArray: (current, payload) => {
//       current.push(payload);
//       return current;
//     },
//     updateAName: (current, index, payload) => {
//       return payload;
//     }
//   }
// })`
//   const anotherButton =
// `<button onClick={() => updateAName(0, 'Hannah')}>Edit an Index!</button>`
  const combineNodes = 
`import AppState from './appState';
import NarbarState from './navbarState';
import mainState from './mainState';

const silo = combineStateNodes(AppState, NavbarState, MainState);`

  return (
    <div className='all-text-components'>
      <h1>Getting Started</h1>
      <p className='paragraph'>To install the stable version using npm as your package manager:</p>
      <code>npm install --save radon-js</code>
      <p className='paragraph'>The Radon source code is transpiled to ES2015 to work in any modern browser. You don't need to 
        use Babel or a module bundler to get started with Radon.
      </p>
      <p className='paragraph'>Most likely, you'll also need the React bindings and the developer tools.</p>
      <code>npm install --save react-radon</code>
      <p className='paragraph'>Unlike Radon, React doesn't provide UMD builds, so you will need to use a CommonJS module 
        bundler like Webpack, Parcel, or Rollup to utilize Radon with React.</p>


      <h2>Initialize State</h2>
      <br/>
      <SyntaxHighlighter language='javascript' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={false} style={foundation}>{importRadon}</SyntaxHighlighter>
      <p className='paragraph'>
        StateNode is a class needed for creating instances of state. In Radon, StateNodes are created in
        tandem with frontend components. The naming convention is important here; if you have created 
        a frontend component called App with the intent of statefulness, then an instance of StateNode 
        must be declared and labeled as AppState. This will allow the App component to properly bind to 
        AppState.
      </p>
      <p className='paragraph'>
        The new instance of StateNode takes two arguments: the first argument is the name of the StateNode 
        you are creating which must follow our naming convention. The second argument is the name of the 
        parent node. One StateNode must be considered the root of the state tree. Therefore, at only one 
        occassion can the parent argument be omitted. This instance of StateNode will be considered the root. 
        Every other StateNode must take a parent argument.
      </p>
      <SyntaxHighlighter language='javascript' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={false} style={foundation}>{instantiate}</SyntaxHighlighter>
      <p className='paragraph'>
        To declare variables in state, the method initializeState must be called which takes an object
        as an argument. The variable names and their data should be listed in the object as key-value pairs.
      </p>
      <SyntaxHighlighter codeTagProps={{className: 'spacingWithSH'}} language='javascript' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={false} style={foundation}>{initializeState}</SyntaxHighlighter>
      <p className='paragraph'>
        Modifiers are functions that modify a single variable in state. Modifiers are attached to variables by
        calling the method initializeModifiers which also takes an object as an argument. The keys of the
        argument object must correspond to variables that have already been declared in AppState. The values
        are objects that contain the modifier functions as key-value pairs. There are two types of modifiers
        in Radon. The first type, as seen below, can accept either 1 or 2 arguments. The 'current' argument
        will automatically be injected with the bound state variable. The 'payload' argument is any data that 
        can be used to modify or replace the 'current' value of state. Even if the current value of state is 
        not used in the modifier, it will still be passed in automatically.
      </p>
      <SyntaxHighlighter codeTagProps={{className: 'spacingWithSH'}} language='javascript' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={false} style={foundation}>{initializeModifiers}</SyntaxHighlighter>
      <p className='paragraph'>
        It is important to note that when these modifiers are called from a component, only the payload argument
        must be passed into the function as Radon will fill the 'current' parameter by default.
      </p>
      <SyntaxHighlighter codeTagProps={{className: 'spacingWithSH'}} language='javascript' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={false} style={foundation}>{buttons}</SyntaxHighlighter>
      {/* <p className='paragraph'>
        The second modifier type is what helps Radon eliminate unnecessary re-rendering of frontend components.
        This modifier type accepts three arguments and is used exclusively with objects. *Note that
        initializeModifiers should only be called once. It is shown again here for demonstration purposes only*.
      </p>
      <SyntaxHighlighter codeTagProps={{className: 'spacingWithSH'}} language='javascript' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={false} style={foundation}>{otherInitializaModifiers}</SyntaxHighlighter>
      <p className='paragraph'>
        The modifier addNumberToArray is nothing new. Since the goal of the modifier is to edit the array as a 
        whole, the entire array object is passed into the 'current' parameter. A modifier that edits the array 
        will cause a re-render of any component that subscribes to the array. However, we may have
        circumstances in which we only want to edit a single index within an array. In this case we create a
        modifier that accepts an index. The 'current' value will always reflect arrayOfNumbers[index]. This 
        will prevent a re-render of components listening to the entire array, and will instead only re-render
        components listening to the specified index.
      </p>
      <p className='paragraph'>
        Again, it is important to note that the 'current' parameter will be injected with state automatically.
      </p>
      <SyntaxHighlighter codeTagProps={{className: 'spacingWithSH'}} language='javascript' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={false} style={foundation}>{anotherButton}</SyntaxHighlighter> */}
      <p className='paragraph'>
        Once all StateNodes have been declared, they should be combined in the function combineStateNodes. The
        returned object is known as the silo.
      </p>      
      <SyntaxHighlighter codeTagProps={{className: 'spacingWithSH'}} language='javascript' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={false} style={foundation}>{combineNodes}</SyntaxHighlighter>
      <p className='paragraph'>
        Learn how to connect the silo object to <Link to={props.url + '/docs/react-guide'}>React.</Link>
      </p>
    </div>
  )
}

export default QuickStartComponent;