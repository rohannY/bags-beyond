import Main from "./pages/home";
import Nav from "./components/Nav";
import Register from "./pages/auth/register";
import Account from "./pages/account/account";
import Login from "./pages/auth/login";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { BrowserRouter } from "react-router-dom";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}
