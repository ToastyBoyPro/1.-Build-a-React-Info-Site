/* Use if links to React are not in html file and using dependencies*/
import React from "react"
import ReactDOM from "react-dom" 

// render an element, select where to render to
// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))

// rendering items inside an element
/* 
ReactDOM.render(
  <ul><li>Item 1</li><li>Item 2</li></ul>,
  document.getElementById("root")
) 
*/

// Why React is great:
// Composable
// Declarative: tell computer what to do and it gets done vs Imperative: computer needs to know how to get it done

/* 

Challenge - recreate the following line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

ReactDOM.render(<h1 className="header">Hello, React!</h1>, document.getElementById("root"))

- 1. Create a new h1 element
- 2. Give it some textContent
- 3. Give it a class name of "header"
- 4. Append it as a child of the div#root
*/

/* 
const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)
 */

// This approach can take a long time especially if you need to do it many times.

// JSX - a flavor of JavaScript that looks like html and makes React declarative\
// - almost like a function that returns object that React can interpret
// - can only render one element at a time, but the element can have many child elements

/* 
ReactDOM.render(
  <div>
    <h1 className="header">This is JSX</h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
)
*/

// or put the elemnt into a variable

/* 
const page = (
  <div>
    <h1 className="header">This is JSX</h1>
    <p>This is a paragraph</p>
  </div>
)

ReactDOM.render(
  page,
  document.getElementById("root")
)
*/

// Making a navigation bar:

/* 
const navBar = (
  <nav>
    <h1>My Website</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul> 
  </nav>
)

ReactDOM.render(
  navBar,
  document.getElementById("root")
)
*/

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component
- It should return an ordered list with the reasons why you're excited to be learning React :)
- Render your list to the page

Part 2: 

- Add a `header` element with a nested `nav` element. Inside the `nav`, include a `img` element with the image of the React logo inside (src="./react-logo.png") and make sure to set the width to something more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: "© 20xx <last name here> development. All rights reserved."

Part 3:
- Move the `header` into its own component called "Header" and render that component inside the Page component.
- Move the `footer` into its own component called "Footer" and render that component inside the Page component.
- Move the `h1` and `ol` together into another component called "MainContent" and render inside Page as well.

Part 4: 
- Add an `ul` inside the Header's `nav` and create the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and put them inline with the React logo.
- Change the image styling to happen in CSS instead of in-line. For practice, add a new class to the image in order to style it

Part 5:
- Move components into individual files

*/

import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'

// Composing our page with React Components
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

ReactDOM.createRoot(<App />, document.getElementById("root"))




