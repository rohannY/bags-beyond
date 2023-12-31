import users from "../../assets/images/user.jpg";
import edit from "../../assets/svg/edit.svg";

import { useState } from "react";
import Orders from "./orders";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";

export default function Account() {
  const [name, setName] = useState("Anakin Skywalker");
  const [email, setemail] = useState("chosenone@email.com");

  const [editMode, seteditMode] = useState(false);

  return (
    <>
      <div className="container mx-auto py-2 lg:py-5 font-figtree px-4">
        <div className="font-figtree my-10 px-2 lg:px-0 ">
          
          <Breadcrumbs className="py-2">
            <BreadcrumbItem href="/docs/components/button">
              Button
            </BreadcrumbItem>
            <BreadcrumbItem href="/docs/components/breadcrumbs">
              Breadcrumbs
            </BreadcrumbItem>
            <BreadcrumbItem href="/docs/components/card">Card</BreadcrumbItem>
            <BreadcrumbItem href="/docs/components/checkbox">
              Checkbox
            </BreadcrumbItem>
            <BreadcrumbItem href="/docs/components/code">Code</BreadcrumbItem>
          </Breadcrumbs>
          
          <div className="flex items-center align-middle space-x-10">
            <h1 className="text-5xl font-bold">Account Information</h1>
            <div className="w-8 h-8 cursor-pointer">
              <img
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
                  <img className="w-44 h-44 object-cover" src={users} />
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
                    <input type="submit" className="text-white font-semibold" />
                  </div>
                ) : null}
              </div>
            </form>
          </div>
          <div className="col-span-6 mx-2 md:mx-10">
            <Orders />
          </div>
        </div>
      </div>
    </>
  );
}
