<!-- react -->

# React Notes

## Introduction to React

React is a powerful JavaScript library for building user interfaces. Developed by Facebook, it helps you create reusable UI components and manage dynamic data efficiently.

### Why React is Useful

When building applications with plain JavaScript (Vanilla JS), interacting with the Document Object Model (DOM) can become complex and difficult to maintain.

**Without React (Imperative Approach):**
You manually create elements, update their properties, and append them to the DOM.

`javascript
const button = document.createElement("button");
button.innerHTML = "Hello";
document.body.appendChild(button);
`

While this works, it is verbose and becomes hard to manage as your application grows in scale and complexity.

### JSX: Cleaner and More Readable

React introduces **JSX (JavaScript XML)**, a syntax extension that lets you write HTML-like code directly inside your JavaScript files.

**With React (Declarative Approach using JSX):**

`jsx
const button = <button>Hello</button>;
`

JSX is much easier to read, write, and reason about, making it the standard way to write UI in React.

### Core Concept: Declarative UI

Instead of manually creating and updating DOM elements step-by-step with JavaScript, React lets you **describe what the UI should look like**. When the state or data changes, React automatically and efficiently updates only the necessary parts of the DOM.

### React Components

The fundamental building block of a React application is the **Component**. Components let you split the UI into independent, reusable pieces.

**Example of a Functional Component:**

`jsx
function App() {
  return (
    <div>
      <h1>Welcome to React</h1>
      <button>Hello</button>
    </div>
  );
}
`

### Babel: Compiling JSX

**Browsers do not natively understand JSX.** 
If you try to run JSX directly in the browser, it will throw an error. To solve this, we use tools like **Babel**, which is a JavaScript compiler. Babel takes your JSX code and converts it into regular React.createElement() calls that the browser can understand.

### React Components and Fragments

- **Components as Functions**: In React, components are simply functions that return JSX.
- **Calling Components**: You can call them like a function {ChatInput()} or use them like an HTML tag <ChatInput />. Using the HTML tag syntax is the standard and preferred way.
- **Fragments (<>...</>)**: React components must return a single root element. If you have multiple elements (like an input and a utton) but don't want to wrap them in an extra div, you can use **Fragments** (<> and </>). This keeps the DOM clean.

### Example: Chat Input

In the chatbot.html file, we see this in action:

`jsx
function ChatInput() {
  return (
    <>
      <input type="text"></input>
      <button>Send</button>
    </>
  );
}
`

By using <>, we group the input and utton together without adding an unnecessary div to the HTML structure.

### Summary

- **React** is a JavaScript library for building user interfaces.
- **JSX** makes UI code easier to write and understand.
- **Components** are reusable building blocks.
- **Fragments** (<>...</>) allow you to group elements without adding extra nodes to the DOM.
- **Babel** is required to compile JSX into regular JavaScript.
