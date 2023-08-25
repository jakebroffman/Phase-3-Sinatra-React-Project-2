import React, { useState } from "react";
import Product from "./Product";
import { Container, Card } from "semantic-ui-react";
import ProductForm from "./ProductForm";


function ProductList({groceryAisles, setGroceryAisles}) {

    const [show, toggleShow] = useState(false);


    // let { id } = useParams();

    // if (groceryAisles.id === id) {

    const groceryAisle = groceryAisles.map((aisle) => {
        return(
        <Container key={aisle.id}>
            <h1 className="des">Products in aisle:{aisle.id} </h1>
            <button onClick={() => toggleShow(!show)}>Add a product to aisle:{aisle.id}</button>
            {show && <ProductForm className="product_form" setGroceryAisles={setGroceryAisles} aisleId={aisle.id} />}
                <Card className="art-card" itemsPerRow={5}>
                    <Product aisle={aisle}/>
                </Card>
        </Container>
    )}) ;

    
        return (
            <div>
                {groceryAisle}
            </div>
        );}
// }}

export default ProductList;

