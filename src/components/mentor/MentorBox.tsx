import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";

interface MentorBoxProps {
    name: string;
    role: string;
}

export default function MentorBox({ name, role }: MentorBoxProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[350px] h-[150px] py-4 px-6 flex gap-8">
      <div className="w-32 aspect-square bg-slate-300 rounded-full relative overflow-hidden">
        <Image
          src={"/mentor/auva.jpeg"}
          fill={true}
          alt="profile"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-semibold">{name}</h1>
          <p className="text-sm text-secondary">{role}</p>
        </div>
        <button className="bg-[#FF6B2D] text-white px-4 py-2 flex gap-2 items-center rounded-full font-normal">
          <p>Details</p>
          <AiOutlineRight className="inline-block ml-2" />
        </button>
      </div>
    </div>
  );
}
