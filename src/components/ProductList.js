import React, { useState } from "react";
import { Container, Card } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import ProductForm from "./ProductForm"

function ProductList({ groceryAisles, setGroceryAisles }) {
  const [show, toggleShow] = useState(false);
  const { id } = useParams();
  const aisleId = parseInt(id);

  const selectedAisle = groceryAisles.find((aisle) => aisle.id === aisleId);

  if (!selectedAisle) {
    return <div>Aisle not found.</div>;
  }

  return(
    <Container key={selectedAisle.id}>
        <h1 className="des">Products in aisle:{selectedAisle.aisle_number} </h1>
        <button onClick={() => toggleShow(!show)}>Add a product to the {selectedAisle.aisle_category} aisle:</button>
        {show && <ProductForm className="product_form" setGroceryAisles={setGroceryAisles} />}
            <Card className="product-card" itemsperrow={5}>
                <Product groceryAisles={groceryAisles} setGroceryAisles={setGroceryAisles} aisle={selectedAisle}/>
            </Card>
    </Container>
    );
}

export default ProductList;