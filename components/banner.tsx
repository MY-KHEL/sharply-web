import Image from "next/image";
import Link from "next/link";

export function Banner() {
  return (
    <section className=" max-lg:p-2 p-30  max-lg:py-8">
      <div className="w-full relative rounded-3xl bg-linear-to-r from-[#48B7DD] overflow-hidden to-[#276377] py-8 px-4 lg:px-15 items-center flex justify-center lg:justify-between">
        <div className="w-full flex flex-col z-20 gap-4 max-w-[430px]">
          <div className="flex flex-col">
            <h1 className="font-bold text-[48px] leading-[140%] text-white ">
              Get Sharply
            </h1>
            <h1 className="font-bold text-[48px] leading-[140%] text-[#FFCC00]">
              Move Sharply
            </h1>
          </div>
          <p className="text-white text-[19px] leading-[140%]">
            Free to download. Live on UNILAG & LUTH now, with more campuses
            coming soon.
          </p>

          <Link
            href={"/"}
            className="font-semibold leading-[140%] max-lg:w-full w-fit px-8 py-3 flex items-center justify-center bg-white rounded-lg"
          >
            Register as a runner{" "}
          </Link>
        </div>
        <div className="w-full flex justify-end max-lg:hidden  z-20 pr-40">
          <div className=" aspect-[249/505] relative max-w-[249px]  w-full ">
            <Image
              src="/pngs/homemockup.png"
              alt="Home Mockup"
              fill
              className=""
            />
          </div>
        </div>

        <div className="aspect-square w-[425px] bg-[#3587a3] rounded-full absolute -right-20  -top-40 "></div>
        <div className="aspect-square w-[254px] bg-[#FFCC00] max-lg:hidden rounded-full absolute -right-4  bottom-7 "></div>
      </div>
    </section>
  );
}
