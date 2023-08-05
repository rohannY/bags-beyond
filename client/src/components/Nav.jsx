import logo from "../assets/svg/logo.svg";
import acc from "../assets/svg/acc.svg";
import cart from "../assets/svg/cart.svg";
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const { isAuthenticated,dispatch } = useAuthContext();

  const handleClick = () => setIsClicked((prevIsClicked) => !prevIsClicked);
  
  const handleLogout = () =>{
    setIsClicked(false);
    dispatch({type: "LOG OUT"})
    window.location.reload();
  }


  return (
    <>
      <div className="container mx-auto py-2 md:py-5 border-b-2">
        <nav className="text-black hidden lg:block">
          <div className="flex items-center justify-between  font-figtree">
            <a
              href="/"
              className="flex px-3 py-3 font-poppins font-light text-3xl text-indigo-700 space-x-3 ml-3 items-center align-middle"
            >
              <img src={logo} className="h-5" />
            </a>

            <div className="px-10">
              <ul className="flex justify-center space-x-10 font-medium text-lg">
                <li>
                  <a href="/" className="underline underline-offset-4">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/list/bagpack">Bagpack</a>
                </li>
                <li>
                  <a href="/list/messenger-bags">Messenger Bags</a>
                </li>
                <li>
                  <a href="/list/breifcase">Briefcase</a>
                </li>
                <li>
                  <a href="/list/totes">Totes</a>
                </li>
                <li>
                  <a href="/list/clutches">Clutches</a>
                </li>
              </ul>
            </div>
            {/* <div className="flex items-center space-x-3 mr-3">
                <p>Cart</p>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1e1e1e]">
                  <span className="text-white text-base">0</span>
                </div>
              </div> */}
            <div className="flex align-middle items-center space-x-6 mr-10">
              <span>
                <img
                  src={acc}
                  onClick={handleClick}
                  className="h-6 hover:bg-blue-100"
                />
              </span>

              {isClicked && (
                <div className="absolute right-2 top-[85px] h-16 w-40 border ">
                  <ul className="text-center">
                    {isAuthenticated ? (
                      <>
                      <li><a href="/acc"> Account </a></li>
                      <li onClick={handleLogout}>Logout</li>
                      </>
                    ) : (
                      <>
                        <li>Sign In</li>
                        <li>Register</li>
                      </>
                    )}
                  </ul>
                </div>
              )}

              <div>
                <div className="w-2 h-2 bg-red-500 absolute rounded-full"></div>
                <a href="/cart">
                  <img src={cart} className="h-6" />
                </a>
              </div>
            </div>
          </div>
        </nav>

        <nav className="text-black lg:hidden">
          <div className="flex items-center justify-between  font-figtree">
            <div className="flex px-3 py-3 font-poppins font-light text-base lg:text-3xl text-indigo-700 space-x-3 ml-3 items-center align-middle">
              <img src={logo} className="h-6" />
            </div>

            <div className="flex items-center space-x-3 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
          <div className="text-center font-figtree py-2 hidden">
            <ul className="space-y-3">
              <li>
                <a href="/" className="underline underline-offset-4">
                  Home
                </a>
              </li>
              <li>
                <a href="/list/bagpack">Bagpack</a>
              </li>
              <li>
                <a href="/list/messenger-bags">Messenger Bags</a>
              </li>
              <li>
                <a href="/list/breifcase">Briefcase</a>
              </li>
              <li>
                <a href="/list/totes">Totes</a>
              </li>
              <li>
                <a href="/list/clutches">Clutches</a>
              </li>
              <li>
                <a href="/account">Account</a>
              </li>
              <li>
                <a href="/cart">Cart</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
