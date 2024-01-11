import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-secondary flex gap-60 py-12 text-white px-12">
      <div className="flex flex-col justify-between">
        <Image src="/logo-removed.png" alt="logo" width={300} height={100} />
        <p className="text-white text-sm">
          @2024 <br /> All Rights Reserved <br /> Terms of Service | Privacy
        </p>
      </div>

      <div className="w-1/3">
        <h1 className="text-xl font-semibold">Headquarters</h1>
        <p>
          Jln. Ganesha No. 10, Lb. Siliwangi, Kec. Coblong Kota Bandung 40132
        </p>
      </div>

      <div className="w-1/3">
        <h1>Get in Touch</h1>
        <p>Email: auvabewok@gmail.com</p>
        <p>Phone: +62 812 3456 7890</p>
      </div>
    </div>
  );
}
