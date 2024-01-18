import Image from "next/image";

interface SchedhuleBoxProps {
  name: string;
  description: string;
  imageURL: string;
}

export default function SchedhuleBox({
  name,
  imageURL,
  description,
}: SchedhuleBoxProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[350px] h-[150px] py-4 px-6 flex gap-8">
      <div className="w-32 aspect-square bg-slate-300 rounded-full relative overflow-hidden">
        <Image
          src={imageURL}
          fill={true}
          alt="profile"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col justify-around items-stretch">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p className="text-sm text-secondary">{description}</p>
      </div>
    </div>
  );
}
