import { React, useState } from "react";
import { Form } from "semantic-ui-react";
import { useParams } from "react-router-dom"

function ProductForm({ setGroceryAisles, aisleId }) {

    let { id } = useParams();

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        aisle_id: id,
    })
    
    function handleInputChange(e) {
        console.log(e.target.value)
        const { name, value } = e.target
        setFormData((prevData) =>({
            ...prevData,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
    
        const aisleId = parseInt(id);
    
        fetch("http://localhost:9292/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...formData,
                aisle_id: aisleId, 
            }),
        })
        .then((r) => r.json())
        .then((newProduct) => {
            
            setGroceryAisles((prevAisles) => {
                return prevAisles.map((aisle) => {
                    if (aisle.id === aisleId) {
                        return {
                            ...aisle,
                            products: [...aisle.products, newProduct],
                        };
                    } else {
                        return aisle;
                    }
                });
            });
    
            
            setFormData({
                name: "",
                price: "",
                aisle_id: aisleId,
            });
        });
    }
    

    
    return (
        <div className="form-box">
            <Form onSubmit={handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input
                        fluid
                        label="Product Name:"
                        placeholder="Peanut Butter"
                        name="name"
                        onChange={handleInputChange}
                        value={formData.name}
                    />
                    <Form.Input
                        fluid
                        label="Product Price:"
                        placeholder="6"
                        name="price"
                        onChange={handleInputChange}
                        value={formData.aisle_category}
                    />
                </Form.Group>
                <Form.Button>Add Product</Form.Button>
            </Form>
        </div>
    );
}

export default ProductForm;