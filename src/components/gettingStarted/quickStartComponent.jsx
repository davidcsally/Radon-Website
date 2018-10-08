import React from 'react';
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/prism-light";
import js from 'react-syntax-highlighter/languages/prism/javascript';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import coy from '../../codeHighlightTheme.js';
import { Link } from 'react-router-dom';

registerLanguage('javascript', js);
registerLanguage('jsx', jsx);

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
});`;
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
});`;
  const buttons = 
`<button onClick={() => this.props.updateName('Radon is cool!!!')}>Click Me</button>
<button onClick={() => this.props.toggleStatus()}>Click Me Too</button>`;
  const combineNodes = 
`import AppState from './appState';
import NarbarState from './navbarState';
import mainState from './mainState';

const silo = combineStateNodes(AppState, NavbarState, MainState);`

  return (
    <div className="docContent">
    <div className='all-text-components apiref'>
      <h1>Getting Started</h1>
      <p className='paragraph'>To install the stable version using npm as your package manager:</p>
      <code className='copySection'>npm install --save radon-js</code>
      <p className='paragraph'>The Radon source code is transpiled to ES2015 to work in any modern browser. You don't need to 
        use Babel or a module bundler to get started with Radon.
      </p>
      <p className='paragraph'>Most likely, you'll also need the React bindings and the developer tools.</p>
      <code className='copySection'>npm install --save react-radon</code>
      <p className='paragraph'>Unlike Radon, React doesn't provide UMD builds, so you will need to use a CommonJS module 
        bundler like Webpack, Parcel, or Rollup to utilize Radon with React.</p>


      <h3 id='initialize-state'>Initialize State</h3>
      <br/>
      <SyntaxHighlighter language='javascript' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={true} style={coy}>{importRadon}</SyntaxHighlighter>
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
      <SyntaxHighlighter language='javascript' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={true} style={coy}>{instantiate}</SyntaxHighlighter>
      <p className='paragraph'>
        To declare variables in state, the method initializeState must be called which takes an object
        as an argument. The variable names and their data should be listed in the object as key-value pairs.
      </p>
      <SyntaxHighlighter language='javascript' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={true} style={coy}>{initializeState}</SyntaxHighlighter>
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
      <SyntaxHighlighter language='javascript' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={true} style={coy}>{initializeModifiers}</SyntaxHighlighter>
      <p className='paragraph'>
        It is important to note that when these modifiers are called from a component, only the payload argument
        must be passed into the function as Radon will fill the 'current' parameter by default.
      </p>
      <SyntaxHighlighter language='jsx' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={true} style={coy}>{buttons}</SyntaxHighlighter>
      <p className='paragraph'>
        Once all StateNodes have been declared, they should be combined in the function combineStateNodes. The
        returned object is known as the silo.
      </p>      
      <SyntaxHighlighter language='javascript' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={true} style={coy}>{combineNodes}</SyntaxHighlighter>
      <p className='paragraph'>
        Learn how to connect the silo object to <Link to={props.url + '/docs/react-guide'}>React.</Link>
      </p>
    </div>
        <div className='pageContents'>
            <ul>
            <p>CONTENTS</p>
                <li className={props.currentContent === 0 ? "currentlyReading" : ""}><Link to={'#initialize-state'}>Initialize State</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default QuickStartComponent;