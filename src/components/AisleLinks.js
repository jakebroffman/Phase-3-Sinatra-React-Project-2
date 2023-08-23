import { React, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import ProductList from "./ProductList";

function AisleLinks({groceryAisles}) {
    const [show, toggleShow] = useState(false);

   

   const aisleList = groceryAisles.map((aisle) => <div><Link to={`/aisles/${aisle.id}`} onClick={() => toggleShow(!show)} key={aisle.id}>Aisle #{aisle.id}</Link>{show && <ProductList />}</div>)

    return(
        <div>{aisleList}</div>
    );
}

export default AisleLinks;