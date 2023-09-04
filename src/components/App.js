
import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import AisleLinks from "./AisleLinks";
import ProductList from "./ProductList"


function App() {
  const [groceryAisles, setGroceryAisles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/aisles")
    .then((r) => r.json())
    .then((aisles) => setGroceryAisles(aisles))
  }, []);



  return (
    <div>
      <h2>Grocery Store Inventory Tracker</h2>
        <Routes>
          <Route path="/" element = {<AisleLinks groceryAisles={groceryAisles} setGroceryAisles={setGroceryAisles} />} />
          <Route path="/aisles" element = {<AisleLinks groceryAisles={groceryAisles} setGroceryAisles={setGroceryAisles} />} />
          <Route path="/aisles/:id" element = {<ProductList groceryAisles={groceryAisles} setGroceryAisles={setGroceryAisles} />} />
        </Routes>
    </div>
  );
}

export default App;
 