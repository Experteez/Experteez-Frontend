import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
interface CategoryProps {
  image: string;
  category: string;
  description: string;
}

export default function Category({
  image,
  category,
  description,
}: CategoryProps) {
  const words = category.split(" ");

  // Bold the first word
  const firstWord = <strong>{words[0]}</strong>;
  return (
    <div className="w-80 pb-6 shadow-xl rounded-xl">
      <Image src={image} alt={category} width={320} height={320} />

      <div className="px-9 py-4">
        <h1 className="text-2xl">
          {firstWord} {words.slice(1).join(" ")}
        </h1>
        <p className="text-[#8C8C8C] text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit amet
        </p>
      </div>

      <div className="px-9">
        <button className="flex gap-2 items-center py-2 px-6 bg-[#FF6B2D] hover:bg-[#FF6B2D]/90 rounded-3xl text-white">
          <p>Explore</p>
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
}
