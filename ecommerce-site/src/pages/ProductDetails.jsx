// import { useParams } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const { addToCart } = useCart();
//   const product = { id, name: "Cement", price: 300, image: "/cement.jpg" };

//   return (
//     <div className="container mx-auto p-4">
//       <img src={product.image} className="w-64 mx-auto" alt={product.name} />
//       <h1 className="text-2xl font-bold">{product.name}</h1>
//       <p className="text-gray-600">₹{product.price}</p>
//       <button className="bg-blue-600 text-white px-4 py-2 mt-2" onClick={() => addToCart(product)}>
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ProductDetails;


import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Example product data. Replace with dynamic data based on `id`
  const product = { 
    id, 
    name: "Cement", 
    price: 300, 
    image: "/cement.jpg", 
    description: "Used as a binder in concrete, an essential material for all types of construction."
  };

  return (
    <div className="container mx-auto p-4">
      <img src={product.image} className="w-64 mx-auto" alt={product.name} />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-600">₹{product.price}</p>
      <p className="text-gray-600">{product.description}</p>
      <button 
        className="bg-blue-600 text-white px-4 py-2 mt-2" 
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
