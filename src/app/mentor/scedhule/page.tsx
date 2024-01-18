import SchedhuleBox from "@/components/mentor/ScedhuleBox";
import Image from "next/image";

export default function Page() {
  return (
    <div className="px-[5%] py-4 flex flex-col gap-8">
      <section className="flex flex-col gap-3">
        <h1 className="text-primary text-2xl font-semibold lg:text-4xl">
          My Schedule
        </h1>

        <div className="flex flex-wrap gap-4 lg:gap-12 items-center justify-center">
          <SchedhuleBox
            name="Auva"
            imageURL="/mentor/auva.jpeg"
            description="UI/UX Class"
          />
          <SchedhuleBox
            name="Kevin Sebastian"
            imageURL="/mentor/kepin.jpeg"
            description="Software Engineer Class"
          />
          <SchedhuleBox
            name="Abraham"
            imageURL="/mentor/auva.jpeg"
            description="Data Engineering Class"
          />
          <SchedhuleBox
            name="Naufal"
            imageURL="/mentor/auva.jpeg"
            description="Frontend Class"
          />
          <SchedhuleBox
            name="Iyal"
            imageURL="/mentor/auva.jpeg"
            description="Backend Class"
          />
          <SchedhuleBox
            name="Gibran"
            imageURL="/mentor/auva.jpeg"
            description="Career Development Class"
          />
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex w-3/5 gap-4">
          <div>
            <label className="text-primary lg:text-lg">Year</label>
            <div className="border-2 border-primary rounded-full px-8 py-2">
              <select className="bg-transparent outline-none border-none focus:outline-none px-4 py-2">
                <option>2024</option>
                <option>2023</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-primary lg:text-lg">Month</label>
            <div className="border-2 border-primary rounded-full px-8 py-2">
              <select className="bg-transparent outline-none border-none focus:outline-none px-4 py-2">
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={"/mentor/calendar.svg"}
            width={1200}
            height={600}
            alt="Schedule"
          />
        </div>
      </section>
    </div>
  );
}
