"use client";
import Image from "next/image";
import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

export default function Login({ whatsapp }: { whatsapp?: string }) {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });
  const router = useRouter();

  // const [isSubmitting, setIsSubmitting] = useState(false);

  // useEffect(() => {
  //   if (isSubmitting) {
  //     toast.loading("Loading...");
  //   } else {
  //     toast.dismiss();
  //   }
  // }, [isSubmitting]);

  return (
    <div className="container h-[120vh] mx-auto md:flex flex-col items-end justify-between md:flex-end w-full">
      <div className="w-screen h-[222px] relative md:hidden">
        <Image
          src={"/user/login.png"}
          fill={true}
          alt="login-mobile"
          className="object-cover w-full h-full md:hidden"
        />
      </div>

      <div className="flex flex-col justify-between lg:justify-center md:w-2/3 lg:w-1/3 md:left-0 lg:left-32 bg-white md:absolute">
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
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>

          <div className="relative">
            <div className="text-sm font-semibold flex w-full justify-between">
              <label className="font-semibold">Password</label>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              className="rounded-lg focus:border-black border border-[#737373] w-full p-3"
              placeholder="Enter your password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
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

          <div className="relative">
            <div className="text-sm font-semibold flex w-full justify-between">
              <label className="font-semibold">Confirm Password</label>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              className="rounded-lg focus:border-black border border-[#737373] w-full p-3"
              placeholder="Enter your password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
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

          {/* birth date */}
          <div className="text-sm">
            <label className="font-semibold">Birth Date</label>
            <input
              type="date"
              className="rounded-lg border focus:border-black border-[#737373] w-full p-3"
              placeholder="Enter your email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>

          {/* role */}
          <div className="text-sm">
            <label className="font-semibold">Role</label>
            <div className="px-8 rounded-lg border focus:border-black border-[#737373] w-full p-3">
              <select
                className="w-full outline-none focus:outline-none"
                onChange={(e) => setData({ ...data, email: e.target.value })}
              >
                <option value="student">Talent</option>
                <option value="teacher">Mentor</option>
                <option value="partner">Partner</option>
              </select>
            </div>
          </div>

          <div className="w-full">
            <button
              className="bg-primary text-white rounded-lg py-3 font-semibold w-full"
              onClick={() => {}}
            >
              Register
            </button>

            <p className="text-xs mt-3 text-center font-semibold">
              Already have an account?{" "}
              <span className="text-primary">
                <a href={"/login"}>Login</a>
              </span>{" "}
              here
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-[50%] h-[65vh] right-0 relative">
        <Image
          src={"/user/happy.svg"}
          fill={true}
          alt="login"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="hidden md:block w-[22%] h-[35vh] right-32 relative">
        <Image
          src={"/user/register.svg"}
          fill={true}
          alt="login"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
