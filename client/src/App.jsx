import Main from "./components/home";
import Nav from "./components/Nav";
import Register from "./components/auth/register";
import Account from "./components/account/account";
import Login from "./components/auth/login";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { BrowserRouter } from "react-router-dom";
import Error from "./components/error/404"
import List from "./components/category/category";

export default function App() {
  const { isAuthenticated } = useAuthContext();

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/acc"
            element={!isAuthenticated ? <Navigate to="/login" /> : <Account />}
          />
          <Route path="/list/:category" element={<List/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
