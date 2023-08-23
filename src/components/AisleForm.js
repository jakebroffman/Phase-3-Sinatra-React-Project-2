import React from "react";
import { Form } from "semantic-ui-react";

function useForm(initialState, onSubmit) {
    const [formData, setFormData] = React.useState(initialState);

    function handleChange(e) {
        const { aisle_number, aisle_category } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [aisle_number]: aisle_category,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(formData);
    }

    return { formData, handleChange, handleSubmit };
}

function AisleForm({ newAisle, handleNewAisle }) {
    const { formData, handleChange, handleSubmit } = useForm(
        {
            aisle_number: "",
            aisle_category: "",
        },
        (formData) => {
            fetch("http://localhost:9292/aisles", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then((r) => r.json())
                .then((newAisle) => handleNewAisle(newAisle));
        }
    );

    function handleNewAisle(newAisle) {
        setGroceryAisles([...groceryAisles, newAisle]);
    }

    return (
        <div className="form-box">
            <h1>List A Work For Auction:</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input
                        fluid
                        label="Aisle Number:"
                        placeholder="4"
                        name="aisle_number"
                        onChange={handleChange}
                        value={formData.aisle_number}
                    />
                    <Form.Input
                        fluid
                        label="Aisle Category:"
                        placeholder="spices"
                        name="aisle_category"
                        onChange={handleChange}
                        value={formData.aisle_category}
                    />
                </Form.Group>
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    );
}

export default AisleForm;