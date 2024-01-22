// Import the React library
import React from 'react';

// The Navigation component responsible for rendering the navigation bar
function Navigation({ currentPage, handlePageChange }) {
  // An array containing the navigation items
  const navItems = ['about', 'portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      {/* Unordered list to contain the navigation items */}
      <ul className="navigation">
        {/* Map through the navigation items and create a list item for each */}
        {navItems.map((item) => (
          // Use 'item' as the unique 'key' for each list item
          <li key={item}>
            {/* Render the navigation item as a button */}
            <button
              // Apply the 'nav-button' class and add 'active' class if the current page matches the item
              className={`nav-button ${currentPage === item ? 'active' : ''}`}
              // Call 'handlePageChange' function with the item when the button is clicked
              onClick={() => handlePageChange(item)}
            >
              {/* Display the text of the navigation item */}
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Export the Navigation component as the default export of this file
export default Navigation;