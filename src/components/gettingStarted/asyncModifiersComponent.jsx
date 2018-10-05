import React from 'react';
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/prism-light";
// import prism from 'react-syntax-highlighter/styles/prism/prism'; 
import coy from '../../codeHighlightTheme.js';

const AsyncModifiersComponent = () => {

  const promise =
`AppState.initializeModifiers({
  name: {
    getName: (current, payload) => {
      return new Promise((resolve, reject) => {
        fetch('/getName')
        .then(data => data.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
      })
    }
  }
})`

  const asyncawait = 
  `AppState.initializeModifiers({
    name: {
      getName: async (current, payload) => {
        let data = await fetch('/getName');
        data = await data.json();
        return data;
      }
    }
  })`

  return (
    <div className='all-text-components'>
      <h1>Asynchronous Modifiers</h1>
      <p className='paragraph'>
        Radon was built to handle asynchronous modifiers natively. Every variable in state, regardless
        of type, has it's own asynchronous queue. The queue keeps track of which modifiers have been called on the
        data, and enforces the modifiers execute in the order they were invoked. The async queue asserts predictability
        of state, and eliminates any potential conflicting state updates. 
      </p>
      <h3 className='subheaders'>Promises</h3>
      <p className='paragraph'>
        There are two ways of creating an asynchronous modifier. The first method involves returning a Promise. 
        Using a Promise in a modifier necessitates that the updated state value be passed into the resolve function of
        the promise. Otherwise, the silo will not be aware of the intended state change.
      </p>
      <SyntaxHighlighter language='javascript' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={true} style={coy}>{promise}</SyntaxHighlighter>
      <h3 className='subheaders'>Async/Await</h3>
      <p className='paragraph'>
        The second method involves using async/await syntax. The modifier must be labeled as an async function. Any
        internal async functions can be awaited, and there are no limits to the number of awaits that can be 
        included in the modifier. As long as the intended state change is returned at the end of the async function,
        the async queue will update that particular state with the new value. 
      </p>
      <SyntaxHighlighter language='javascript' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={true} style={coy}>{asyncawait}</SyntaxHighlighter>
    </div>
  )
}

export default AsyncModifiersComponent;