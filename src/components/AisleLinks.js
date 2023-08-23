import React from "react";
import { Link } from 'react-router-dom'

function AisleLinks({groceryAisles}) {

   const aisleList = groceryAisles.map((aisle) => <Link to>Hello</Link>)

    return(
        <div>{aisleList}</div>
    );
}

export default AisleLinks;