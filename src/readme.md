1. Name of your project

DevStack Builder

2. A little description

DevStack Builder is a web application where developers can explore different technologies and build their own development stack by selecting technologies based on their category, difficulty, and rating.

3. Technologies that I use
React.js
TypeScript
Tailwind CSS
React Toastify
Vite
4. 3 features about my project
Technology Selection — Users can select technologies and add them to their personal stack.
Your Stack — Selected technologies are displayed in a separate stack section, where users can remove individual technologies or remove all of them.
Interactive UI & Notifications — The application provides a responsive modern interface with toast notifications when technologies are added or removed.


1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript/TypeScript. It makes React code easier to read and helps us describe the UI.

2. What is the difference between props and state?

Props are data passed from a parent component to a child component. They are read-only.

State is data managed inside a component that can change over time and update the UI.

3. What does the useState hook do, and where did you use it in this project?

useState is used to create and manage changing data in a React component.

In this project, I used useState in the Technologies.tsx component to store the selected technologies in Your Stack.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to perform side effects after a component renders, such as fetching data.

I used it to load the technology data from the JSON file when the component loads.

5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list. It helps React efficiently update, add, or remove items when the list changes.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

For example, I showed the empty stack message only when no technology was selected:

{selectedTechnologies.length === 0 && (
  <!-- <p>No technologies selected yet.</p> -->
)}
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props.

A child can send information back to the parent by calling a function passed through props.

For example:

<!-- <TechnologyCard
  technology={technology}
  onAddToStack={handleAddToStack}
/> -->

Here, technology is data passed from the parent to the child, and onAddToStack allows the child to notify the parent when the user selects a technology.