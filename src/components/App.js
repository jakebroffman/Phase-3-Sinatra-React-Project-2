
import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import AisleLinks from "./AisleLinks";
import ProductList from "./ProductList"
import AisleForm from "./AisleForm";

function App() {
  const [groceryAisles, setGroceryAisles] = useState([]);
  const [show, toggleShow] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9292/aisles")
    .then((r) => r.json())
    .then((aisles) => setGroceryAisles(aisles))
  }, []);



  return (
    <div>
      <h2>Grocery Store Inventory Tracker</h2>
      <h3>Scroll to the bottom for the form to add new products to your store's inventory!</h3>
      <button className="form_button" onClick={() => toggleShow(!show)}>Add An Aisle:</button>
      {show && <AisleForm className="aisle_form" setGroceryAisles={setGroceryAisles}/>}
      <AisleLinks groceryAisles={groceryAisles} setGroceryAisles={setGroceryAisles} />
        <Routes>
          <Route path="/aisles/:id" element = {<ProductList groceryAisles = {groceryAisles} />} />
        </Routes>
    </div>
  );
}

export default App;
 