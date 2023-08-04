"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { setCookie } from "cookies-next";
import { useRouter } from 'next/navigation'


export default function signIn() {
  
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(false);
  const router = useRouter()

  const onSubmit = (data) => {
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch("http://localhost:5000/user/login", request)
      .then((response) => response.json())
      .then((data) => {
        if (data.success==false){
          setError(true);
          setTimeout(() => setError(false), 3000)
        }else{
          setCookie("token", data.token, { maxAge: 60 * 6 * 24 });
          router.push('/');
        }
      });
  };

  return (
    <div className="container mx-auto py-2 lg:py-5 font-figtree">
      <div className="my-5 md:my-10 flex flex-col items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:border border-[#818181] px-20 py-16   space-y-5"
        >
          <div className="space-y-3">
            <p>Email</p>
            <input
              type="email"
              {...register("email")}
              className="border px-10 py-4 outline-none"
            />
          </div>
          <div className="space-y-3">
            <p>Password</p>
            <input
              type="password"
              {...register("password")}
              className="border px-10 py-4 outline-none"
            />
          </div>
          {error ? (
            <p className="text-center py-3 bg-red-400 border-red-800 text-white">
              Invalid Credentials or Email
            </p>
          ) : null}
          <div className="bg-[#1e1e1e] text-white">
            <input
              type="submit"
              className="w-full border px-10 py-4 outline-none cursor-pointer"
            />
          </div>

          <p className="text-[#646464]">
            Dont have an Account,{" "}
            <Link href="/auth/signUp" className="text-black font-semibold">
              Register
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}
