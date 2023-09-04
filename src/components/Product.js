import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import EditProductForm from "./EditProductForm";



function Product({ aisle, groceryAisles, setGroceryAisles }) {
    const [show, toggleShow] = useState(false);

    const productCards = aisle.products.map((product) => {

        function handleProductDelete() {
            fetch(`http://localhost:9292/products/${product.id}`, {
                method: "DELETE",
            })
            .then((r) => {
                if (r.ok) {
                    const updatedProducts = aisle.products.filter(
                        (p) => p.id !== product.id
                    )
                    const updatedAisle = {
                        ...aisle,
                        products: updatedProducts,
                    };
                    const updatedAisles = groceryAisles.map((a) => {
                        if (a.id === aisle.id) {
                            return updatedAisle;
                        }
                        return a;
                    });
                    setGroceryAisles(updatedAisles);
                    console.log("Product deleted!");
                } else {
                    console.error("Failed to delete product.");
                }
            });
        }

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
            <button onClick={() => toggleShow(!show)}>Update Product</button>
            {show && <EditProductForm setGroceryAisles={setGroceryAisles} productId = {product.id} productName = {product.name} productPrice={product.price} />}
            <button onClick={handleProductDelete}>Delete Product</button>
        </Card>  
    )})


    return(
        <div>
            {productCards}
        </div>
    );
}

export default Product;


