import test3 from "../assets/images/test3.jpg";
import Image from "next/image";
const Orders = () => {
  return (
    <>
      <div className="container mx-auto py-10 lg:py-0">
        <div>
          <div className>
            <p className="font-figtree font-semibold text-xl">My orders</p>

            <div className>
              
              <div className="grid grid-cols-8 px-2 py-8 border-b-2 space-x-2 lg:space-x-0">
                <div className="col-span-3">
                  <Image className="h-32 w-32 lg:h-48 lg:w-48 object-cover" src={test3} />
                </div>

                <div className="col-span-5 font-figtree space-y-2 md:space-y-4">
                  <h1 className="font-raleway font-semibold text-lg md:text-3xl w-full truncate">
                    Brique Saffiano leather bag
                  </h1>
                  <p className="text-[#9d9d9d] text-sm">
                    Product Code:XYZ241JSA
                  </p>
                  <p className="font-semibold text-2xl">$155</p>
                  <p className="font-medium text-base">Delivered On May 16</p>
                </div>
              </div>

              <div className="py-10 hidden">
                <p>Its Empty Out here</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
