"use client";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import Category from "./Category";
import Testi from "./Testi";

export default function Mentor() {
  return (
    <div className="flex flex-col gap-36">
      <section className="py-4 flex gap-24 items-center px-12 lg:px-20">
        <Image
          src={"/mentor/mentor-hero.svg"}
          alt="mentor-hero"
          className="hidden lg:block"
          width={532}
          height={600}
        />

        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <h1 className="text-5xl md:text-6xl font-semibold">
            Excited to Launch into Your Next{" "}
            <div className="bg-primary w-fit text-white py-4 px-4 rounded-2xl">
              Project?
            </div>
          </h1>
          <div className="w-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 justify-between bg-white shadow-xl py-2 px-8 rounded-full lg:w-2/3">
                <AiOutlineSearch className="hidden lg:block text-6xl" />
                <input
                  className=" h-12 md:px-4 w-full rounded-lg text-base outline-none"
                  type="text"
                  placeholder="Search for a Mentor"
                />
                <button className="bg-primary hover:bg-primary/90 text-white rounded-lg px-4 h-12">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <Image
          src="/mentor/star1.svg"
          className="absolute top-28 right-10 lg:right-44"
          alt="star"
          width={60}
          height={100}
        />
        <Image
          src={"/mentor/contact.svg"}
          className="absolute hidden top-[32rem] right-12"
          alt="mentor"
          width={140}
          height={600}
        />
      </section>

      <section className="bg-primary h-full py-12 flex flex-col gap-4 items-center text-white">
        <h1 className="font-normal text-center text-5xl">
          Our <span className="font-semibold">Partner</span> Project
        </h1>
        <p>These are the companies that have joined us</p>

        <div className="bg-white rounded-lg text-black py-4 px-16 flex flex-wrap justify-center gap-16">
          <Image
            src={"/mentor/google.png"}
            alt="google"
            width={167}
            height={100}
          />
          <Image src={"/mentor/aws.png"} alt="aws" width={123} height={50} />
          <Image
            src={"/mentor/microsoft.png"}
            alt="microsoft"
            width={230}
            height={100}
          />
          <Image
            src={"/mentor/apple.png"}
            alt="apple"
            width={82}
            height={100}
          />
          <Image src={"/mentor/ibm.png"} alt="ibm" width={74} height={100} />
        </div>

        <Image
          src={"/mentor/section2.svg"}
          alt="star"
          width={60}
          height={100}
          className="self-start ml-24"
        />
      </section>

      <section className="flex flex-col justify-center items-center gap-4">
        <div className="w-2/3 flex flex-col gap-4">
          <h1 className="text-5xl text-center">
            Projects <span className="font-semibold">Category</span>
          </h1>
          <p className="text-xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            condimentum, nibh et convallis posuere, justo lorem mollis ipsum.
          </p>
        </div>

        <div className="flex flex-wrap gap-12 px-12 justify-center">
          <Category
            image="/mentor/category-dummy.png"
            category="Frontend Development"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum, nibh et convallis posuere, justo lorem mollis ipsum."
          />

          <Category
            image="/mentor/category-dummy.png"
            category="Solution Architect"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum, nibh et convallis posuere, justo lorem mollis ipsum."
          />

          <Category
            image="/mentor/category-dummy.png"
            category="Backend Development"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum, nibh et convallis posuere, justo lorem mollis ipsum."
          />

          <Category
            image="/mentor/category-dummy.png"
            category="UI/UX Design"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum, nibh et convallis posuere, justo lorem mollis ipsum."
          />

          <Category
            image="/mentor/category-dummy.png"
            category="IOT Development"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum, nibh et convallis posuere, justo lorem mollis ipsum."
          />
          <Category
            image="/mentor/category-dummy.png"
            category="Metaverse"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum, nibh et convallis posuere, justo lorem mollis ipsum."
          />
        </div>
      </section>

      <section className="px-36 flex gap-8 items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl">
            Projects <strong>Testimonials</strong>
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod harum
            distinctio asperiores animi
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <Testi
            imageOrang="/mentor/ara.jpeg"
            imageCompany="/mentor/google.png"
            name="John Doe"
            company="Solutions Architect"
            testi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod harum distinctio asperiores animi"
          />

          <Testi
            imageOrang="/mentor/ara.jpeg"
            imageCompany="/mentor/google.png"
            name="John Doe"
            company="Solutions Architect"
            testi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod harum distinctio asperiores animi"
          />
        </div>
      </section>
    </div>
  );
}
