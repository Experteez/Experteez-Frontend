"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import MenuIcon from "./MenuIcon";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [project, setProject] = useState(true);
  const [mentor, setMentor] = useState(false);
  const [chat, setChat] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = -100; // Adjust this value based on your preference
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const scrollTo = targetPosition + offset;

      window.scrollTo({
        top: scrollTo,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setOpen(false);
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    setOpen(false);
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
            open ? "translate-y-0 bg-white border-2 py-6 gap-6 border-gray-100" : "-translate-y-full border-none"
          } lg:translate-y-0 z-40 flex flex-col lg:flex-row justify-between lg:items-center w-[100%] lg:w-[60%]`}
        >
          <ul
            className={`font-semibold flex flex-col gap-4 px-4 lg:p-0 mt-4 lg:bg-transparent rounded-lg lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-2 lg:border-0`}
          >
            <li
              onClick={() => {
                setMentor(false);
                setProject(true);
                setChat(false);
              }}
              className={`h-12 cursor-pointer ${
                project && "pb-2 lg:border-b-[1px] border-primary text-primary"
              }`}
            >
              <a
                className="block blur-0 py-2 px-3 rounded lg:bg-transparent lg:p-0 "
                aria-current="page"
              >
                Find Project
              </a>
            </li>
            <li
              className={`cursor-pointer ${
                mentor && "pb-2 lg:border-b-[1px] border-primary text-primary"
              } h-12`}
              onClick={() => {
                setMentor(true);
                setProject(false);
                setChat(false);
              }}
            >
              <a
                className="block py-2 blur-0 px-3 rounded lg:bg-transparent lg:p-0 "
                aria-current="page"
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
                className={`${open? "inline-flex" : "hidden -z-50 lg:inline-flex"} block py-2 blur-0 px-3 rounded lg:bg-transparent lg:p-0`}
                aria-current="page"
              >
                Chat Pofil
              </a>
            </li>
          </ul>
          <div className="self-center">
            <Link
              href={"/login"}
              className={`${open? "inline-flex" : "hidden -z-50"} lg:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary/90 border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500`}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
