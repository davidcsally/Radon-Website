import React from 'react';
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/prism-light";
import js from 'react-syntax-highlighter/languages/prism/javascript';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import coy from '../../codeHighlightTheme.js';

registerLanguage('javascript', js);
registerLanguage('jsx', jsx);

const CombineNodesComponent = (props) => {

  const combineNodesExample = 
`import AppState from './AppState';
import NavbarState from './NarbarState';
import MainState from './MainState';

const silo = combineNodes(AppState, NavbarState, MainState);`

    return (
      <div className="docContent">
        <div className='all-text-components apiref'>
            <h1>combineNodes</h1>
            <hr />
            <p className='subheaders'>
              Builds the Silo state tree as a combination of every previously defined StateNode. One StateNode is expected
              to have been initialized without a parent. Every other node is expected to have a parent. Any StateNode with
              a parent that does not exist as a StateNode will not be included in the Silo.
            </p>
            <hr />
            <h3>Arguments</h3>
            <p className='paragraph'>
              <ol>
                <li> <code className='copySection'>...args</code> <italics>(StateNode[]):</italics> A list of every StateNode listed in any order</li>
              </ol>
            </p>
            <hr />
            <h3>Returns</h3>
            <p className='paragraph'>
                (<code className='copySection'>silo</code>): The state tree, ready to be included in a Provider tag
            </p>
            <hr />
            <h3>Example</h3>
            <SyntaxHighlighter language='javascript' lineNumberStyle={{ color: '#A9A9A9', paddingLeft: 5, paddingRight: 5 }} showLineNumbers={true} style={coy}>{combineNodesExample}</SyntaxHighlighter>
        </div>
        <div className='pageContents'>
            <ul>
            <p>CONTENTS</p>
                <li className={props.currentContent === 0 ? "currentlyReading" : ""}>Arguments</li>
                <li className={props.currentContent === 1 ? "currentlyReading" : ""}>Returns</li>
                <li className={props.currentContent === 2 ? "currentlyReading" : ""}>Example</li>
            </ul>
        </div>
      </div>
    )
}

export default CombineNodesComponent;