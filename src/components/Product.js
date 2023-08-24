import React, { useState } from "react";
import { Card } from "semantic-ui-react"

function Product({ aisle }) {
    const [show, toggleShow] = useState(false);

    const productCards = aisle.products.map((product) => {
       return (
       <Card key={product.id}>
            <div className="content">
                <h1>Product #: {product.id}</h1>
            </div>
            <div className="product_name">
                <h1>Product Name: {product.name} </h1>
            </div>
            <div className="product_price">
                <h1 className="header">Price: {product.price}</h1>
            </div>
            <div className="aisle_id">Aisle ID: {product.aisle_id}</div>
            <button onClick={() => toggleShow(!show)}>Edit Product</button>
            {show && "Hello World"}
        </Card>  
    )})


    return(
        <div>
            {productCards}
        </div>
    );
}

export default Product;


