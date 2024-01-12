"use client";
import Image from "next/image";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";

export default function Login({ whatsapp }: { whatsapp?: string }) {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const cookies = new Cookies();

  useEffect(() => {
    if (isSubmitting) {
      toast.loading("Loading...");
    } else {
      toast.dismiss();
    }
  }, [isSubmitting]);

  const handleLogin = async () => {
    setIsSubmitting(true);
    const res = await fetch("http://127.0.0.1:8080/" + "api/v1/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setTimeout(() => {
        toast.success("Successfully logged in!");
      }, 500);
      cookies.set("token", data.token);
      router.push("/");
      router.refresh()
    } else {
      setTimeout(() => {
        toast.error("Failed to login!");
      }, 500);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="container h-[85vh] mx-auto md:flex md:flex-start w-full">
      <div className="w-screen h-[222px] relative md:hidden">
        <Image
          src={"/user/login.png"}
          fill={true}
          alt="login-mobile"
          className="object-cover w-full h-full md:hidden"
        />
      </div>

      <div className="hidden md:block w-[50%] h-[65vh] relative">
        <Image
          src={"/user/happy.svg"}
          fill={true}
          alt="login"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col justify-between lg:justify-center md:w-2/3 lg:w-1/3 md:right-0 lg:right-32 bg-white md:absolute">
        <div className="container flex flex-col mx-auto py-10 md:py-20 px-5 md:px-10 gap-6">
          <div>
            <Image
              src={"/logo.png"}
              width={150}
              height={40}
              alt="logo"
              className="object-cover"
            />
            <h1 className="text-3xl font-bold lg:text-5xl">
              Welcome to <span className="text-primary">Experteez</span>
            </h1>
          </div>

          <div>
            <label className="text-sm font-semibold">Email</label>
            <input
              type="text"
              className="rounded-lg border focus:border-black border-[#737373] w-full p-3"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            <div className="text-sm font-semibold flex w-full justify-between">
              <label className="font-semibold">Password</label>
              <p
                className="text-primary cursor-pointer"
                onClick={() => router.push("/forgotpassword")}
              >
                Forgot password?
              </p>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              className="rounded-lg focus:border-black border border-[#737373] w-full p-3"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <AiOutlineEye
                className="text-[#737373] text-xl absolute right-3 bottom-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="text-[#737373] text-xl absolute right-3 bottom-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>

          <div className="w-full">
            <button
              className="bg-primary text-white rounded-lg py-3 font-semibold w-full"
              onClick={handleLogin}
            >
              Login
            </button>

            <p className="text-xs mt-3 text-center font-semibold">
              {"Don't"} have account?{" "}
              <span className="text-primary">
                <a href={"/register"}>Register</a>
              </span>{" "}
              here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
