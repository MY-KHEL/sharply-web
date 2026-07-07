import Image from "next/image";
import Link from "next/link";

export function NavBar() {
  const navLinks = [
    {
      linkTItle: "How it works",
      href: "/",
    },
    {
      linkTItle: "Features",
      href: "/",
    },
    {
      linkTItle: "For runners",
      href: "/",
    },
    {
      linkTItle: "Support",
      href: "/",
    },
  ];
  return (
    <div className="lg:px-30 px-6 py-3.5  border-b-[#DFDFDF] border-b fixed top-0 z-30 bg-white flex w-full justify-between items-center">
      <div className="relative aspect-118/56 max-w-[118px] w-full ">
        <Image
          src={"/pngs/slogo.png"}
          alt="sharply-logo"
          className="object-contain"
          fill
        />
      </div>

      <div className="flex items-center gap-15 max-lg:hidden ">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-[#1A1A1A] leading-[140%]"
          >
            {link.linkTItle}
          </Link>
        ))}
      </div>

      <Link href={"https://sharply.quadstores.com/register"} className = ''>
        <button className=" relative cursor-pointer text-white bg-[#48B7DD] font-semibold leading-[140%] max-lg:py-3 max-lg:px-6 rounded-lg px-8 py-4">  Register</button>
      </Link>
    </div>
  );
}
