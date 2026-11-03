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

### Props: Passing Data to Components

**Props** allow you to pass data from a parent component to a child component, making components dynamic and reusable.

Example:
`jsx
function ChatMessage({ sender, message }) {
  return (
    <div>
      {sender === 'robot' && <img src='robot.png' width='50' />}
      {message}
    </div>
  );
}
`

### State: Managing Dynamic Data

**State** (React.useState) allows components to "remember" data. When state changes, React automatically re-renders the component to reflect the new data.

- **useState**: Returns an array with two elements: the current state value and a function to update it.
- **Updating State**: When updating arrays or objects in state, use the spread operator (...) to create a copy, as you should not mutate state directly.

Example:
`jsx
const [chatMessages, setChatMessages] = React.useState([...]);

function sendMessage() {
  setChatMessages([...chatMessages, newMessage]);
}
`

### Lifting State Up

When multiple components need to share the same state, you should **lift the state up** to their closest common ancestor. 
- The ancestor manages the state and passes it down via **props**.
- The child components trigger updates by calling functions passed down as props.

### Rendering Lists

Use the .map() method to transform an array of data into an array of React components. Always provide a unique key prop to each list item to help React optimize re-renders.

`jsx
{chatMessages.map((msg) => (
  <ChatMessage key={msg.id} message={msg.message} sender={msg.sender} />
))}
`

### Component Isolation

Each instance of a component maintains its own **independent state**. 

Example:
`jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked: {count}
    </button>
  );
}
`
If you render <Counter /> twice, each will have its own independent count variable.

### Summary

- **React** is a JavaScript library for building user interfaces.
- **JSX** makes UI code easier to write.
- **Components** are reusable building blocks.
- **Fragments** (<>...</>) group elements without extra DOM nodes.
- **Props** pass data to components.
- **State** (useState) manages dynamic data.
- **Component Isolation**: Each component instance manages its own state.
- **Lifting State Up**: Share state between components by moving it to a common parent.
- **List Rendering** (.map + key) is used for arrays.
- **Babel** compiles JSX.
