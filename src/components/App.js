
import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import AisleLinks from "./AisleLinks";
import ProductList from "./ProductList"

function App() {
  const [groceryAisles, setGroceryAisles] = useState([]);
  const [show, toggleShow] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9292/aisles")
    .then((r) => r.json())
    .then((aisles) => setGroceryAisles(aisles))
  }, []);

console.log(groceryAisles)

  return (
    <div>
      <h2>Grocery Store Inventory Tracker</h2>
      <h3>Scroll to the bottom for the form to add new products to your store's inventory!</h3>
      <button onClick={() => toggleShow(!show)}>Add An Aisle:</button>
      {show && <h2>Hello World!</h2>}
      <AisleLinks groceryAisles={groceryAisles} />
        <Routes>
          <Route path="/aisles/:id" element = {<ProductList groceryAisles = {groceryAisles} />} />
        </Routes>
    </div>
  );
}

export default App;
 