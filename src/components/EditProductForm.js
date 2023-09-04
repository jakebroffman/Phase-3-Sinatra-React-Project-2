import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { useParams } from "react-router-dom";

function EditProductForm({ setGroceryAisles, productId, productName, productPrice }) {
  let { id } = useParams();
  const aisleId = parseInt(id);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const productID = productId

    fetch(`http://localhost:9292/products/${productID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((updatedProduct) => {
        setGroceryAisles((prevAisles) => {
          return prevAisles.map((aisle) => {
            if (aisle.id === aisleId) {
              const updatedProducts = aisle.products.map((product) =>
                product.id === updatedProduct.id ? updatedProduct : product
              );

              return {
                ...aisle,
                products: updatedProducts,
              };
            }
            return aisle;
          });
        });

        setFormData({
          name: "",
          price: "",
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
            placeholder={productName}
            name="name"
            onChange={handleInputChange}
            value={formData.name}
          />
          <Form.Input
            fluid
            label="Product Price:"
            placeholder={productPrice}
            name="price"
            onChange={handleInputChange}
            value={formData.price}
          />
        </Form.Group>
        <Form.Button>Update Product</Form.Button>
      </Form>
    </div>
  );
}

export default EditProductForm;
