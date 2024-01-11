import Image from "next/image";

interface CompanyProps {
    image: string;
    name: string;
}

export default function Company({ image, name }: CompanyProps) {
    return (
        <div className="rounded-full flex items-center gap-4 border-2 px-2 w-fit h-fit border-black">
            <Image src={image} alt={name} width={60} height={100} />
            <p>{name}</p>
        </div>
    )
}