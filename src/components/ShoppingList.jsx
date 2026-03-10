import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  // Local state for the selected category filter
  const [selectedCategory, setSelectedCategory] = useState("All");
  // Local state for the dynamic search text
  const [searchText, setSearchText] = useState("");

  // Handler for category filter dropdown changes
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Handler for search input text changes
  function handleSearchChange(event) {
    setSearchText(event.target.value);
  }

  // Logic to filter the items based on both the search query and the category
  const itemsToDisplay = items.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        search={searchText}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;