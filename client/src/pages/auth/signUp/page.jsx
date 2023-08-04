import Link from "next/link";
const signUp = () => {
  return (
    <>
      <div className="container mx-auto py-2 lg:py-5 font-figtree">
        <div className="my-5 md:my-10 flex flex-col items-center">
          <form className="md:border px-20 py-10 space-y-5">
            <div className="space-y-3">
              <p>Name</p>
              <input type="name" className="border px-10 py-4 outline-none" />
            </div>
            <div className="space-y-3">
              <p>Email</p>
              <input type="email" className="border px-10 py-4 outline-none" />
            </div>
            <div className="space-y-3">
              <p>Password</p>
              <input
                type="password"
                className="border px-10 py-4 outline-none"
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
              <Link href="/auth/signin" className="text-black font-semibold">
                Login
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default signUp;
