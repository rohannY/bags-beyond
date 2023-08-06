import test2 from "../../assets/images/test2.jpg";
import test4 from "../../assets/images/test4.jpg";
import tick from "../../assets/svg/tick.svg";
import plus from "../../assets/svg/plus.svg";
import minus from "../../assets/svg/minus.svg";

import { useLocation } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Product() {
  const { state } = useLocation();
  const data = state.productData;
  console.log(data);
  const { dispatch } = useCartContext();

  const handleAddToBag = () => {
    if (data) {
      dispatch({
        type: "ADD_TO_CART",
        payload: data,
      });
      toast.success("Product Added", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <ToastContainer />
        <div className="md:grid md:grid-cols-12 px-4 md:px-0 py-5 md:py-8">
          <div className="hidden md:block md:col-span-1">
            <div className="col-span-1 space-y-4 px-4">
              <img
                alt="abc"
                className="h-20 w-20 object-cover object-top md:object-cover hover:border-2 border-[#1e1e1e]"
                src={test2}
              />
              <img
                alt="abc"
                className="h-20 w-20 object-cover object-top md:object-cover hover:border-2 border-[#1e1e1e]"
                src={test2}
              />
              <img
                alt="abc"
                className="h-20 w-20 object-cover object-top md:object-cover hover:border-2 border-[#1e1e1e]"
                src={test2}
              />
              <img
                alt="abc"
                className="h-20 w-20 object-cover object-top md:object-cover hover:border-2 border-[#1e1e1e]"
                src={test2}
              />
              <img
                alt="abc"
                className="h-20 w-20 object-cover object-top md:object-cover hover:border-2 border-[#1e1e1e]"
                src={test2}
              />
            </div>
          </div>

          <div className="col-span-5">
            <img
              alt="abc"
              className="h-[30em] md:h-[50em] object-cover object-top md:object-cover"
              src={data.image[0]}
            />
          </div>

          <div className="col-span-5 py-6 md:py-0 md:px-10 font-figtree">
            <div className="space-y-3 md:border-b-2 md:pb-6">
              <h1 className="font-raleway font-semibold text-xl md:text-3xl">
                {data.name}
              </h1>
              <p className="text-[#9d9d9d] text-sm ">
                Product Code:{data._id.slice(0, 10)}
              </p>
              <p className="font-semibold text-xl md:text-3xl">${data.price}</p>
            </div>
            <div className="space-y-4 py-2 md:py-6 md:border-b-2">
              <p className="font-figtree text-lg">
                Size:<span className="font-semibold px-1">S</span>
              </p>
              <div className="flex space-x-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#525252] bg-[#f4f4f4]">
                  <span className="text-black text-base">S</span>
                </div>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#525252] bg-[#ffffff]">
                  <span className="text-black text-base">L</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 py-2 md:py-6">
              <p className="font-figtree text-lg">
                Color:<span className="font-semibold px-1">Blue</span>
              </p>
              <div className="flex space-x-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500">
                  <img alt="abc" src={tick} />
                </div>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500"></div>
              </div>
            </div>

            <div
              className="md:w-1/2 my-4 cursor-pointer"
              onClick={handleAddToBag}
            >
              <p className="font-raleway font-semibold text-sm text-center py-4 bg-[#d6d6d6]">
                ADD TO BAG
              </p>
            </div>

            <div className="expandable py-8 space-y-4 border-b-2">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">PRODUCT DETAILS</h3>
                <img alt="abc" className="cursor-pointer h-4 w-4" src={minus} />
              </div>
              <p className="font-light ">{data.description}</p>
            </div>

            <div className="expandable py-8 space-y-4 border-b-2">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">REVIEWS</h3>
                <img alt="abc" className="cursor-pointer h-4 w-4" src={plus} />
              </div>
              <p className="font-light hidden">
                That is just the way Dave and Andy think. That meeting wasn't
                something keeping them from programming. It was programming. And
                it was programming that could be improved. I know they think
                this way because it is tip number two: Think About Your Work.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
