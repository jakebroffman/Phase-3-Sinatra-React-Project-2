import React from "react";
import Product from "./Product";
import { Container, Card } from "semantic-ui-react"

function ProductList({groceryAisles}) {
    const groceriesToDisplay = groceryAisles.map((aisle) => {
        return(
            <div className="product_card" key={aisle.id}>
                <br></br>
                <Product className="productCard" products={aisle.products}/>
                <br></br>
            </div>
        )
    })
    
        return (
            <Container>
            <h1 className="des">Products in </h1>
                <Card className="art-card" itemsPerRow={5}>
                    {groceriesToDisplay}
                </Card>
            </Container>
        );
}

export default ProductList;

