import React from "react";
import { Link } from "react-router-dom";

export default function error() {
  return (
    <>
      <section className="container mx-auto my-12 font-raleway flex justify-center">
        <div className="text-center w-fit">
          <div className="four_zero_four_bg w-[50em]">
            <h1 className="text-8xl">404</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-4xl font-semibold">Look like you're lost</h3>
            <p>the page you are looking for not avaible!</p>
            <Link to="/" className="bg-green-500 m-5 px-10 py-5 text-white" >
                Go to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
