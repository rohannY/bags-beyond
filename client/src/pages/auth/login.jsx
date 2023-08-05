import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from 'react-router-dom';

import {useAuthContext } from "../../hooks/useAuthContext"

export default function Login() {
  
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { dispatch } = useAuthContext()
  
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
          toast.error('Invalid Credentials', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        }else{
          toast.success('Redirecting...', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            
            dispatch({
              type: "LOGIN",
              payload: data,
          })

            setTimeout(()=>{
              navigate("/");
            },3000);
        }
      });
  };

  return (
    <div className="container mx-auto py-2 lg:py-5 font-figtree">
      <div className="my-5 md:my-10 flex flex-col items-center">
        <ToastContainer/>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:border border-[#818181] px-20 py-16   space-y-5"
        >
          <div className="space-y-3">
            <p>Email</p>
            <input
              type="email"
              className="border px-10 py-4 outline-none"
              {...register("email")}
            />
          </div>
          <div className="space-y-3">
            <p>Password</p>
            <input
              type="password"
              className="border px-10 py-4 outline-none"
              {...register("password")}
            />
          </div>
          <div className="bg-[#1e1e1e] text-white">
            <input
              type="submit"
              className="w-full border px-10 py-4 outline-none cursor-pointer"
            />
          </div>

          <p className="text-[#646464]">
            Dont have an Account,{" "}
            <a href="/register" className="text-black font-semibold">
              Register
            </a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}
