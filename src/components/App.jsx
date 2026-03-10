import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  // Main state for the shopping items list, initialized with static data
  const [items, setItems] = useState(itemData);
  // State for managing dark mode theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggles the dark mode state
  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  // Callback to add a new item to the state, using the spread operator to ensure immutability
  function handleItemFormSubmit(newItem) {
    setItems((items) => [...items, newItem]);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onItemFormSubmit={handleItemFormSubmit} />
    </div>
  );
}

export default App;