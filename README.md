# Shopping List Product Dashboard

## Project Description
This project is a React-based Shopping List application that demonstrates the use of **Controlled Components**, **State Management**, and **Dynamic Filtering**. Users can search for items in real-time, filter them by category (Produce, Dairy, Dessert), and add new items to the list via a controlled form.

## Features
- **Dynamic Search**: Filter the shopping list as you type.
- **Category Filter**: View items from specific categories or all at once.
- **Add Items**: A controlled form to add new products with automatic ID generation.
- **Dark Mode**: Toggle between light and dark themes.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd React-Forms-Vite-Lab
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Running Tests
This project uses **Vitest** for unit testing. To run the tests, use:
```bash
npm test
```
The tests verify:
- Correct rendering of product cards.
- Proper state management for search and filter.
- Form submission and list updates.

## Key Logic
- **Controlled Components**: All input fields (`input`, `select`) are synced with React state.
- **Lifting State Up**: New items are passed from the form to the top-level `App` component to update the global list.
- **Array Immutability**: Uses the spread operator (`[...]`) to update the items list without mutating original state.
