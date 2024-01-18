"use client";
import { useState } from "react";
import Image from "next/image";
import MenuIcon from "./MenuIcon";
import Link from "next/link";
import Cookies from "universal-cookie";
import { usePathname, useRouter } from "next/navigation";

interface NavbarProps {
  login?: boolean;
}

export default function Navbar(login: NavbarProps) {
  const pathname = usePathname();
  const cookie = new Cookies();
  const [mentor, setMentor] = useState<boolean>(pathname.substring(0,7) == "/mentor");
  const [project, setProject] = useState<boolean>(pathname == "/");
  const [chat, setChat] = useState<boolean>(pathname == "/chat");

  const handleSignOut = () => {
    cookie.remove("token");
    window.location.reload();
  };

  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed bg-white h-16 lg:h-fit top-0 z-50 start-0 w-full border-gray-200`}
    >
      <div className="max-w-screen-xl z-50 flex flex-wrap justify-between lg:justify-normal items-center mx-auto p-4 px-8">
        <a
          href="/"
          className="flex w-1/3  z-50 cursor-pointer justify-start gap-4 items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src="/logo.png" width={150} height={40} alt="logo" />
        </a>

        <div className="inline-flex items-center p-2 w-10 h-10 z-50 justify-center text-sm">
          <MenuIcon
            isOpen={open}
            handleToggle={() => setOpen((prev) => !prev)}
          />
        </div>

        <div
          className={`transform transition-transform duration-300 ease-in-out ${
            open
              ? "translate-y-0 bg-white border-2 py-6 gap-6 border-gray-100"
              : "-translate-y-full border-none"
          } lg:translate-y-0 z-40 flex flex-col lg:flex-row justify-between lg:items-center w-[100%] lg:w-[60%]`}
        >
          <ul
            className={`font-semibold flex flex-col gap-4 px-4 lg:p-0 mt-4 lg:bg-transparent rounded-lg lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-2 lg:border-0`}
          >
            <li
              onClick={() => {
              }}
              className={`h-12 cursor-pointer ${
                project && "pb-2 lg:border-b-[1px] border-primary text-primary"
              }`}
            >
              <a
                className="block blur-0 py-2 px-3 rounded lg:bg-transparent lg:p-0 "
                aria-current="page"
                href="/"
              >
                Find Project
              </a>
            </li>
            <li
              className={`cursor-pointer ${
                mentor && "pb-2 lg:border-b-[1px] border-primary text-primary"
              } h-12`}
              onClick={() => {
              }}
            >
              <a
                className="block py-2 blur-0 px-3 rounded lg:bg-transparent lg:p-0 "
                aria-current="page"
                href="/mentor"
              >
                Find Mentor
              </a>
            </li>
            <li
              className={`cursor-pointer ${
                chat && "pb-2 lg:border-b-[1px] border-primary text-primary"
              } h-12`}
              onClick={() => {
                setMentor(false);
                setProject(false);
                setChat(true);
              }}
            >
              <a
                className={`${
                  open ? "inline-flex" : "hidden -z-50 lg:inline-flex"
                } block py-2 blur-0 px-3 rounded lg:bg-transparent lg:p-0`}
                aria-current="page"
              >
                Chat Miez
              </a>
            </li>
          </ul>

          {login.login ? (
            <div
              className={`gap-0 ${
                open ? "inline-flex px-4 lg:p-0" : "hidden lg:inline-flex"
              }`}
            >
              <div className="flex items-center gap-3 relative cursor-pointer">
                <div className="w-9 aspect-square bg-slate-300 rounded-full relative overflow-hidden">
                  <Image
                    src={"/user/ava-dummy.png"}
                    fill={true}
                    alt="profile"
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="font-league font-semibold text-[1rem] w-24">
                  Khanza
                </p>
              </div>
              <button
                className="bg-red-500 p-2 flex items-center justify-center text-white rounded-lg"
                onClick={handleSignOut}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="self-center">
              <Link
                href={"/login"}
                className={`${
                  open ? "inline-flex" : "hidden -z-50"
                } lg:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary/90 border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500`}
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
