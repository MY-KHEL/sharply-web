import Image from "next/image";

export function HeroSection() {
  return (
    <div className=" px-8 lg:px-30 pb-15 pt-35 relative max-lg:flex-col flex items-center justify-between w-full  overflow-hidden">
        <div className="w-full">
      <div className="flex flex-col gap-4 max-w-[430px] 2xl:max-w-[540px]">
        <p className="font-semibold leading-[140%] w-fit rounded-lg z-20 bg-[#EFF8FC] 2xl:text-2xl  text-[#48B7DD] border border-[#48B7DD] px-4 py-2">
          QUAD'S LOGISTICS
        </p>

        <h1 className="font-bold text-[60px] 2xl:text-[80px] leading-[140%] z-20">Campus Deliveries, <span className="text-[#48B7DD]">Sharply </span> Fast</h1>

        <p>Sharply is QUAD's logistics service — get documents, food and parcels moved across UNILAG & LUTH by verified student runners, in minutes.</p>
      </div>
      </div>
      <div className="w-full  flex justify-center z-20 max-lg:hidden ">
      <div className="relative aspect-240/505 w-full max-w-[240px] 2xl:max-w-[300px]">
        <Image src={'/pngs/sharplymockup.png'} alt="sharply mockup" fill  className="object-contain"/>
      </div>
      </div>

      <div className="absolute  aspect-square w-[425px] rounded-full bg-[#48B7DD]/30 max-lg:-top-10 -top-2 max-lg:-right-30 -right-10">
      </div>
      <div className="absolute  aspect-square w-[254px] rounded-full bg-[#FFCC00]/30 max-lg:-bottom-20 max-lg:-left-20 bottom-30 right-10">
      </div>
    </div>
  );
}
