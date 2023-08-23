import { React, useState } from "react";
import { Form } from "semantic-ui-react";

function AisleForm({ groceryAisles, setGroceryAisles }) {

    const [formData, setFormData] = useState({
        aisle_number: "",
        aisle_category: ""
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
        fetch("http://localhost:9292/aisles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(formData)
        })
        .then((r) =>r.json())
        .then((newAisles) => handleNewAisles(newAisles))

        setFormData({
            aisle_number: "",
            aisle_category: ""
        })
    }

    function handleNewAisles(newAisle) {
        setGroceryAisles((groceryAisles) => [...groceryAisles, newAisle])
    }

    
    return (
        <div className="form-box">
            <Form onSubmit={handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input
                        fluid
                        label="Aisle Number:"
                        placeholder="4"
                        name="aisle_number"
                        onChange={handleInputChange}
                        value={formData.aisle_number}
                    />
                    <Form.Input
                        fluid
                        label="Aisle Category:"
                        placeholder="spices"
                        name="aisle_category"
                        onChange={handleInputChange}
                        value={formData.aisle_category}
                    />
                </Form.Group>
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    );
}

export default AisleForm;