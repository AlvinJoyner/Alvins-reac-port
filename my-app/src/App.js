// Import the React library
import React from 'react';

// Import the Header and Footer components from their respective files
import Header from './components/Header'; // Importing the Header component
import Footer from './components/Footer'; // Importing the Footer component

// The main App component
function App() {
  return (
    // Return the JSX content of the App component
    <div>
      {/* Render the Header component */}
      <Header></Header>

      {/* Render the Footer component */}
      <Footer></Footer>
    </div>
  );
}

// Export the App component as the default export of this file
export default App;