import ProjectCard from "@/components/project/ProjectCard";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ListProject from "./ListProject";

export default async function Page() {
  const cookie = cookies();
  const token = cookie.get("token");

  if (!token) {
    redirect("/login");
  }

  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1/projects",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }
  );

  const data = await res.json();

  return (
    <div className="flex flex-col gap-12 w-full">
      <section className="bg-primary text-white h-[50vh] flex flex-col w-full gap-4 justify-center items-center">
        <div className="w-4/5 lg:w-1/2">
          <h1 className="text-4xl text-center">
            <strong>Search</strong> Projects
          </h1>
          <p className="text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            condimentum, nibh et convallis posuere, justo lorem mollis ipsum.
          </p>
        </div>

        <div className="w-1/2 self-center">
          <div className="flex items-center flex-col justify-center">
            <div className="flex items-center gap-2 justify-between bg-white shadow-xl py-0 px-8 rounded-full lg:w-2/3">
              <AiOutlineSearch className="hidden text-black lg:block text-6xl" />
              <input
                className=" h-12 md:px-4 w-full text-black rounded-lg text-base outline-none"
                type="text"
                placeholder="Search for a Projects"
              />
              <Link
                href={"/project"}
                className="bg-[#FF6B2D] hover:bg-[#FF6B2D]/90 text-white rounded-lg py-2 px-4 h-fit flex items-center"
              >
                Search
              </Link>
            </div>
          </div>
        </div>

        <Image
          src={"/project/hero-project.svg"}
          width={50}
          height={500}
          alt="hero"
          className="absolute top-96 left-16"
        />
        <Image
          src={"/project/kanan-hero.svg"}
          width={200}
          height={500}
          alt="hero"
          className="absolute top-32 right-0"
        />
        <Image
          src={"/project/kiri-hero.svg"}
          width={200}
          height={500}
          alt="hero"
          className="absolute top-0 left-0"
        />
      </section>

      <section className="px-12 flex flex-col gap-12">
        <h1 className="font-semibold text-4xl">
          Your Top Picks Projects Awaits You!
        </h1>
        <ListProject data={data} />
      </section>
    </div>
  );
}
