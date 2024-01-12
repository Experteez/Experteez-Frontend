import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex w-2/5 flex-col gap-4 justify-center items-center">
        <Image src="/user/happy.svg" width={200} height={200} alt="congrats" />
        <div className="bg-primary p-2 rounded-xl">
          <h1 className="text-4xl text-white font-semibold">
            Congratulations!
          </h1>
        </div>
        <p className="text-gray-500 text-center">
          You've just unleashed a wave of awesome by submitting your form.
          Please hoping an email reply within <strong>14 days.</strong>
        </p>

        <Link href="/">
          <p className="bg-[#FF6B2D] font-semibold text-white p-2 rounded-xl">
            Back to Home
          </p>
        </Link>
      </div>
    </div>
  );
}
