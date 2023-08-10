import React, { useState } from "react";
import card from "../../assets/svg/card.svg";
import { useCartContext } from "../../context/cartContext";
import CartItem from "./cartItems";

export default function CartDetails({ data: cartItems }) {
  const { dispatch } = useCartContext();

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
      [itemId]: Math.max(itemCounts[itemId] - 1, 1),
    };
    setItemCounts(updatedCounts);
    dispatch({
      type: "UPDATE_ITEM_COUNT",
      payload: { itemId, newItemCount: updatedCounts[itemId] },
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

  return (
    <>
      <div className="">
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
                    checked
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
              <p>PAY ${calculateTotalPrice().toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
