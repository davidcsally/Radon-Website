import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { foundation } from 'react-syntax-highlighter/styles/hljs';

const DeepDiveComponent = (props) => { 
  let codeSnip =
`import {StateNode} from 'radon';

let rootNode = StateNode("RootNode");
let childNode = StateNode("ChildNode", "RootNode");`;
  return (
    <div className='all-text-components apiref' id='motivation-component'>
      <h1>StateNode</h1>
      <p className='subheaders'>Creates a single node on the Radon state tree.</p>
      <h3>Arguments</h3>
        <p className='paragraph'>
            <ol>
                <li> <code>name</code> <italics>(String):</italics> The name of the node that is  to be created in the state tree.</li>
                <li> <code>parent</code> <italics>(String):</italics> The name of the parent of the node that is being created, leave empty if root. </li>
            </ol>
        </p>
        <h3>Returns</h3>
        <p className='paragraph'>
            (<code>StateNode</code>): An object with methods to define the initial state of the node, along with the modifiers of the node.
        </p>
        <h3>Example</h3>
        <div></div>
        <SyntaxHighlighter language='javascript' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={true} style={foundation}>{codeSnip}</SyntaxHighlighter>
    </div>
  )
}

export default DeepDiveComponent;