import { createContext, useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, variant) => {
    const v = variant || product.variants[0];
    const cartKey = `${product.id}-${v.id}`;

    setCart((prev) => {
      const exist = prev.find((i) => i.cartKey === cartKey);
      if (exist) {
        return prev.map((i) =>
          i.cartKey === cartKey ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [
        ...prev,
        {
          cartKey,
          id: product.id,
          name: product.name,
          image: product.image,
          variantLabel: v.label,
          price: v.price,
          qty: 1,
        },
      ];
    });
  };

  const updateQty = (cartKey, qty) => {
    if (qty < 1) return removeFromCart(cartKey);
    setCart((prev) =>
      prev.map((i) => (i.cartKey === cartKey ? { ...i, qty } : i))
    );
  };

  const removeFromCart = (cartKey) => {
    setCart((prev) => prev.filter((i) => i.cartKey !== cartKey));
  };

  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQty, removeFromCart, totalPrice }}
    >
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </CartContext.Provider>
  );
}
