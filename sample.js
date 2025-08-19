

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