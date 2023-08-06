import React, { useState } from "react";
import card from "../../assets/svg/card.svg";
import can from "../../assets/svg/can.svg";
import { useCartContext } from "../../context/cartContext";

export default function CartDetails({ data: cartItems }) {
  const [cart, setCart] = useState(cartItems);
  const { dispatch } = useCartContext();

  const [itemCounts, setItemCounts] = useState(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const increaseCount = (itemId) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: prevCounts[itemId] + 1,
    }));
  };
  
  const decreaseCount = (itemId) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: Math.max(prevCounts[itemId] - 1, 0),
    }));
  };
  
  

  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: itemId,
    });
  };

  return (
    <>
      <div className="">
        <div className="lg:grid lg:grid-cols-12">
          <div className="col-span-7">
            {/* START OF CART ITEMs */}
            {cart.map((item) => (
              <div
                className="grid grid-cols-8 px-2 py-10 border-b-2 space-x-2 lg:space-x-0"
                key={item.id}
              >
                <div className="col-span-3 md:col-span-2 ">
                  <img
                    className="h-32 w-32 lg:h-48 lg:w-48 object-cover"
                    src={item.img[0]}
                  />
                </div>

                <div className="col-span-4 md:col-span-5 font-figtree lg:px-10">
                  <h1 className="font-raleway font-semibold text-xl">
                    {item.name}
                  </h1>
                  <p className="text-[#9d9d9d] text-sm">
                    Product Code:{item.id.slice(0, 10)}
                  </p>
                  <div className="py-3 flex space-x-5 items-center">
                    <p>Quantity</p>
                    <div className="flex items-center space-x-1">
                      <button
                        className="text-2xl px-3 rounded-full"
                        onClick={() => decreaseCount(item.id)}
                      >
                        -
                      </button>
                      <p className="text-xl">{itemCounts[item.id]}</p>
                      <button
                        className="text-2xl px-2 rounded-full"
                        onClick={() => increaseCount(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="font-semibold text-xl pt-2 lg:pt-10">
                    ${item.price * itemCounts[item.id]}
                  </p>
                </div>

                <div className="col-span-1 flex justify-center md:justify-end ">
                  <img
                    className="h-6 w-6 object-cover cursor-pointer"
                    src={can}
                    onClick={() => removeItem(item.id)}
                  />
                </div>
              </div>
            ))}
            {/* END OF CART ITEMs */}
          </div>

          <div className="col-span-5 lg:mx-20 my-5 p-5 border">
            <div className="border-b pt-4 pb-8 px-2 space-y-4">
              <div className="flex align-middle items-center">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-[#363636]">
                  {/* <div className="bg-[#363636] w-3 h-3 rounded-full"></div> */}
                </div>
                <p className="font-figtree px-5 ">
                  Free Delivery{" "}
                  <span className="pl-5 text-sm text-[#c4c4c4]">
                    15-20 Business Days
                  </span>
                </p>
              </div>

              <div className="flex align-middle items-center">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-[#363636]">
                  <div className="bg-[#363636] w-3 h-3 rounded-full"></div>
                </div>
                <p className="font-figtree px-5 ">
                  Free Delivery{" "}
                  <span className="pl-5 text-sm text-[#c4c4c4]">
                    15-20 Business Days
                  </span>
                </p>
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
              <p>PAY $155</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
