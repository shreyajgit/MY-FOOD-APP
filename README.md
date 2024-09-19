# Design of Whole Webpage :
// - Header
//     ~ Logo
//     ~ Nav Items
// - Body 
//     ~ Search
//     ~ RestaurantContainer
//         ~ RestaurantCard
//               ~ img
//                ~ Name of Restros, Star  Rating, cuisine, delivery time
// - Footer
//     ~ Copyright
//     ~ Links 
//     ~ Address 
//     ~ Contact


# Parcel is a bundler.

# Props ->

Passing prop to a component is just like passing an argument to a function.

Prop is used pass data dynamically to a component, we pass it as a prop 
eg -> yahan restaurant-cards were many in number , so to change the details in each of it dynamically , we will use props. 

Props is basically passing properties to the component 
Props always come from parents to their children.

# Conflict-driven User Interface(UI) - 
it means our website is driver by data or conflicts - controlling your UI using data - means API changes according to the location and uske hisab se data will be shown on the website - 
eg: In swiggy app , whatever offers are shown in Delhi , it may not be the same for Mumbai , so this interface keeps changing according to the API of the data i.e caraousal data or conflict according to the location , this is known as conflict-driven UI 

Also , if we want to change background according to the location , i.e blue in delhi , red in banglore etc , this can also be done using conflicft-driven UI , by passing this information in that API as a conflict , and this conflict will drive the UI.  



# info 
Here, {resData.info.cuisines.join(", ")}
cuisines is an array , and to seperate the values of array with an comma , we used .join(", ")




# V.V IMP
WHENEVER U R DOING .map or WHENEVER U R LOOPING ONTO ANYTHING , U ALWAYS HAVE TO GIVE A KEY WHICH IS UNIQUE. 
WHY? bcoz if a new restro card is introduced then react will not be able to recognise the new card and so it will re-render all the cards again , but if we give a key , then it will render only 1 card which is new

i.e 
resList.map(restaurant => (<RestaurantCard key={restaurant.info.id} resData={restaurant} /> ))
here, id of every restaurant is unique , hence given the key
key is -> key={restaurant.info.id}

We can also use index as the key here , i.e 1,2,3,4
eg: resList.map((restaurant, index) => (<RestaurantCard key={index} resData={restaurant} /> ))
BUT, React says that , NEVER USE INDEX as the KEY.

not using keys (not acceptable) <<<< index as key <<<<<<<< unique id (best practice)


# Never list the hard-coated data or hard-coated stringsin your components' file
eg -> API we used for restaurant card
therefore, keep it in the folder name as utils (name is our choice )


# Two types of Exports/Import 
- Default Export/Import
   export default Component;
   import Component from "path";

- Named Export/Import
  export const Component;
  import {Component} from "path";

# NOTE
we can not write export default CDN_URL; twice , suppose if we are writing another link here , then in that case 
# to export multiple things we use named exports 
 for it , just write export in front of ur variable (const)
 
 now to import for named export , there is a slight change 
 do :
 import { CDN_URL } from "../utils/constants";
i.e write curly braces



# WHY REACT IS FAST?
Bcoz it can do faster and efficient DOM manipulation.



# React Hooks
- They are Normal JS utility function.
- Facebook developer wrote this inside inside node_modules.

# Two important types of Hooks :
# (1) useState() 
- used to generate Superpowerful State Variables in react, i.e it is used to create state variables. It is called state variable bcoz it maintains the state of our component.
- The scope of this variable is inside the respective function.
- First of all to use it , we have to first import it as a NAMED IMPORT. 
eg -> import { useState } from "react";

# How to create a State Variable.
- Create a variable 
eg -> const [res, setres] = useState(); 
we recieve useState inside an array , i.e [ ]

here, setres is a function which will update res,i.e it re-renders, this is feature of hook 

# (2) useEffect()
- comes from the react library.
- it also also imported as the named import like useState()
- 2 arguments pass into useEffect , first arg is an arrow function which is an callback function and second arg is a dependency array.
i.e useEffect(()=>{
   console.log("hi");
}, [])
# When will this useEffect's  callback function be called?
- This callback function will be called after your components renders.

# Properties of useEffect()
- if no dependency (i.e [] after comma) array then useEffect is called on every render.
- if the dependency array is empty = [] then useEffect is called on intial render i.e just once.
- if dependency array have any value like [btnNameReact] => called everytime btnNameReact is updated.

# (3) useParams()
- In React Router, parameters (often referred to as params) are dynamic parts of the URL that can change and are set to a specific value when a particular route is matched. They help capture values from the URL, which can then be used to extract the ID and further personalize or specify what to render in a particular view.

# HOOK - Whenever a state variable updates, React re-renders the component.
- Hook is normal js function which react gives us. It has its own specific use case where we use these functions.
* logic of updating UI is called re-rendering. 
- Hooks can only be called inside the body of the functional component. 
- It should be called on the top inside the component.
- Never create state variable inside if else i.e inside a condition, for loops and functions as it can create inconsistency in the code.
- Whenever a function starts with "use", it means it is a hook;



# Updating normal Variables
-  let list = [];
   list = ["Abc"]; 

-  const list = [];
   list.push("Abc");

# Updating State Variable 
const [res, setRes] = useState(["ABC]);
 setres([]);
 this will make "res" empty




# React Algorithm 
React can efficiently find out the difference between virtual DOMs and update the UI.

# Why React is fast?
- Bcoz it have virtual DOM.
- It has Diff Algorithm which is very efficient.
- It can do Efficient DOM Manipulation.
- It can find out the Diff and update the UI.


it is same 
const arr = useState(resList);
const [list, setList] = arr;
as it
const [res, setRes] = useState(resList);
it is destructuring 


# Read this documentation as this is very important topic :-
https://github.com/acdlite/react-fiber-architecture?tab=readme-ov-file#review


# MONOLITH

# MICROSERVICES

# Separation of consults
- we have different projects for each services ( services like backend, UI, DB, Authentication etc)
It follows single responsibility principle - means each and every services has it's own job. 

* On different port (port , eg: localhost:1234, here :1234 is the port) , we can deploy different services.
* All these domain mapped to domain name.
* All the services are connected and interact to each other.



# THERE ARE TWO WAYS TO FETCH THE API DIRECTLY. 
1) As the Webpage loads , API is called , and then rendered. Therefore suppose if the API takes 500ms to get called , so our site will be blank till that time, after 500ms we will get to see contents.
#   LOADS -> API -> RENDER

2) As the Webpage loads , it is rendered , then the API is called , and then data is rendered onto the webpage.
#  LOADS -> RENDER -> API -> RE-RENDER

In react, we will always use 2nd approach as this is the better approach and this gives us a better UX.

# React has one of the best render mechanism. It's render cycle is very fast.



# Conditional Rendering 
Rendering on the basis of condition.


# Whenever State Variables update, react triggers a reconciliation cycle (re-renders the component). 


# Children Routes 
- if we go to any other page like about , contact then our header will be intact , only body will change.


# ReactRouterDOM
- Very important and powerful.
- LINK -> it is a superpower given by react which creates link to go to another page. It will not reload the page after clicking.
eg -> <link to="/contact" > Contact Us</link> 
- Anchor tag reloads the whole page 
- Link does not reload the whole page , it only refreshes the component.
- But behind the scene , Link is using anchor tag 
# i.e Link is a wrapper over anchor tag.
- React-router-dom keeps a track of Link.




# 2 types Routing in web apps
- Client Side Routing -> Link wala is server side routing, components are already loaded.  
So, it is a single page application.
- Server Side Routing -> if we have .html page when we click on anchor tag , it makes a network call, gets the data from the network (AboutUs.html), renders on the UI , refreshes the whole page.



# Note
- A functional Component is basically a function which returns some peice of jsx.
- A Class Based Component is a class which extend React.Component and it has a render method that returns some peice of jsx. Now this jsx is converted into the html and then rendered in the webpage. 
- React.Component is a class which is there inside react package.


# Q -> 
why do we have to always write super props and this in class component react?


# Loading a Class Based Components on our webpage means we are creating an instance of that class. The First thing when the class loads is a constructor is called. Then secondly , render is called.
Class loading means an instance is created of that class.
- So , when the class is instanciated then first the Constructor is called then the rendered is called.



# Lifecycle of React Class Based Component:
Look at About page and then UserClass Page , both are connected and UserClass is the child of the parent, About
Therefore, first parent constructor is called then parent render , then child constructor and child render.


# ComponentDidMount - One more very important method of Class based Components. 
- When this component is loaded , first the constructor is called then rendered method is called. Once this Constructor or Class-Based Component is mounted onto the DOM, then this ComponentDidMount is called.
i.e First Constructor is called then the rendered method is called then React updates the DOM , once the DOM is updated then ComponentDidMount is called. and that is why ComponentDidMount is the best place to call the API.

# There are two types of Phases - 
* Render Phase : Constructor and Render phase. Everything happens in Virtual DOM. This phase is very fast.
* Commit Phase : React actually updates the DOM and then ComponentDidMount is called. This phase takes time.

Virtual DOM is fast bcoz it is a javascript and deals with object.

# Life cycle of Parent-Child Relationship
First Parent Constructor is called then Parent Render , then Child lifecycle will be triggered , after it's completion , Parent Mount will be called.
Therefore series is - 
* Parent Constructor
* Parent Render
* Child Constructor
* Child Render
* Child Component Did Mount
* Parent Component Did Mount

# Use Case of ComponentDidMount
- ComponentDidMount is used to make API calls.
Why?
 bcoz we want to quickly first render the data and then make API call and then fill the data i.e re-render the component.

# If there is multiple Child, then the lifecycle would be:
* Parent Constructor
* Parent Render

* First Child Constructor
* First Child Render

* Second Child Constructor
* Second Child Render

<DOM UPDATED - IN SINGLE BATCH>
* First Child Component Did Mount
* Second Child Component Did Mount

* Parent Component Did Mount

React batches the render phase, all the child components are rendered, then the commit happens, then DOM happens , updating the DOM is expensive. These all are the reason why React is faster.

FOR THIS CONCEPT , refer - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/



 * NEVER UPDATE STATE VARIABLES DIRECTLY i.e this.state.count = 3; THIS IS WRONG.


# MOUNTING CYCLE 
* Constructor (dummy)
* Render (dummy)
       <HTML Dummy>
* Component Did Mount
      <API Call>
      <this.setState>

# UPDATE CYCLE      
*      render(API data)
       <HTML (new API data)>
       Component Did Update



Mounting means showing onto the UI and Unmounting means removing from the UI. 
As soon as we go to next page , unmounting of the previous page is done.  


# Single Responsibility Principle :
If we have a function or class or any identity of our code that shud have a single responsibility i.e that shud be assigned only one work.


<Whether the Hook is given to us by library or it is a custon Hooks, they are utility functions >

# Custon Hooks
- We can create our own hooks 
- every hook shud have it's seperate file under utils folder 
- always write "use" at the starting as react recognisez it as Hook. 


# Dividing of the code in different small chunks or bundles so our application or code does not get overloaded and we can avoid loading unnecessary components. Different name for it :
- Chunking 
- Code Splitting 
- Dynamic Bundling
- Lazy Loading
- On Demand Loading
- Dynamic Import



# Why do we have to always write super props in class component react?
The purpose of using the super constructor with a props argument is to allow a component to inherit the properties of its parent component and also pass in additional properties as arguments to the component.



# Different ways of writing CSS

<DIFFERENCE BETWEEN SASS & SCSS>
In the world of web development, SASS is an acronym for Syntactically Awesome Style Sheets, which is a preprocessor scripting language that is either interpreted or compiled into a CSS file. Often called Sassy CSS, SCSS is the m ain syntax for SASS, which is a build on top of the CSS syntax that already exists.

<STYLED COMPONENTS>
Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!

<MATERIAL UI>
<BOOTSTRAP>
<CHAKRA UI>
<TAILWIND CSS>
<ANT DESIGN>



Disadvantage of Tailwind 
- Code looks ugly and very long (loaded).
- It comes with intial learning.

Advantage of Tailwind
- We don't have to switch between different index, js and css files.
- It is very lightweight.



# HIGHER ORDER COMPONENT 
- Higher order component is a function that takes a component inside and returns a component. 
- It takes an existing component as an input then adds extra feature to that component i.e enhances the component and then returns it back.



# Accordion
Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.
It have two things - Accordian header and Accordian Body.
Can refer - https://getbootstrap.com/docs/5.0/components/accordion/

# BUILD A PROPERTY WHERE IF WE OPEN ONE ACCORDIAN, THEN OTHER ACCORDIAN SHOULD BE COLLAPSED ITSELF
To implement this , 
- We take the example of RestaurantCatergory and RestaurantMenu.
- Here , RestaurantCatergory comes under RestaurantMenu, to implement this we provide state variable property to RestaurantMenu.
- Here , parent (RestaurantMenu) controls their children RestaurantCatergory
- So, here comes the concept of <Controlled> and <Uncontrolled>
# RestaurantCatergory is now CONTROLLED bcoz state variable is coming from RestaurantMenu and passed in RestaurantCatergory as a prop, i.e it is replying on it's parent about what to do , otherwise it would have been UNCONTROLLED.
can refer lect 10 from timestamp 1:45:00 onwards for this concept as it is an important interview question
We cannot directly modify state variable of my parent from my children. BUT IT CAN BE DONE INDIRECTLY.

# Lifting state up 
Lifting up state with hooks in React involves moving the state management from child components to a common  ancestor (parent component) using hooks. The useState hook allows you to add state to functional components, and the useEffect hook allows you to handle side effects in functional components.
Refer : https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example


# Tailwind divides full screen in 12 parts 
So, if you write w-6/12 means this div will ocupy half of the width of full screen
 
# Camel Casing is used in react 
Means always first word small, Then jitne bhi diff words hain unke first letter capital
eg-> useRestaurantMenu


# Props Drilling
- Passing props is a great way to explicitly pipe data through your UI tree to the components that use it.
But passing props can become verbose and inconvenient when you need to pass some prop deeply through the tree, or if many components need the same prop. The nearest common ancestor could be far removed from the components that need data, and lifting state up that high can lead to a situation called “prop drilling”.
- We should avoid props drilling.
- <It can be avoided using CONTEXT >
# CONTEXT
- It is a hook which comes from react. 
- Context is like a global place where data is kept and anybody(i.e any file) can access it.
- But it cannot be used in class-based components , as it does not have Hooks.
- We can use but the way is different.



# REDUX
- Redux is not mandatory if it is a middle size or small application.
- Redux make sense if you are making a large scale application.
- It helps to debug a lot.
- <Redux and React are different libraries>
- Redux is not the only library that is used for managing state of our application. <Zustand> library is also used for same.
- Redux offers easy debugging.
- Other Libraries from the Redux Team
1) React-Redux
2) Redux Toolkit (RTK)
       Refer - https://redux-toolkit.js.org/introduction/getting-started

<Redux Store>
- A big whole centralized thing where most of the data of our app is kept and any component of the app can access it.
- Slice is a small portion of our redux store.



# HOW ADD BUTTON MODIFIES OUR CART PAGE?
When we press the "Add" Button , it <dispatches> an <Action>, which calls the <reducer> function , which <updates> the <slice> of our <redux store> (i.e cart).
We use <SELECTOR> to read the data from redux store or cart slice and this selector will modify our react component.
# Subscribing to the store 
If the data inside our store (here, cart) changes , data on the header component will automatically change , so we say our header component has subscribed to the store , and it is done with the help of store.

# Redux Toolkit
- Install @reduxjs/toolkit (it is just the name of a library) and react-redux
- Build our store.
- Connect our store to our app.
- Slice (cartSlice)
- dispatch (action)
- Selector


# Q. What is the difference between these three things ? 
(1) onClick = {handleAddItem}
(2) onClick = {() => handleAddItem(item)}             -> this is callback function
(3) onClick = {handleAddItem(item)}             -> this is calling the function rightaway 

# Note:-
 Whenever u r subscribing to the store , alwats subscibe the right side and the small portion of the store , bcoz if we subscribe the whole store , any small changes happening in the app , our store will get effected which we don't want. Can Refer Lect 12 -> 1:52:00
Eg -> 
Do this 
const cartItems = useSelector((store) => store.cart.items);

Not this
const store = useSelector((store) => store);
const cartItems = store.cart.items;

The name is Selector because we are selecting a portion of the store i.e we are subscribing to a selected portion of the store.

# Reducer is combination of multiple small reducers.


# Vanialla Redux 
- This was the older version of redux.
- It used to say - DON'T MUTATE STATE 
i.e  addItem: (state, action) => {
      state.items.push(action.payload);
    }
- EARLIER, RETURNING WAS MANDATORY     

If you want to know deep and more about it then can watch it from Lect 12th from 1:59:00

New Redux says - WE HAVE TO MUTATE THE STATE
- NOW ,RETURNING IS NOT MANDATORY. REDUX DOES NOT FORCE TO RETURN ANYTHING , IT CAN RETURN AUTOMAGICALLY.

RTK says -> either Mutate the existing state or return a new State.

Redux used Immer library to do those Vanialla Redux logic behind the scenes. This library finds the difference between orginal state, the mutated state and then give back the new state i.e immuatable state i.e a new copy of the state , so developer do not need to do this and immer takes care of it.
U CAN READ DOCUMENTATION OF IMMER AND REDUX
 <Redux Toolkit uses immer BTS>

# Redux Devtool
Provides many tools for debugging.

Read about RTK Query from documentation



# Types Of Testing (that a developer can do)
- <Unit Testing> - testing one unit or one component in isolation.
- <Integration Testing> - multiple components are involved and talking to each other, there are events happening.
- <End to End Testing i.e e2e testing>- Testing a react application as soon as user land to the website to the user leaves the website. Simulating what the user will do throughout the app. 

https://testing-library.com/docs/react-testing-library/intro/

# React Testing Library 
- It is built on top of DOM Testing Library by adding APIs for working with React Components.
- It uses Jest
# Jest
Jest is a delightful js testing framework with a focus on simplicity.
Jest uses babel.