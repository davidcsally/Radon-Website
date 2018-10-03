import React from 'react';  

const MotivationComponent = (props) => { 
  return (
    <div className='all-text-components' id='motivation-component'>
      <h1 id='motivation-header'>Motivation</h1>
      <h3>Summary</h3>
      <p className='paragraph'>
        When it comes to adopting a state manager for frontend frameworks, considerations for scope are rarely 
        addressed. Popular state managers such as redux and mobx do not address the issue, and yet scope is a 
        ubiquitous concern across all programming languages. Radon is a state manager that was built on the idea 
        that state should be stored in a single source of truth, but also that data should be encapsulated and 
        accessible only to components whose functionality directly correlates to the stored variables.
      </p>
      <p className='paragraph'>
        The implementation of data encapsulation in Radon led to two other key features of the state manager. 
        Radon employs deconstruction of nested objects in state to further privitize individual variables. An 
        immensely useful side effect of object deconstruction is the ability for components to subscribe to 
        particular key/values or indices within objects. Ultimately this specialized subscription eliminates the 
        necessity for all components listening to an object to re-render, and instead for only the component 
        subscribed to a particular index or key/value to re-render.
      </p>
      <p className='paragraph'>
        Lastly, isolating data within Radon allowed for seamless integration of asynchronous state 
        modifications. Radon can natively handle asynchronous modifier functions and will ensure that all 
        state updates to a particular variable will occur in a predictable and orderly manner. 
      </p>
      <h3>Data Encapsulation</h3>
      <p className='paragraph'>
        One of the first goals of Radon was to implement an object oriented state manager capable of data 
        encapsulation. Many state managers allow pieces of state to be accessible by any component or module, 
        and with that access follows modification allowances. This inherently conflicts with a ubiquitous object 
        oriented programming practice: limiting scope. Limiting the scope of a variable or method provides better 
        context for its purpose and makes it easier to reason about. Plus, there's the added bonus of protecting 
        data from being modified by script that has several degrees of separation. Many programming languages have 
        native features to handle data encapsulation such as privatized class attributes and methods. Unfortunately, 
        Javascript doesn't have the same privatization features held by universal languages such as Java and C/C++. 
        Therefore, the data encapsulation feature of Radon needed to be derived by other means.
      </p>
      <p className='paragraph'>
        To understand encapsulation in Radon, it is first important to understand how the data is organized. 
        Radon is built using a tree data structure. Pieces of state are stored in specially designed nodes 
        and are organized in a way that parallels the component tree of many common frontend frameworks such 
        as React or Vue. For example, if a developer created an initial App component that needed access to 
        variables in state, a corresponding AppState node would be created that contained those specific 
        variables and any accompanying modifier functions. Now let's say the App component renders two more 
        components named Navbar and Main. If Navbar were to be stateful, it would need a corresponding node 
        called NavbarState. If the same thing can be said for Main, then it would have a corresponding state 
        node called MainState. If a frontend component is intended to be stateless, then there will be no 
        corresponding state node. So now we can hopefully start to imagine that the App Component is at the 
        top of a component tree (as the root), with NavbarState and MainState branching beneath it. The same 
        can be said for the State Tree. AppState is our root, with NavbarState and MainState branching below.
      </p>
      <p className='paragraph'>
        But what does this mean for data encapsulation? The intention for the State Tree is for state nodes 
        to share their data and modifiers with corresponding frontend components. However, this implementation 
        alone would be too constricting of the data. Therefore, frontend components are not only able to access 
        the data from their corresponding state nodes, but also the data from its parent, grandparent, and any 
        further parent tracing back to the root. Now there's a greater sense of flow that encourages commonly 
        used and shared data to be stored near the root, and specialized data to be stored as leaves on the tree. 
        In sum, frontend components will have access to parental lineage data, but will not have access to their 
        sibling’s or children's data. Thus, varying pieces of state are exposed where they are needed, and hidden 
        where they are not.
      </p>
      <h3>Component Rendering Linked to Objects in State</h3>
      <p className='paragraph'>
        Another feature of Radon intends to remove unnecessary re-rendering that can emerge from modifying 
        objects in state. In other state management systems, modifying a single key/value pair in a plain object 
        or an index in an array will result in a re-render of any component subscribed to the object. The Radon 
        State Tree solves this problem by deconstructing objects into state nodes by index or key/value pairs. 
        The object deconstruction feature allows for direct modification of these indices/pairs and triggers a 
        re-render of only the component listening to that particular data point.
      </p>
      <h3>Asynchronous Modifications to State</h3>
      <p className='paragraph'>
        Modifiers are functions written by the developer that can only modify a single state variable. 
        Developers have the option to create an asynchronous modifier which may seem problematic if multiple 
        modifiers are called in tandem to edit the same piece of state. However, Radon ensures that all state 
        changes, whether asynchronous or synchronous, occur in the order of initial invocation. This is 
        accomplished with an asynchronous queue that awaits the completion of the most recently invoked modifier 
        before progressing to the next. Hence, the developer does not need to worry about conflicting state 
        changes or out of order updates.
      </p>
    </div>
  )
}

export default MotivationComponent;