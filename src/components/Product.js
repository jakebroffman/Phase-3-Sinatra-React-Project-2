import React from "react";
import { Card } from "semantic-ui-react"

function Product({ product }) {


    return(
        <Card>
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
    </Card>  
    );
}

export default Product;


