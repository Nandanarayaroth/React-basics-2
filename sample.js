

//                       ****REACT JS****
// *) react    is a open source javascript library it is not a framework it is a library
// *) focus on UI    
// *) rich echosystem
// *) created and maintained by facebook 
// 
// *) React is a component based architecture
// *) component make the reusable code
// *) react is declarative
// *) React will handle efficiently updating and rendering of the component
// *) DOM updates are handles gracefully in react
// *) react native for mobile application

// ##ROOT(APP)Component## react uses different components one for header, main content,sidenav and footer  but all component are includes in a single component is known as Root(App)  Component
// component is basically a code inside .js file
// <------ Component Types ------>
// 1) Stateless functional Component
//  they are just javascript functions
// they can optionally recive properties as props and recives html(JSX)that describes the UI
// simple functions 
// use functional components as much as possible
// Absence of "this" keyword
// solution without using state
// Mainly resposible for the UI
// Stateless/Dumb/Presentational

//2) Stateful class Component
// class extending component class render method returning HTML
// also can optionaly can recive props as property and HTML(JSX)as output
// More feature rich
// Maintain their own private data as state
// Complex UI logic
// Provide lifecucle hooks

// <----JSX------>
// Javascipt XML(JSX) - Extension to the Javascript language syntax.
// Write XML-like code for elements and components
// JSX tags have a tag name,attributes,and children.
// JSX is not a neccessity to write React applications
// JSX makes your react code simpler and elegant.
// JSX ultimately transilate to pure javascript which is understood by the browsers.
// in JSX className is used for class, htmlFor used for for
// camelCase property in naming convention, used onClick for onclick, tabIndex for tabindex 
//  eg on hello.js   
// eg2 on greetin.js and  welcome.js

// <----props vs state----->
// 1) props
// props get passed to the component
// function parameter
// props are immutable -> can't be change value of props
// props - used in functional Components
// this.props - used in class components

// 2) state
// state is managed within the component
// it is a Variable declered in the function body
// state is mmutable -> can be change the value of state by using setstate
// useState Hook - used in functional Components
// this.state - class Components

// <---setState---->
// always make use of setState and never modify the state directly.
// Code has to be executed after the state has been updated ? Place that code in the call back funtion which is second argument to the setState method.
// When you have to update state based on the previous state value, pass in a function as an argument instead of the regular object.

// <--- destructring---->
// eg greet.js and welcome.js

// <---events---->
//eg FunctionalClick and ClassClick

// <-----binding event handler--->
// there are mainly four different way to bind 
// 1,by using bind keyword in render method, but it have some implication problems so not recommented
// 2, by using arrow function in render method, it also have some implication problems so not recommented
// 3, binding in contructor , this is offical method recommented
// 4, arrow function as class property , new method also recommented
// eg Eventbind

//<--- passing props to child--->
// eg: ParentComponent & ChildComponent

// <--- Conditional Rendering---->
// if/else
// Element variables
// Ternanary conditional operator
// Short circuit operator
// eg on UserGreeting
// conditonal operations are implemented in the render beause it is not valid inside the jsx

// <----Map Method----->
// eg on NameList
//            
//<------key---------->
// A key is a special string attribute you need to include when creating lists of elements. 
// keys give the elements a stable identity.  
// keys help react identify which items have changed, are added, or are removed. 
// Help in efficient update of the user interface
// eg on NameList
// when to use index as a key?
// ->1. the item in your list do not have a unique id.
// ->2. the list is a static list and will not change.
// ->3. the list will never be recordered or filtered.

// <--- styling---->
// 1.Regular css stylesheets     eg on Stylesheet
// 2.Inline styling             eg on Inline
// 3.css Moudles                eg on appStyles.modules.css and appStyles.css
// 4.css in js librearies(styled component)
// 

// <----forms in react & controlled Components----->
// in regular html the elements like input , textarea  etc are responsible on to handler the user input and update the respcetive values but in react want to contrll that such form elements such values is controlled by react is called controlled components
// eg on Forms.js

// <----lifecycle Methods---->
//  we can mainly classifed this methiod into four 
// 1, Mounting, 2, Updating, 3,unmounting, 4,Error Handling
// 1) MOUNTING  :-> When an instance of a component is being created and inserted into the DOM
// construcotr,static getDerivedStateFromProps, render and componentDIdMount
// methods of mounting explanations->eg: LifecycleM.js
//      [1]-> constructore(props)<-
// * A special function that will get called whenever a new compinent is created. 
// * Initalized state BInding the event handlers
// * Do not cause side effects. Ex:it will never make HTTP requests with in the constructor
// * super(props) Directly overwrite this.state

//      [2] -> static getDerivedStatedFromProps(props,state)<-
// * This method is used When the state of the component depends on changes in props over time such senarious we can use Set the state
// * Do not cause side effects. EX:HTTP requests

//      [3] -> render()
// * It is the only required method in class component
// * Red props & state and return JSX
// * Do not change state or interact with DOM or make ajax calls.
// * Children components lifecycle methods are also executed.

//      [4] -> componentDidMount()
// * Invoked immediatly after a component and all its children components have been rendered to the DOM
// * Cause side effects. Ex: Interact with the DOM or perform any ajax calls to load data.
// * 

// 2) Updating :-> When a component is being re-rendered as a result of changes to either its props or state
// static getDerivedStaticFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate and componentDidUpdate
//      [1]-> static getDerivedStateFromProps(props,state)
// * Method is called every time a component is re-rendered
// * set the state
//      [2]-> shouldComponentUpdate(nextProps, nextState)
// * Dictates if the component should re-render or not
// * Performance optimization
// * Do not cause side effects. Ex: HTTP requests calling the setState method
//      [3]-> render()
// * Only required method
// * Read props & state and return JSX
// * Do not change state or interact with DOM or make ajax calls.
//      [4]->getSnapshotBeforeUpdate(prevProps, prevState)
// * Called right before the changes from the virtual DOM are to be reflected in the DOM
// * Capture some information from the DOM
// * Method will either return null or return a value. Return value will be passed as third parameter to the next method.
//      [4]->componentDidUpdate(prevProps, prevState, snapshot)
// * Called after the render is finished in the re-render cycles
// * Cause side effects

// 3)Unmaounting :-> When a component is being removed from the DOM
// componentWillUnmount
//      [1]->componentWillUnmount()
// * Method is invoked immediately before a component is unmounted and destroyed.
// * Cancelling any network request,removing event handlers, cancelling any subscriptions ans also invalidating timers.
// * Do not call the setState method.

// 4)Error Handling :-> When there is an error during rendering, in a lifecycle method, or in the constructor of any child component
// static getDerivedStateFromError and componentDidCatch


//<---React Fragments--->
//Fragments basically gruop of list of children without adding extra node into the DOM

// <---PureComponent--->
// * A pure component on the other hand implements shouldComponentUpdate with a shallow props ans state comparison.
// * A pure component implments shuldComponentupdate with a shallow props and state comparison.
//  shallow comparison with prevState with currentState 
// shallow comparison with prevProps with currentProps
//  eg: PureComponent.js
// We can create a component by extending the PureComponent class
// A PureComponent implements the shouldComponentUpdate lifecycyle method by performing a shallow comparison on the props and state of the component.
// If there is no difference, the component is not re-rendered-performance boost.
// It is a good idea to ensure that all the children components are also pure to avoid unexpected behaviour.
// Pure component is class based component
// it helps optimize performance by changing unnecessary re-renders when the props and state have not changed.

// <---RegularComponent--->
// * A regular component does not implement the shouldComponentUpdate method. It always returns the by default.
//  eg: RegComp.js

// <---Shallow comparison (sc)
// it is mainly based on two primitive types and complex types
// 1) Primitive type
//  # A shallow comparison between a and b it returns if a and b have the same value and are of the same type
//  EX: string 'Vishwas' and 'Vishwas' retuns true
// 2) Complex Types
//  # A shallow comparison between a and b it returns true if a and b reference the exact same object.
// EX1:  var a = [1,2,3]  
//  var b =[1,,2,3]
//  var c = a
//  var ab_eq = (a===b); -> false
// var ac-eq = (a===c); -> true

// EX2:  var a = { x: 1, y: 2}
//  var b = { x: 1, y: 2}
// var c = a
// var ab_eq = ( a=== b) -> false
// var ac_eq = ( a=== c) -> true
                                             
//  <---Memo--->
// memo is functional based component by preventing unnecessary re-renders.it fworks similarly to the purecomponent but it for functional component.
// If the props do not change then react skips re-rendering of that component
// it is priimarily used for performance optimiztion.

// <---refs---->
//  refs make to acces DOM node directly                            
//  We can create refs mainly two methods first one createrefs, the second one is callback refs
//  in callbackrefs there are four steps
//  1) i this method creating a property and assiging value as null eg: this.cbRef = null
//  2) we crate a method that will assingn the DOM element to ref
//  3) add it into the input tag
//  4) rearragin componentDidMount method
//  in this method we didn't want to make current and foucs
//  eg: on RegsDemo.js
  
// <---Forwarding refs--->
// ref forwarding is a technique that automatically a ref through a component to one of its children
//  It is only appplicable in functional Component
// eg: on FRParentInput.js and FRinput.js

// <---Portals---->
//  React Portals are a way to render a component's children into a DOM node that exists outside the parent component's DOM hierarchy. 