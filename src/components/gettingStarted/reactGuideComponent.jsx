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
`import { bindToSilo } from 'react-radon';`;
  const instantiate = 
`import React from 'react';
import { bindToSilo } from 'react-radon';

class App extends React.Component {
  //React Code
}

export default bindToSilo(App);`;
  const provider = 
`import {render} from 'react-dom';
import {Provider} from 'react-radon';
// Silo from Exported combineNodes
import silo from './localSiloLocation';

render(<Provider silo={silo}>
    <App />
  </Provider>,
  document.getElementById('root'));
`;
  const objectBind = 
`import React from 'react';
import {bindToSilo, bindObjectToSilo} from 'react-radon';
import ListComp from './components/ListComp';

class App extends React.Component {
  render() {
    const componentArray = this.props.objectArray.val.map((elm, i) => {
      const Comp = bindObjectToSilo(ListComp, i, this.props.objectArray.val);
      return <Comp />
    });

    return (
      <div>
        {componentArray}
      </div>
    )
  }
}

export default bindToSilo(App);`;
  const buttons = 
`//---------------combineNodes.js----------------

import {combineNodes, StateNode} from 'radon';

const AppState = new StateNode('AppState');

AppState.initializeState({
  nameArr: ['Rick', 'Morty', 'Summer'];
});

AppState.initializeModifiers({
  nameArr: {
    updateName: (current, index, payload) => {
      return payload;
    }
  }
});

export default combineNodes(AppState);

//---------------index.js----------------

import {render} from 'react-dom';
import {Provider} from 'react-radon';
import App from './App.jsx';
import silo from './combineNodes.js';

render(<Provider silo={silo}>
    <App/>
  </Provider>,
  document.getElementById('root'));

//---------------App.jsx----------------

import React from 'react';
import {bindToSilo, bindObjectToSilo} from 'react-radon';

class App extends React.Component {
  render() {
    let componentsToRender = this.props.nameArr.map(elm, i => {
      let BoundComp = bindObjectToSilo(ListComponent, i, this.props.nameArr);
      return <BoundComp index={i}/>
    });

    return (
      <div>
        {componentsToRender}
      </div>
    );
  }
}

class ListComponent extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.nameArr[this.props.index]}</p>
      </div>
    );
  }
}

export default bindToSilo(App);`;

  return (
    <div className="docContent">
    <div className='all-text-components apiref'>
      <h1>React Guide</h1>
      <p className='paragraph'>To install the stable version using npm as your package manager:</p>
      <code className='copySection'>npm install --save react-radon</code>
      <p className='paragraph'>The React Radon source code is transpiled to ES2015 to work in any modern browser. You don't need to 
        use Babel or a module bundler to get started with Radon.
      </p>
      <p className='paragraph'>Unlike Radon, React doesn't provide UMD builds, so you will need to use a CommonJS module 
        bundler like Webpack, Parcel, or Rollup to utilize Radon with React.</p>

      <hr/>
      <h3 id='bind'>Binding React Components to a State Node</h3>
      <br />
      <SyntaxHighlighter language='javascript' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={true} style={coy}>{importRadon}</SyntaxHighlighter>
      <p className='paragraph'>
        After setting up the state tree by following the {/*<Link to={'docs/quick-start'}>Quick Start Guide</Link>,*/} 
        Quick Start Guide, all of the stateful React components will be bound to the state tree. Once bound, the React 
        components will be able to access the state of all parent components tracing back to the root.
      </p>
      <p className='paragraph'>
        Binding components in Radon is as simple as importing the bindToSilo method from React-Radon and passing a single
        React component as a parameter. The bindToSilo methed will then use the name of the React component to find a 
        corresponding State Node. If the Node isn't found in the Silo an error will be logged in the console but the thread
        of execution will not break. If a Node is found, the component will be subscribed to changes to that piece of state.  
        Additionally, whenever the component unmounts it will automatically unsubscribe itself from previous subscriptions.
      </p>
      <SyntaxHighlighter language='javascript' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={true} style={coy}>{instantiate}</SyntaxHighlighter>
      <hr/>
      <h3 id='provider'>Provider</h3>
      <p className='paragraph'>
        In order to use the bindToSilo method, the Silo must be passed to the components from the top of the application. 
        The provider tag passes down the Silo as props and authorizes components to subscribe to pieces of state. 
      </p>
      <SyntaxHighlighter language='javascript' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={true} style={coy}>{provider}</SyntaxHighlighter>
      <hr/>
      <h3 id='nested-bind'>Dynamically Binding to Objects in the Silo</h3>
      <p className='paragraph'>
        If a React Component relies on a state object value/index to render, it cannot use the bindToSilo method to subscribe 
        to state. Instead it must use object binding. Object binding allows for the subscription to a specific 
        index or key value in an array or object. Object binding allows components to watch for object specific state changes, 
        thereby decreasing the number of components Radon has to render after each state change.
      </p>
      <SyntaxHighlighter language='javascript' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={true} style={coy}>{objectBind}</SyntaxHighlighter>
      <hr/>
      <h3 id='react-radon-demo'>Working with State in React</h3>
      <p className='paragraph'>
        Once a component has been bound to Radon, it will automatically have props that reflect the state it is subscribed to. Each 
        piece of state can be accessed by <code className='copySection'>this.props.nameOfStateValue.val</code>, which will be the current state
        value. The modifiers are stored similarly and are accessible via <code className='copySection'>this.props.nameOfStateValue.nameOfModifier</code>.
      </p>
      <SyntaxHighlighter language='jsx' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={true} style={coy}>{buttons}</SyntaxHighlighter>
      <p className='paragraph'>
        {/* Learn how to <Link to={props.url + '/docs/nested-objects'}>Add Modifiers</Link> to the silo. */}
      </p>
    </div>
        <div className='pageContents'>
            <ul>
            <p>CONTENTS</p>
                <li className={props.currentContent === 0 ? "currentlyReading" : ""}><Link to={'#bind'}>Component Binding</Link></li>
                <li className={props.currentContent === 1 ? "currentlyReading" : ""}><Link to={'#provider'}>Provider</Link></li>
                <li className={props.currentContent === 2 ? "currentlyReading" : ""}><Link to={'#nested-bind'}>Nested Component Bind</Link></li>
                <li className={props.currentContent === 3 ? "currentlyReading" : ""}><Link to={'#react-radon-demo'}>React-Radon Demo</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default QuickStartComponent;