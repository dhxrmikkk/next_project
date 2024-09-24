"use client";
import { useWixClient } from "@/hooks/useWixClient";
import Loader from "@/utils/Loader";
import Image from "next/image";
import { useState } from "react";

enum MODE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  RESET_PASSWORD = "RESET_PASSWORD",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
}

const LoginPage = () => {
  const [mode, setMode] = useState(MODE.LOGIN);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const formTitle =
    mode === MODE.LOGIN
      ? "Log In"
      : mode === MODE.REGISTER
      ? "Register"
      : mode === MODE.RESET_PASSWORD
      ? "Reset Password"
      : "Verify Email";

  const buttonTitle =
    mode === MODE.LOGIN
      ? "Login"
      : mode === MODE.REGISTER
      ? "Register"
      : mode === MODE.RESET_PASSWORD
      ? "Reset"
      : "Verify";

  const wixClient = useWixClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
  };
  return (
    <>
      <div className="mt-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            <h3 className="text-2xl sm:text-3xl md:text-3xl xl:text-4xl font-bold capitalize lg:hidden">
              {formTitle}
            </h3>
            <Image
              src="/loginimg.png"
              alt=""
              width={768}
              layout="responsive"
              height={768}
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex flex-col">
              <h3
                className="text-2xl mt-12 sm:text-3xl md:text-3xl xl:text-4xl font-bold capitalize hidden lg:flex"
                onSubmit={handleSubmit}
              >
                {formTitle}
              </h3>
              <form action="" className="mt-12 w-full">
                {mode === MODE.REGISTER ? (
                  <div className="flex flex-col mb-5 ">
                    <label
                      htmlFor="username"
                      className="text-sm text-[#979797]"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="emausernameil"
                      className="p-3.5 md:p-3 border border-gray-200 rounded-md mt-2 placeholder:text-gray-400 text-sm"
                      placeholder="username123"
                      autoComplete="off"
                    />
                  </div>
                ) : null}
                {mode !== MODE.EMAIL_VERIFICATION ? (
                  <div className="flex flex-col mb-5 ">
                    <label htmlFor="email" className="text-sm text-[#979797]">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="p-3.5 md:p-3 border border-gray-200 rounded-md mt-2 placeholder:text-gray-400 text-sm"
                      placeholder="example@gmail.com"
                      autoComplete="off"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col mb-5 ">
                    <label
                      htmlFor="verfication"
                      className="text-sm text-[#979797]"
                    >
                      Verification Code
                    </label>
                    <input
                      type="text"
                      name="emilCode"
                      id="verfication"
                      className="p-3.5 md:p-3 border border-gray-200 rounded-md mt-2 placeholder:text-gray-400 text-sm"
                      placeholder="example@gmail.com"
                      autoComplete="off"
                    />
                  </div>
                )}
                {mode === MODE.LOGIN || mode === MODE.REGISTER ? (
                  <div className="flex flex-col h-full justify-center mb-5 ">
                    <label
                      htmlFor="password"
                      className="text-sm text-[#979797]"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="p-3.5 md:p-3 border border-gray-200 rounded-md mt-2 placeholder:text-gray-400 text-sm"
                      placeholder="Enter your password"
                      autoComplete="off"
                    />
                  </div>
                ) : null}

                <div className="w-full mt-8">
                  <button
                    className="rounded-md font-bold py-3 px-4 hover:text-black hover:ring-1 hover:bg-white hover:ring-black text-[14px] bg-black text-white transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out w-full sm:w-1/3 md:w-1/3 lg:w-1/3 disabled:cursor-not-allowed disabled:bg-black/[0.3]"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader size={20} color={"#ffffff"} />
                    ) : (
                      buttonTitle
                    )}
                  </button>
                  {error && <div className="text-red-400">{error}</div>}
                  {mode === MODE.LOGIN && (
                    <div className="mt-4 text-gray-500 hover:text-black transition-all ease-in-out duration-300">
                      <span
                        className="cursor-pointer"
                        onClick={() => setMode(MODE.RESET_PASSWORD)}
                      >{`Forgot Password ?`}</span>
                    </div>
                  )}
                  {mode === MODE.LOGIN && (
                    <div className="mt-2 text-gray-500 hover:text-black transition-all ease-in-out duration-300">
                      <span
                        className="cursor-pointer"
                        onClick={() => setMode(MODE.REGISTER)}
                      >
                        {`Don't have an account ?`}
                      </span>
                    </div>
                  )}
                  {mode === MODE.REGISTER && (
                    <div className="mt-4 text-gray-500 hover:text-black transition-all ease-in-out duration-300">
                      <span
                        className="cursor-pointer"
                        onClick={() => setMode(MODE.LOGIN)}
                      >
                        {`Have an account ?`}
                      </span>
                    </div>
                  )}
                  {mode === MODE.RESET_PASSWORD && (
                    <div className="mt-4 text-gray-500 hover:text-black transition-all ease-in-out duration-300">
                      <span
                        className="cursor-pointer"
                        onClick={() => setMode(MODE.LOGIN)}
                      >{`Go back to login !`}</span>
                    </div>
                  )}
                  {message && (
                    <div className="mt-4 text-green-500 cursor-pointer hover:text-green-600 transition-all ease-in-out duration-300">
                      {message}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
