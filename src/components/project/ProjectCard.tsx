import Image from "next/image";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import { FaLocationPin } from "react-icons/fa6";
import { TiTime } from "react-icons/ti";

interface ProjectCardProps {
  projectId: string;
  image: string;
  title: string;
  description: string;
  category: string[];
  location: string;
  duration: string;
}

export default function ProjectCard({
  projectId,
  image,
  title,
  description,
  category,
  location,
  duration,
}: ProjectCardProps) {
  return (
    <div className="shadow-2xl w-[372px] h-[600px] flex flex-col pb-12 rounded-2xl px-[3%] gap-4">
      <div className="h-60 flex items-center">
        <Image src={image} alt="mentor" width={500} height={300} />
      </div>
      <h1 className="font-semibold text-2xl">{title}</h1>
      <div className="flex gap-4 flex-wrap">
        {category.map((item) => (
          <div className="bg-gray-200 rounded-full px-6 py-2">
            <p className="text-black">{item}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-500">{description}</p>
      <div className="h-[1px] bg-gray-700"></div>

      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <FaLocationPin className="text-black" />
          <p className="text-black">{location}</p>
        </div>

        <div className="flex gap-2 items-center">
          <TiTime className="text-black text-2xl" />
          <p className="text-black">{duration}</p>
        </div>
      </div>

      <Link
        href={`/project/${projectId}/detail`}
        className="bg-[#FF6B2D] font-semibold hover:bg-[#FF6B2D]/90 flex items-center gap-4 px-4 py-2 rounded-full w-1/2"
      >
        <p className="text-white py-2 text-center">Apply</p>
        <AiOutlineRight className="text-white text-2xl" />
      </Link>
    </div>
  );
}
