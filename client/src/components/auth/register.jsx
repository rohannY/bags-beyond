import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from 'react-router-dom';

export default function Register() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const showToast = (message, type = "error") => {
    toast[type](message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const onSubmit = (data) => {
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("http://localhost:5000/user/reg", request)
      .then((response) => response.json())
      .then((data) => {
        if (data.success === false) {
          showToast(data.error);
        } else {
          showToast("Redirecting...", "success");
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
      })
      .catch(() => {
        showToast("An error occurred. Please try again later.");
      });
  };

  return (
    <>
      <div className="container mx-auto py-2 lg:py-5 font-figtree">
        <ToastContainer />
        <div className="my-5 md:my-10 flex flex-col items-center">
          <form
            className="md:border px-20 py-10 space-y-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-3">
              <p>Name</p>
              <input
                type="name"
                className="border px-10 py-4 outline-none"
                {...register("name")}
              />
            </div>
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
                className="w-full border px-10 py-4 outline-none"
              />
            </div>
            <p className="text-[#646464]">
              Already have an Account,{" "}
              <a href="/login" className="text-black font-semibold">
                Login
              </a>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
