import { React, useState } from "react";
import { Link } from 'react-router-dom'
import AisleForm from "./AisleForm";

function AisleLinks({groceryAisles, setGroceryAisles}) {
    const [show, toggleShow] = useState(false);

    


   const aisleList = groceryAisles.map((aisle) => <div key= {aisle.id}><Link to={`/aisles/${aisle.id}`}>{aisle.aisle_number}</Link></div>)
    return(
        <div>
            <button className="form_button" onClick={() => toggleShow(!show)}>Add An Aisle:</button>
            {show && <AisleForm className="aisle_form" setGroceryAisles={setGroceryAisles}/>}
            {aisleList}
        </div>
    );
}

export default AisleLinks;