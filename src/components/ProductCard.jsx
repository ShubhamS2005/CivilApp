// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext"; // Import Cart Context

// const ProductCard = ({ product }) => {
//   const { addToCart } = useCart(); // Use addToCart function

//   return (
//     <div className="border rounded-lg p-4 shadow-lg bg-white">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-40 object-cover"
//       />
//       <h3 className="text-lg font-bold mt-2">{product.name}</h3>
//       <p className="text-gray-600">₹{product.price}</p>

//       {/* Buttons with Hover Effects */}
//       <div className="mt-4 flex justify-between">
//         <button
//           onClick={() => addToCart(product)}
//           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
//         >
//           Add to Cart
//         </button>

//         <Link
//           to="/checkout"
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
//         >
//           Buy Now
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import Cart Context
import { ShoppingCartIcon } from "lucide-react"

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Use addToCart function

  return (
    <div className="rounded-lg p-4 shadow-xl shadow-gray-200 border border-gray-300 bg-white flex-wrap bg-blend-lighten">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-68 object-cover rounded-lg"
      />
      <h3 className="text-lg font-bold mt-2 text-shadow-md">{product.name}</h3>
      <p className="text-gray-600">₹{product.price}</p>

      {/* Buttons with Hover Effects */}
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => addToCart(product)}
          className="text-sm bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
        >
          
          Add to Cart
        </button>

        <Link
          to="/checkout"
          className="flex justify-center items-center gap-2 text-sm bg-[#009688] text-white px-4 py-2 rounded hover:bg-[#009687e0] transition duration-300"
        >
          <ShoppingCartIcon/>
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
