import MentorBox from "@/components/mentor/MentorBox";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";

export default function Page() {
  const cookie = cookies();
  const token = cookie.get("token");

  if (!token) {
    redirect("/login");
  }

  return (
    <div>
      <section className="py-14 flex flex-col gap-4 justify-between items-start px-8 lg:py-16 lg:px-32">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full">
          <div className="flex flex-col gap-4 w-[40%]">
            <h1 className="text-4xl lg:text-6xl font-semibold">
              Experteez Mentor
            </h1>
            <p className="text-secondary text-xl lg:text-3xl">
              Guiding Your Growth, Elevate Your Skills With Expert Mentors
            </p>
          </div>

          <Link
            href="/mentor/scedhule"
            className="bg-[#FF6B2D] text-white px-8 py-4 rounded-full font-normal"
          >
            My Schedhule
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row w-full items-center gap-4">
          <div className="border-2 border-primary rounded-full px-8 py-2">
            <select className="bg-transparent outline-none border-none focus:outline-none px-4 py-2">
              <option>Category</option>
              <option>Technology</option>
            </select>
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 justify-between bg-white shadow-xl py-2 px-8 rounded-full lg:w-2/3">
                <AiOutlineSearch className="hidden lg:block text-6xl" />
                <input
                  className=" h-12 md:px-4 w-full rounded-lg text-base outline-none"
                  type="text"
                  placeholder="Search for a Projects"
                />
                <Link
                  href={"/project"}
                  className="bg-primary hover:bg-primary/90 text-white rounded-lg px-4 h-12 flex items-center"
                >
                  Search
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 lg:py-20 flex flex-col gap-8 lg:px-32 py-14">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-2/3">
            <h1 className="text-2xl lg:text-4xl font-semibold">
              Find Your Mentor
            </h1>
            <p className="text-primary text-lg lg:text-2xl">
              You can find your own mentor in your area of interest and help you
              improve your skills to be even better ever before
            </p>
          </div>

          <Image
            src={"/mentor/contact.svg"}
            width={140}
            height={600}
            alt="Contact"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12">
          <MentorBox
            description="Auva is a UI/UX Designer at Tokopedia. He has been working in the industry for 5 years. He is a graduate of the University of Indonesia."
            imageURL="/mentor/auva.jpeg"
            name="Auva"
            role="UI/UX Designer"
          />
          <MentorBox
            description="Kevin Sebastian is a software engineer at Google. He has been working in the industry for 5 years. He is a graduate of the University of Indonesia."
            imageURL="/mentor/kepin.jpeg"
            name="Kevin"
            role="Software Engineer"
          />
          <MentorBox
            description="Ara is a Data Scientist at Gojek. He has been working in the industry for 5 years. He is a graduate of the University of Indonesia."
            imageURL="/mentor/ara.jpeg"
            name="Ara"
            role="Data Scientist"
          />
          <MentorBox
            description="Radit is a Frontend Developer at Tokopedia. He has been working in the industry for 5 years. He is a graduate of the University of Indonesia."
            imageURL="/mentor/auva.jpeg"
            name="Radit"
            role="Frontend Developer"
          />
          <MentorBox
            description="Abam is a Data Scientist at Gojek. He has been working in the industry for 5 years. He is a graduate of the University of Indonesia."
            imageURL="/mentor/auva.jpeg"
            name="Abam"
            role="Data Scientist"
          />
        </div>
      </section>
    </div>
  );
}
