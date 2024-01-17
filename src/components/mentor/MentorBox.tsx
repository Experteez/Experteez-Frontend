import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";

export default function MentorBox() {
  return (
    <div className="bg-white shadow-lg w-[350px] h-[150px] py-4 flex gap-8">
      <Image
        src="/mentor/auva.jpeg"
        width={130}
        height={130}
        alt="mentor-box"
      />

      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-semibold">Auva</h1>
          <p className="text-sm text-secondary">UI/UX Designer</p>
        </div>
        <button className="bg-[#FF6B2D] text-white px-4 py-2 flex gap-2 items-center rounded-full font-normal">
          <p>Details</p>
          <AiOutlineRight className="inline-block ml-2" />
        </button>
      </div>
    </div>
  );
}
