import Image from "next/image";
import Company from "./Company";

interface TestiProps {
  imageOrang: string;
  imageCompany: string;
  name: string;
  company: string;
  testi: string;
}

export default function Testi({
  imageOrang,
  imageCompany,
  name,
  company,
  testi,
}: TestiProps) {
  return (
    <div className="w-[596px] px-12 py-6 flex gap-4 justify-between rounded-xl shadow-xl">
      <div className="w-[400px] aspect-square border-2 border-white bg-slate-300 rounded-full relative overflow-hidden">
        <Image
          src={"/mentor/ara.jpeg"}
          fill={true}
          alt="profile"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Company image={imageCompany} name={company} />
        <p className="text-lg">"{testi}"</p>

        <p>{"("}{name}{")"}</p>
      </div>
    </div>
  );
}
