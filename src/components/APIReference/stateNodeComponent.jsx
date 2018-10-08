import React from 'react';
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/prism-light";
import js from 'react-syntax-highlighter/languages/prism/javascript';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import coy from '../../codeHighlightTheme.js';
import { Link } from 'react-router-dom';

registerLanguage('javascript', js);
registerLanguage('jsx', jsx);

const StateNodeComponent = (props) => {
    const codeSnip =
        `import {StateNode} from 'radon';

const rootNode = new StateNode("RootNode");
rootNode.initializeState({
    todoList: [],
    itemsTodo:0
});

rootNode.initializeModifiers({
    todoList: {
        addTodo: (current, payload) => {
            const arrCopy = current.slice();
            arrCopy.push(payload);
            return arrCopy;
        },
        finishTodo: (current, index, payload) => {
            return {...current, finished: true};
        }
    },
    itemsTodo: {
        incrementItemsTodo: (current) => {
            return current + 1;
        },
        decrementItemsTodo: (current) => {
            return current - 1;
        }
    }
});

const childNode = new StateNode("ChildNode", "RootNode");`;

    return (
        <div className="docContent">
        <div className='all-text-components apiref'>
            <h1>StateNode</h1>
            <hr />
            <p className='subheaders'>Creates a single node on the Radon state tree.  Each of these Nodes have their own set of variables that they keep track of, 
                along with a set of modifier which are able to update the values the node holds.</p>
            <hr />
            <h3 id='arguments'>Arguments</h3>
            <p className='paragraph'>
                <ol>
                    <li> <code className='copySection'>name</code> <italics>(String):</italics> The name of the node that is  to be created in the state tree.</li>
                    <li> <code className='copySection'>parent</code> <italics>(String):</italics> The name of the parent of the node that is being created, leave empty if root. </li>
                </ol>
            </p>
            <hr />
            <h3 id='returns'>Returns</h3>
            <p className='paragraph'>
                (<code className='copySection'>StateNode</code>): An object with methods to define the initial state of the node, along with the modifiers of the node.
        </p>
            <hr />
            <h3 id='example'>Example</h3>
            <SyntaxHighlighter language='javascript' lineNumberStyle={{ color: '#A9A9A9', paddingLeft: 5, paddingRight: 5 }} showLineNumbers={true} style={coy}>{codeSnip}</SyntaxHighlighter>
        </div>
        <div className='pageContents'>
            <ul>
            <p>CONTENTS</p>
                <li className={props.currentContent === 0 ? "currentlyReading" : ""}><Link to={'#argument'}>Arguments</Link></li>
                <li className={props.currentContent === 1 ? "currentlyReading" : ""}><Link to={'#returns'}>Returns</Link></li>
                <li className={props.currentContent === 2 ? "currentlyReading" : ""}><Link to={'#example'}>Example</Link></li>
            </ul>
        </div>
        </div>
    )
}

export default StateNodeComponent;