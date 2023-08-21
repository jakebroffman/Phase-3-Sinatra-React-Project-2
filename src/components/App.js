
import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import NavBar from "./NavBar";
import ProductList from "./ProductList"

function App() {
  const [groceryAisles, setGroceryAisles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/aisles")
    .then((r) => r.json())
    .then((aisles) => console.log(aisles))
  }, []);

  return (
    <div>
      <NavBar />
        <Routes>
          <Route path="/aisle_one" element = {<ProductList groceryAisles = {groceryAisles} />} />
          <Route path="/aisle_two" element = {<ProductList groceryAisles = {groceryAisles} />} />
          <Route path="/aisle_three" element = {<ProductList groceryAisles = {groceryAisles} />} />
        </Routes>
    </div>
  );
}

export default App;
