import { React, useState } from "react";
import { Link } from 'react-router-dom'
import ProductList from "./ProductList";

function AisleLinks({groceryAisles}) {
    const [show, toggleShow] = useState(false);

    


   const aisleList = groceryAisles.map((aisle) => <div key= {aisle.id}><Link to={`/aisles/${aisle.id}`} onClick={() => toggleShow(!show)} key={aisle.id}>Aisle #{aisle.id}</Link>{show && <ProductList groceryAisles={groceryAisles} />}</div>)

    return(
        <div>{aisleList}</div>
    );
}

export default AisleLinks;