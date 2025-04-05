import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import Materials from "./pages/Materials";
import Labour from "./pages/Labour";
import Calculator from "./pages/Calculator";
import ProfilePage from "./pages/ProfilePage"; 

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/materials" element={<Materials />} /> 
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/labour" element={<Labour />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/calculator" element={<Calculator />} />

        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
