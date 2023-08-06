import Main from "./components/home";
import Nav from "./components/Nav";
import Register from "./components/auth/register";
import Account from "./components/account/account";
import Login from "./components/auth/login";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { BrowserRouter } from "react-router-dom";
import Error from "./components/error/404";
import List from "./components/category/category";
import Product from "./components/product/product";
import Cart from "./components/cart/cart";
import { CartProvider } from "./context/cartContext";

export default function App() {
  const { isAuthenticated } = useAuthContext();

  return (
    <BrowserRouter>
      <CartProvider>
        <Nav />
      </CartProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/acc" element={<Account />} redirectTo="/login" />
        <Route path="/list/:category" element={<List />} />
        <Route
          path="/product/:id"
          element={
            <CartProvider>
              <Product />{" "}
            </CartProvider>
          }
        />
        <Route
          path="/cart"
          element={
            <CartProvider>
              <Cart />{" "}
            </CartProvider>
          }
        />
        {/* 404 Page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
