// Import the necessary modules
import React from 'react'; // Import the React library
import ReactDOM from 'react-dom'; // Import the ReactDOM library
import './index.css'; // Import the CSS file for styling
import App from './App'; // Import the main component of the application

// Render the main component inside the root element of the HTML document
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);