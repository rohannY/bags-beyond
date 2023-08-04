"use client";

import users from "../assets/images/user.jpg";
import edit from "../assets/svg/edit.svg";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Orders from "./orders";

const user = () => {
  const [name, setName] = useState("Anakin Skywalker");
  const [email, setemail] = useState("chosenone@email.com");

  const [editMode, seteditMode] = useState(false);

  return (
    <>
      <div className="container mx-auto py-2 lg:py-5 font-figtree">
        <div className="font-figtree my-10 px-2 lg:px-0">
          <h5 className="text-[#7f7f7f]">
            Home/
            <span className="font-semibold text-black cursor-pointer">
              Account
            </span>
          </h5>
          <div className="flex items-center align-middle space-x-10">
            <h1 className="mt-5 text-5xl font-bold">Account Information</h1>
            <div className="w-12 h-12 mt-12 cursor-pointer">
              <Image
                className="object-cover"
                src={edit}
                onClick={() => {
                  seteditMode(true);
                }}
              />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-12">
          <div className="col-span-6">
            <form className="md:grid md:grid-cols-3 border border-indigo-100 py-10">
              <div className="col-span-1 px-10 mb-6 flex justify-center md:block">
                <div className="border border-red-400 p-2 w-48 h-48">
                  <Image className="w-44 h-44 object-cover" src={users} />
                </div>
              </div>

              <div className="col-span-2 space-y-5">
                <div className="flex flex-col px-10 space-y-2">
                  <p className="text-lg font-semibold">Name</p>
                  <div className="px-5 py-3 border w-full">
                    {editMode ? (
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="outline-none w-full "
                      />
                    ) : (
                      <p>{name}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col px-10 space-y-2">
                  <p className="text-lg font-semibold">Email</p>
                  <div className="px-5 py-3 border w-full">
                    {editMode ? (
                      <input
                        value={email}
                        type="email"
                        onChange={(e) => setemail(e.target.value)}
                        className="outline-none w-full "
                      />
                    ) : (
                      <p>{email}</p>
                    )}
                  </div>
                </div>

                {editMode ? (
                  <div className="py-4 mx-10 cursor-pointer bg-[#1e1e1e] text-center">
                    <input
                      type="submit"
                      className="text-white font-semibold"
                    />
                  </div>
                ) : null}
              </div>
            </form>
          </div>
          <div className="col-span-6 mx-2 md:mx-10">
            <Orders/>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default user;
