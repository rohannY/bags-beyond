import test from "../assets/images/test.jpg";
import test2 from "../assets/images/test2.jpg";
import test3 from "../assets/images/test3.jpg";
import test4 from "../assets/images/test4.jpg";
import test5 from "../assets/images/test5.jpg";
import test6 from "../assets/images/test6.jpg";
import test7 from "../assets/images/test7.jpg";

const Main = () => {
  return (
    <>
      <div className="container mx-auto flex w-full justify-center py-2">
        <h1 className="font-clash text-center py-4 bg-red-400 w-full lg:w-1/3 text-white">
          If you see this, that means we are still working on this
        </h1>
      </div>
      <div className="container mx-auto py-5 w-full text-black font-figtree">
        <div className="h-auto">
          <div className="md:grid md:grid-cols-5 flex flex-col">
            <div className="col-span-3 mx-2">
              <div className="w-full border">
                <img
                  className="h-[25em] w-full md:h-[46em] object-cover"
                  src={test3}
                />
              </div>
              <h2 className="text-black text-4xl my-5 md:text-6xl font-raleway font-semibold leading-relaxed">
                Elevate Your Looks
                <br />
                With Our Bags
              </h2>
            </div>

            <div className="col-span-2 mx-2">
              <div className="w-full border">
                <img
                  className="h-[25em] w-full md:h-[46em] object-cover"
                  src={test}
                />
              </div>
              <h2 className="text-black text-base md:text-lg my-5">
                Welcome to Bags & Beyond, the ultimate Destination For Bag
                Lovers. We Offer A Vast Collection of Bags To Cater To All Your
                Needs, From Everyday Essentials To Stylish Statement Pieces
              </h2>
              <div className="px-10 py-4 border w-[10em]">
                <p>
                  <a href="/list">Shop Now</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[42em] md:h-[50em] my-10 mx-2">
          <img
            className="h-[25em] w-full md:h-[50em] object-cover object-right md:object-cover  -z-10"
            src={test2}
          />
          <div className="mt-10 md:-mt-[41.2em] md:ml-20 w-80 text-[#0d0d0d] space-y-5">
            <h1 className="text-xl md:text-2xl font-semibold">
              About Bags & Beyond
            </h1>
            <p className="text-base md:text-lg leading-[2]">
              Bags and Beyond is a Retail Store That Specializes In Selling Bags
              Of Various Types, Sizes, Colors, And Designs
            </p>
            <div className="px-10 py-4 md:px-0 md:py-0 border w-[10em]">
              <p className="md:underline underline-offset-4 cursor-pointer hover:text-indigo-200">
                <a href="/product">Shop Now</a>
              </p>
            </div>
          </div>
        </div>

        <div className="h-[70em] md:h-[70em] space-y-6 my-10">
          <div className="flex flex-col md:grid md:grid-cols-3 space-y-5 md:space-y-0 md:space-x-6 h-[35em]">
            <div className="col-span-1 px-3">
              <h1 className="font-clash text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1]">
                Explore Now With Our Best Collection
              </h1>
              <div className="mt-12">
                <ul className="flex flex-col space-y-2 md:space-y-5 font-satoshi justify-center font-medium text-[#3e3e3e] text-base md:text-2xl ">
                  <li>
                    <a href="/">Bagpack</a>
                  </li>
                  <li>
                    <a href="/">Messenger Bags</a>
                  </li>
                  <li>
                    <a href="/">Briefcase</a>
                  </li>
                  <li>
                    <a href="/">Totes</a>
                  </li>
                  <li>
                    <a href="/">Clutches</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-1">
              <img
                className="h-[25em] w-full md:h-[35em] object-cover px-2 md:px-0"
                src={test4}
              />
            </div>
            <div className="col-span-1">
              <img
                className="h-[25em] w-full md:h-[35em] object-cover px-2 md:px-0"
                src={test5}
              />
            </div>
          </div>

          <div className="hidden md:grid md:grid-cols-3 space-x-6 h-[35em]">
            <div className="col-span-1">
              <img className="h-[35em] w-full object-cover -z-10" src={test6} />
            </div>
            <div className="col-span-1">
              <img className="h-[35em] w-full object-cover -z-10" src={test7} />
            </div>
          </div>
        </div>

        <div className="h-[25em] bg-[#1e1e1e] mt-12 mx-2 md:mx-0">
          <div className="grid md:grid-cols-2 px-20 py-28 text-white space-y-16 md:space-y-0">
            <div className="col-span-1 text-center md:border-r-2">
              <p className="font-semibold text-2xl mb-5">
                SIGN UP TO OUR NEWSLETTER!
              </p>
              <p className="text-[#aeaeae] font-medium mb-10">
                $10 Off Your First Order
              </p>
              <div className="flex justify-center">
                <div className="px-10 py-5 bg-white w-[12em] hover:bg-[#dadada]">
                  <p className=" cursor-pointer font-inter font-semibold text-sm text-black ">
                    Subscribe
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-1 text-center hidden md:block">
              <p className="font-semibold text-2xl mb-5">NEWS</p>
              <p className="text-[#aeaeae] font-medium mb-10">
                Discover All Our News
              </p>
              <div className="flex justify-center">
                <div className="px-10 py-5 bg-[#1e1e1e] w-[12em] border hover:bg-[#0e0e0e]">
                  <p className=" cursor-pointer font-inter font-semibold text-sm text-white ">
                    Subscribe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
