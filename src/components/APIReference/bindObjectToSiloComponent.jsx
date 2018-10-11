import React from 'react';
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/prism-light";
import js from 'react-syntax-highlighter/languages/prism/javascript';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import coy from '../../codeHighlightTheme.js';
import {Link} from 'react-router-dom';

registerLanguage('javascript', js);
registerLanguage('jsx', jsx);

const BindObjectToSilo = (props) => {

  const bindToSiloEx = 
`import {bindToSilo, bindObjectToSilo} from 'react-radon';

class App extends React.Component {
  render() {
    let compArray = this.props.objArray.val.map(elm, i => {
      let NewComp = bindObjectToSilo(ListComp, i, this.props.val.objArray);
      return <NewComp />
    });

    return (
      <div>
        {componentArray}
      </div>
    )
  }
}

class ListComp extends React.Component {
  //React Code
}

export default bindToSilo(App);`;

  return (
    <div className="docContent">
      <div className='all-text-components apiref'>
          <h1>bindObjectToSilo</h1>
          <hr />
          <p className='subheaders'>
            Connects a React component to the Silo. It does not modify the component but instead returns
            a new component that has state accessible through props.
          </p>
          <p className='subheaders'>
            The method bindToSiloObject should only be wrapped around components intended to
            subscribe to indices of an array or key/value pairs of an object.
          </p>
          <hr />
          <h3 id='arguments'>Arguments</h3>
          <p className='paragraph'>
            <ol>
              <li> <code className='copySection'>component</code> <italics>(React Component): </italics>Wraps a React component with another React component to pass down state as props</li>
              <li> <code className='copySection'>i</code> <italics>(index): </italics>The target index of an array or key of an object</li>
              <li> <code className='copySection'>object</code> <italics>(object): </italics>The object containing the subscribed index</li>
            </ol>
          </p>
          <hr />
          <h3 id='returns'>Returns</h3>
          <p className='paragraph'>
              (<code className='copySection'>React Component</code>): A React Component with state accessible via props
          </p>
          <hr />
          <h3 id='example'>Example</h3>
          <SyntaxHighlighter language='javascript' lineNumberStyle={{ color: '#A9A9A9', paddingLeft: 5, paddingRight: 5 }} showLineNumbers={true} style={coy}>{bindToSiloEx}</SyntaxHighlighter>
      </div>
      <div className='pageContents'>
          <ul>
          <p>CONTENTS</p>
            <li className={props.currentContent === 0 ? "currentlyReading" : ""}><Link to={'#arguments'}>Arguments</Link></li>
            <li className={props.currentContent === 1 ? "currentlyReading" : ""}><Link to={'#returns'}>Returns</Link></li>
            <li className={props.currentContent === 2 ? "currentlyReading" : ""}><Link to={'#example'}>Example</Link></li>
          </ul>
      </div>
    </div>
  )
}

export default BindObjectToSilo;