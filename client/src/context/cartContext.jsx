import React, { createContext, useContext, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newCartItem = {
        id: action.payload._id,
        name: action.payload.name,
        price: action.payload.price,
        img: action.payload.image,
      };
      const updatedCart = [...state, newCartItem];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    case "REMOVE_FROM_CART":
      const updatedCartafterRemove = state.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(updatedCartafterRemove));
      return updatedCartafterRemove;
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(
    cartReducer,
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  console.log("Cart state : ", cartItems);

  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
