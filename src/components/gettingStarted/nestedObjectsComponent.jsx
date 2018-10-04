import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { foundation } from 'react-syntax-highlighter/styles/hljs';

const NestedObjectsComponent = (props) => {

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
    const otherInitializaModifiers = 
  `AppState.initializeModifiers({
    arrayOfNames: {
      addNameToArray: (current, payload) => {
        current.push(payload);
        return current;
      },
      updateAName: (current, index, payload) => {
        return payload;
      }
    }
  })`
    const anotherButton =
  `<button onClick={() => updateAName(0, 'Hannah')}>Edit an Index!</button>`
    const initializeState = 
  `AppState.initializeState({
    nestedObj: [
      {
        first: 'Rick',
        last: 'Sanchez'
      },
      {
        first: 'Morty',
        last: 'Smith'
      }
    ]
  });`

  return (
    <div className='all-text-components'>
      <h1>Adding Modifiers to State</h1>
      <h3 className='subheaders'>Adding Modifiers to Primitives</h3>
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
      <h3 className='subheaders'>Adding Modifiers to Objects</h3>
      <p className='paragraph'>
        The second modifier type is what helps Radon eliminate unnecessary re-rendering of frontend components.
        This modifier type accepts three arguments and is used exclusively with objects.
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
      <SyntaxHighlighter codeTagProps={{className: 'spacingWithSH'}} language='javascript' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={false} style={foundation}>{anotherButton}</SyntaxHighlighter>
      <h3 className='subheaders'>Adding Modifiers to Nested Objects</h3>
      <p className='paragraph'>
        It is possible to add modifiers to deelpy nested objects, although it will take a more specialized index.
        Deeply nested, deconstructed objects are stored in the silo via an address that is a combination of keys
        and/or indices.
      </p>
      <SyntaxHighlighter codeTagProps={{className: 'spacingWithSH'}} language='javascript' lineNumberStyle={{color: '#A9A9A9', paddingLeft: 5, paddingRight: 5}} showLineNumbers={false} style={foundation}>{initializeState}</SyntaxHighlighter>
      <p className='paragraph'>
        If we choose to store 
      </p>
    </div>
  )
}

export default NestedObjectsComponent;