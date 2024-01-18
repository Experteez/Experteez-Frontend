"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DetailProject({ params }: { params: { id: string } }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const cookies = new Cookies();
  const [data, setData] = useState({
    why_choose: "",
    tell_us: "",
  });

  useEffect(() => {
    if (isSubmitting) {
      toast.loading("Loading...");
    } else {
      toast.dismiss();
    }
  }, [isSubmitting]);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL +
        `/api/v1/projects/${params.id}/apply/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + cookies.get("token"),
        },
        body: JSON.stringify({
          why_choose: data.why_choose,
          tell_us: data.tell_us,
        }),
      }
    );

    if (res.ok) {
      setTimeout(() => {
        toast.success(
          "Successfully applied!, please wait for the response on your email."
        );
      }, 5000);
      router.push("/project/${params.id}/success");
    } else {
      const { message } = await res.json();
      setTimeout(() => {
        toast.error(message);
      }, 5000);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="py-12 flex flex-col gap-16 px-12 lg:px-20">
      <section className="bg-white flex gap-28 lg:px-72 justify-center items-center">
        <Image
          src={"/mentor/google.png"}
          width={227}
          height={500}
          alt="company"
          className="hidden lg:block"
        />

        <div className="flex flex-col gap-4 lg:w-2/3">
          <h1 className="font-semibold text-4xl">Software Engineer</h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem ipsa, dolores adipisci maxime saepe architecto?
            Provident, accusamus qui. Cupiditate aliquid rerum adipisci ad
            quaerat! Non laudantium accusamus aut maiores sunt!
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div>
          <h1 className="font-semibold text-xl">Job Description</h1>

          <ul className="list-disc">
            <li className="list-disc">
              Collaborate with full-time software engineers to plan, design,
              develop, test, and maintain enterprise applications tailored
              towards the energy sector.
            </li>
            <li className="list-disc">
              Assist in the collection and documentation of user requirements,
              development of user stories, estimates and work plan. Participate
              in peer to peer reviews of designs, solutions and code{" "}
            </li>
            <li className="list-disc">
              Present and support solutions to stakeholders across the globe{" "}
            </li>
            <li className="list-disc">
              Analyze and resolve various technical and business problems
            </li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold text-xl">Qualifications</h1>

          <ul className="list-disc">
            <li className="list-disc">
              Currently pursuing or recently completed a bachelor’s or master’s
              degree in Computer Science, Data Science, Engineering, or a
              related field
            </li>
            <li className="list-disc">
              Proficiency in Python and JavaScript. Knowledge of TypeScript, C#
              and other C-like languages are a plus
            </li>
            <li className="list-disc">Knowledge of HTML and CSS</li>
            <li className="list-disc">
              Strong interpersonal and communication skills, with the ability to
              work effectively in a team environment
            </li>
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 justify-start w-full">
          <div className="flex flex-col lg:w-1/2">
            <label>Why Are You Choosing This Project</label>
            <textarea
              className="border-2 border-gray-300 rounded-lg px-2 h-60"
              onChange={(e) => setData({ ...data, why_choose: e.target.value })}
            ></textarea>
          </div>

          <div className="flex flex-col lg:w-1/2">
            <label>Tell us About Yourself</label>
            <textarea
              className="border-2 border-gray-300 rounded-lg px-2 h-60"
              onChange={(e) => setData({ ...data, tell_us: e.target.value })}
            ></textarea>
          </div>
        </div>

        <div
          className="bg-[#FF6B2D] self-center mt-12 gap-8 lg:w-[15%] justify-around hover:bg-[#FF6B2D]/90 text-white rounded-full py-2 px-4 h-fit flex items-center cursor-pointer"
          onClick={handleSubmit}
        >
          <p className="font-semibold">Apply</p>

          <div className="bg-white rounded-lg">
            <AiOutlineRight className="text-[#FF6B2D] text-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
