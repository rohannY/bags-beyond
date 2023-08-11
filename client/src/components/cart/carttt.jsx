import React, { useState } from "react";
import card from "../../assets/svg/card.svg";
import { useCartContext } from "../../context/cartContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import CartItem from "./cartItems";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CartDetails({ data: cartItems }) {
  const { dispatch } = useCartContext();
  const { token } = useAuthContext();

  const [itemCounts, setItemCounts] = useState(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: item.items }), {})
  );

  const increaseCount = (itemId) => {
    updateItemCount(itemId, Math.min(itemCounts[itemId] + 1, 10));
  };

  const decreaseCount = (itemId) => {
    updateItemCount(itemId, Math.max(itemCounts[itemId] - 1, 1));
  };

  const updateItemCount = (itemId, newCount) => {
    const updatedCounts = {
      ...itemCounts,
      [itemId]: newCount,
    };
    setItemCounts(updatedCounts);
    dispatch({
      type: "UPDATE_ITEM_COUNT",
      payload: { itemId, newItemCount: newCount },
    });
  };

  const removeItem = (itemId) => {
    const updatedCounts = {
      ...itemCounts,
      [itemId]: 0,
    };
    setItemCounts(updatedCounts);
    dispatch({
      type: "UPDATE_ITEM_COUNT",
      payload: { itemId, newItemCount: 0 },
    });
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: itemId,
    });
  };

  const calculateItemTotal = (item) => item.price * itemCounts[item.id];

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + calculateItemTotal(item),
      0
    );
  };

  const submitOrder = async (data, token) => {
    const url = "http://localhost:5000/order/placeOrder";

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("POST Error:", error);
      return { error: error.message };
    }
  };

  const showToast = (message, type) => {
    toast[type](message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleCheckout = async () => {
    if (!token) return;
    const orderItems = cartItems.map((item) => ({
      name: item.name,
      quantity: item.items,
      image: item.img,
      price: item.price,
    }));
    const data = {
      orderItems: orderItems,
      totalPrice: calculateTotalPrice().toFixed(2),
    };
    const response = await submitOrder(data, token);
    if (response.success) {
      showToast("Order Placed", "success");
      dispatch({
        type: "CLEAR_CART",
      })
    } else {
      showToast("Error", "error");
    }
  };

  return (
    <>
      <div className="">
        <ToastContainer />
        <div className="lg:grid lg:grid-cols-12">
          <div className="col-span-7">
            {/* START OF CART ITEMs */}
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                itemCount={itemCounts[item.id]}
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
                removeItem={removeItem}
                calculateItemTotal={calculateItemTotal}
              />
            ))}
            {/* END OF CART ITEMs */}
          </div>

          <div className="h-fit col-span-5 lg:mx-20 my-5 p-5 border">
            <div className="border-b pt-4 pb-8 px-2 space-y-3">
              <div className="flex align-middle items-center">
                <div className="flex items-center mb-4">
                  <input
                    defaultChecked
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-6 h-6 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    <p className="font-figtree text-gray-500 px-3 ">
                      Free Delivery{" "}
                      <span className="pl-3 text-sm text-[#4a4a4a]">
                        15-20 Business Days
                      </span>
                    </p>{" "}
                  </label>
                </div>
              </div>

              <div className="flex align-middle items-center">
                <div className="flex items-center mb-4">
                  <input
                    id="default-radio-1"
                    type="radio"
                    defaultValue=""
                    name="default-radio"
                    className="w-6 h-6 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    <p className="font-figtree text-gray-500 px-3 ">
                      Free Delivery{" "}
                      <span className="pl-3 text-sm text-[#4a4a4a]">
                        15-20 Business Days
                      </span>
                    </p>{" "}
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-between md:px-10 py-5 border-b">
              <div className="p-4 border">
                <img src={card} />
              </div>
              <div className="p-4 border">
                <img src={card} />
              </div>
              <div className="p-4 border">
                <img src={card} />
              </div>
              <div className="p-4 border">
                <img src={card} />
              </div>
            </div>

            <div className="text-center my-5 py-4 border font-figtree font-medium text-lg text-white bg-[#3a3a3a] cursor-pointer">
              <button onClick={handleCheckout}>
                PAY ${calculateTotalPrice().toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
