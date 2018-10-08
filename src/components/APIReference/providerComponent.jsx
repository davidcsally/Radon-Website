import React from 'react';
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/prism-light";
import js from 'react-syntax-highlighter/languages/prism/javascript';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import coy from '../../codeHighlightTheme.js';
import { Link } from 'react-router-dom';

registerLanguage('javascript', js);
registerLanguage('jsx', jsx);

const ProviderComponent = (props) => {

  const provider = 
`import ReactDom from 'react-dom';
import AppState from './AppState';
import NavbarState from './NarbarState';
import MainState from './MainState';

const silo = combineNodes(AppState, NavbarState, MainState);

ReactDOM.render(
  <Provider silo={silo}>
    <App />
  </Provider>,
  root
)`

  return (
    <div className="docContent">
      <div className='all-text-components apiref'>
        <h1>Provider</h1>
        <hr />
        <p className='subheaders'>
          Makes the Radon silo available to components via the bindToSilo method. Provider should be used
          as the top level component, surrounding App.
        </p>
        <hr />
        <h3 id='props'>Props</h3>
        <p className='paragraph'>
          <ol>
            <li> <code className='copySection'>silo</code> <italics>(Radon silo):</italics>The source of state in your application.</li>
            <li> <code className='copySection'>children</code> <italics>(React Component):</italics>The root of your component tree</li>
          </ol>
        </p>
        <hr />
        <h3 id='example'>Example</h3>
        <SyntaxHighlighter language='javascript' lineNumberStyle={{ color: '#A9A9A9', paddingLeft: 5, paddingRight: 5 }} showLineNumbers={true} style={coy}>{provider}</SyntaxHighlighter>
      </div>
      <div className='pageContents'>
        <ul>
        <p>CONTENTS</p>
          <li className={props.currentContent === 0 ? "currentlyReading" : ""}><Link to={'#props'}>Props</Link></li>
          <li className={props.currentContent === 1 ? "currentlyReading" : ""}><Link to={'#example'}>Example</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default ProviderComponent;