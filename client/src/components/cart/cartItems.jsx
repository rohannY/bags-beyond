import React from "react";
import can from "../../assets/svg/can.svg";

export default function CartItem({
  item,
  itemCount,
  decreaseCount,
  increaseCount,
  removeItem
}) {
  return (
    <>
      <div
        className="grid grid-cols-8 px-2 py-10 border-b-2 space-x-2 lg:space-x-0"
        key={item.id}
      >
        <div className="col-span-3 md:col-span-2 ">
          <img
            className="h-32 w-32 lg:h-48 lg:w-48 object-cover"
            src={item.img[0]}
            alt={item.name}
          />
        </div>

        <div className="col-span-4 md:col-span-5 font-figtree lg:px-10">
          <h1 className="font-raleway font-semibold text-xl">{item.name}</h1>
          <p className="text-[#9d9d9d] text-sm">
            Product Code: {item.id.slice(0, 10)}
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
              <p className="text-xl">{itemCount}</p>
              <button
                className="text-2xl px-2 rounded-full"
                onClick={() => increaseCount(item.id)}
              >
                +
              </button>
            </div>
          </div>
          <p className="font-semibold text-xl pt-2 lg:pt-10">
            ${item.price * itemCount}
          </p>
        </div>

        <div className="col-span-1 flex justify-center md:justify-end ">
          <img
            className="h-6 w-6 object-cover cursor-pointer"
            src={can}
            alt="Remove"
            onClick={() => removeItem(item.id)}
          />
        </div>
      </div>
    </>
  );
}
