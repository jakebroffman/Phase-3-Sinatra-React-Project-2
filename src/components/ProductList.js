import React, { useState } from "react";
import { Container, Card } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import ProductForm from "./ProductForm"

function ProductList({ groceryAisles, setGroceryAisles }) {
  const [show, toggleShow] = useState(false);
  const { id } = useParams();
  const aisleId = parseInt(id);

  // Find the selected aisle based on the aisleId
  const selectedAisle = groceryAisles.find((aisle) => aisle.id === aisleId);

  if (!selectedAisle) {
    // Handle the case where the aisle is not found (invalid id, for example)
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


// // import React, { useState } from "react";
// // import Product from "./Product";
// // import { Container, Card } from "semantic-ui-react";
// // import ProductForm from "./ProductForm";
// //  import { useParams } from "react-router";


// // function ProductList({groceryAisles, setGroceryAisles}) {

// //     const [show, toggleShow] = useState(false);


// //      let { id } = useParams();

     

// //     const groceryAisle = groceryAisles.map((aisle) => {
 

    
       
       
        

// //     });

    
// //         return (
// //             <div>
// //                 {groceryAisle}
// //             </div>
// //         );
// // }
        


// // export default ProductList;

// import React, { useState } from "react";
// import { Container, Card } from "semantic-ui-react";
// import ProductForm from "./ProductForm";
// import { useParams } from "react-router-dom";
// import Product from "./Product"

// function ProductList({ groceryAisles, setGroceryAisles }) {
//   const { id } = useParams();
//   const aisleId = parseInt(id);

//   const [showProductForm, setShowProductForm] = useState({});

//   const handleToggleProductForm = (aisleId) => {
//     setShowProductForm((prev) => ({
//       ...prev,
//       [aisleId]: !prev[aisleId],
//     }));
//   };

//   return (
//     <div>
//       {groceryAisles.map((aisle) => (
//         <Container key={aisle.id}>
//           <h1 className="des">Products in aisle: {aisle.aisle_number}</h1>
//           <button onClick={() => handleToggleProductForm(aisle.id)}>
//             Add a product to aisle: {aisle.aisle_number}
//           </button>
//           {showProductForm[aisle.id] && (
//             <ProductForm
//               className="product_form"
//               setGroceryAisles={setGroceryAisles}
//               groceryAisles={groceryAisles}
//               aisleId={aisle.id} // Pass aisleId to the ProductForm
//             />
//           )}
//           <Card className="product-card" itemsperrow={5}>
//             {/* Pass the aisle data to the Product component */}
//             <Product aisle={aisle} />
//           </Card>
//         </Container>
//       ))}
//     </div>
//   );
// }

// export default ProductList;