import { React, useState } from "react";
import { Form } from "semantic-ui-react";

function ProductForm({ aisleId, setGroceryAisles }) {

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        aisle_id: aisleId,
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
        e.preventDefault()
        fetch("http://localhost:9292/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(formData)
        })
        .then((r) =>r.json())
        .then((newProduct) => handleNewProduct(newProduct))

        setFormData({
            name: "",
            price: "",
            aisle_id: aisleId,
        })
    }

    function handleNewProduct(newProduct) {
        setGroceryAisles((groceryAisles) => [...groceryAisles, newProduct])
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
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    );
}

export default ProductForm;