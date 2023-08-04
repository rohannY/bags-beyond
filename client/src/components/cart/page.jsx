import test3 from "../assets/images/test3.jpg";
import card from "../assets/svg/card.svg";
import can from "../assets/svg/can.svg";
import Link from "next/link";
import Image from "next/image";
import { useState,useEffect } from "react";
const cart = () => {

  const [count,setCount]= useState(1);
  const [price, setPrice] = useState(155);

  useEffect(() => {
    setPrice(155 * count);
  }, [count]);

  return (
    <>
      <div className="container mx-auto py-2 lg:py-5">
        <div className="font-figtree my-10 px-2 lg:px-0">
          <h5 className="text-[#7f7f7f]">
            Home/
            <span className="font-semibold text-black cursor-pointer">
              Cart
            </span>
          </h5>
          <h1 className="mt-5 text-6xl font-bold">My Cart</h1>
        </div>

        <div className="font-figtree flex flex-col items-center space-y-5">
          <p className="text-xl md:text-3xl font-light font-satoshi">
            Opps, Its Empty right here
          </p>

          <div className="px-10 py-4 border border-[#1e1e1e] w-[10em]">
            <Link href="/list">
              <p>Shop Now</p>
            </Link>
          </div>
        </div>

        <div className="">
          <div className="lg:grid lg:grid-cols-12">
            <div className="col-span-7">
              <div className="grid grid-cols-8 px-2 py-10 border-b-2 space-x-2 lg:space-x-0">
                <div className="col-span-3 md:col-span-2 ">
                  <Image
                    className="h-32 w-32 lg:h-48 lg:w-48 object-cover"
                    src={test3}
                  />
                </div>

                <div className="col-span-4 md:col-span-5 font-figtree lg:px-10">
                  <h1 className="font-raleway font-semibold text-xl">
                    Brique Saffiano leather bag
                  </h1>
                  <p className="text-[#9d9d9d] text-sm">
                    Product Code:XYZ241JSA
                  </p>
                  <div className="py-3 flex space-x-5 items-center">
                    <p>Quantity</p>
                    <div className="flex items-center space-x-1">
                      <button className="text-2xl px-3 rounded-full" onClick={() => setCount(count =>count > 1 ? count - 1 : count)}>-</button>
                      <p className="text-xl">{count}</p>
                      <button className="text-2xl px-2 rounded-full" onClick={() => setCount(count =>count < 10 ? count + 1 : count )}>+</button>

                    </div>
                  </div>
                  <p className="font-semibold text-xl pt-2 lg:pt-10">${price}</p>
                </div>

                <div className="col-span-1 flex justify-center md:justify-end ">
                  <Image className="h-6 w-6 object-cover cursor-pointer" src={can} />
                </div>
              </div>
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
                  <Image src={card} />
                </div>
                <div className="p-4 border">
                  <Image src={card} />
                </div>
                <div className="p-4 border">
                  <Image src={card} />
                </div>
                <div className="p-4 border">
                  <Image src={card} />
                </div>
              </div>

              <div className="text-center my-5 py-4 border font-figtree font-medium text-lg text-white bg-[#3a3a3a] cursor-pointer">
                <p>PAY $155</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default cart;
