import { Link } from "react-router-dom";

import { useCartContext } from "../../context/cartContext";
import CartDetails from "./carttt";

export default function Cart() {
  const { cartItems } = useCartContext();

  return (
      <div className="container mx-auto px-10 py-2 md:py-5">
        <div className="font-figtree my-10 px-2 lg:px-0">
          <h5 className="text-[#7f7f7f]">
            Home/
            <span className="font-semibold text-black cursor-pointer">
              Cart
            </span>
          </h5>
          <h1 className="mt-5 text-6xl font-bold">My Cart</h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="font-figtree flex flex-col items-center space-y-5">
            <p className="text-xl md:text-3xl font-light font-satoshi">
              Opps, Its Empty right here
            </p>

            <div className="px-10 py-4 border border-[#1e1e1e] w-[10em]">
              <Link to="/list/all">
                <p>Shop Now</p>
              </Link>
            </div>
          </div>
        ) : (
          <CartDetails data={cartItems} />
        )}
      </div>
  );
}
