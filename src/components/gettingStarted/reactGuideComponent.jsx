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
`class App extends React.Component {
  //React Code
}

export default bindToSilo(App);`;
  const provider = 
`import {render} from 'react-dom';
import {Provider} from 'react-radon';
//Silo from Exported combineNodes
import silo from './localSiloLocation';

render(<Provider silo={silo}>
    <App />
  </Provider>,
   document.getElementById('root'));
`;
  const objectBind = 
`import {bindToSilo, bindObjectToSilo} from 'react-radon';

class App extends React.Component {
  render() {
    let componentArray = this.props.val.objectArray.val.map(elm, i => {
      let ComponentToRender = bindObjectToSilo(ListComponent, i, this.props.val.objectArray);
      return <ComponentToRender />
    });

    return (
      <div>
        {componentArray}
      </div>
    )
  }
}

class ListComponent extends React.Component {
  //React Code
}

export default bindToSilo(App);`;
  const buttons = 
`//---------------combineNodes.js----------------
import {combineNodes, StateNode} from 'radon';

let AppState = new StateNode('AppState');

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
      let BoundComponent = bindObjectToSilo(ListComponent, i, this.props.nameArr);
      return <BoundComponent index={i}/>
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
        After setting up the state tree by following the <Link to={'/quick-start'}>Quick Start Guide</Link>, all of the stateful
        react component must be bound to the tree.  Once bound the react component will be able to access the state of components above
        them in the tree, along with having access to their own state.
      </p>
      <p className='paragraph'>
        Binding components in Radon is as simple as importing the bindToSilo function from React-Radon and applying it to the Component
        to bind. From here React-Radon will use the name of the React component in order to find a SiloNode that maps to it, attaching State
        to the end of the component name.  If the Node isn't found in the Silo an error will be logged in the console, otherwise the node will be
        subscribed to changes to that peice of state.  Additionally whenever the component unmounts it will automatically unsubscribe itself from any
        subscriptions that it had.
      </p>
      <SyntaxHighlighter language='javascript' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={true} style={coy}>{instantiate}</SyntaxHighlighter>
      <hr/>
      <h3 id='provider'>Provider</h3>
      <p className='paragraph'>
        In order to use the React-Radon bind the Silo must be provided to the components from the top of the application.  The provider acts to pass down
        the silo all of the components in the Radon application, making avaliable the subscribe function to allow them to request updates on state changes.
      </p>
      <SyntaxHighlighter language='javascript' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={true} style={coy}>{provider}</SyntaxHighlighter>
      <hr/>
      <h3 id='nested-bind'>Dynamically Binding to Object in the Silo</h3>
      <p className='paragraph'>
        Subscribing on export deals with objects that are created before execution, however Components that are created during execution
        need another way to deal with subscribing to changes in the silo.  This is where object binding comes into play, object binding
        allows for the subscription to a specific index or key value in an array or object.  This allows individual components to watch
        for state changes, decreasing the amount of Components radon has to render after each state change.
      </p>
      <SyntaxHighlighter language='javascript' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={true} style={coy}>{objectBind}</SyntaxHighlighter>
      <hr/>
      <h3 id='react-radon-demo'>Working with Radon State in React</h3>
      <p className='paragraph'>
        Once an Component has been bound to Radon, it will automatically have props that reflect the state that it is subscribed to.  Each 
        peice of state can be accessed by <code className='copySection'>this.props.nameOfStateValue.val</code>, which will be the current state
        value.  Additionally the modifiers are stored in a similar way, being accessed with <code className='copySection'>this.props.nameOfStateValue.nameOfModifier</code>
        allowing the specification of which peice of state is being modified, and by which modifier.
      </p>
      <SyntaxHighlighter language='jsx' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={true} style={coy}>{buttons}</SyntaxHighlighter>
      <p className='paragraph'>
        Learn how to <Link to={props.url + '/docs/nested-objects'}>Add Modifiers</Link> to the silo.
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