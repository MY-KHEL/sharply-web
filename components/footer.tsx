"use client";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);
  const lastRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const footerLinks = [
    {
      title: "Products",
      link: [
        {
          title: "Downloads",
          href: "/",
        },
        {
          title: "Features",
          href: "/",
        },
        {
          title: "Pricing",
          href: "/",
        },
        {
          title: "For Runners",
          href: "/",
        },
      ],
    },
    {
      title: "Company",
      link: [
        {
          title: "Downloads",
          href: "/",
        },
        {
          title: "Features",
          href: "/",
        },
      ],
    },
    {
      title: "Support",
      link: [
        {
          title: "Hot Center",
          href: "/",
        },
        {
          title: "Contact",
          href: "/",
        },
        {
          title: "Safety",
          href: "/",
        },
        {
          title: "Terms and Policy",
          href: "/",
        },
      ],
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      
      scrollTrigger:{
        trigger: sectionRef.current,
        start: "top 80%",
        end:'+=200',
        markers:true, 
        toggleActions:'play none none reverse'
        
      },
    });

    tl.fromTo(
      imageRef.current,
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        
      },
    ).fromTo(
        textRef.current,
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        }, 
      ) .fromTo(
        linkRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },"-=0.1"
        
        
      ).fromTo(
        lastRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        
      );
  });
  return (
    <footer
      ref={sectionRef}
      className="px-8 lg:px-30 py-8 lg:py-16 bg-[#48B7DD] flex flex-col gap-16"
    >
      <div className="flex max-lg:flex-col justify-between gap-6 lg:gap-10">
        <div className="max-w-[369px] w-full flex flex-col gap-6">
          <div
            ref={imageRef}
            className="relative aspect-105/55 max-w-[118px] w-full "
          >
            <Image
              src={"/pngs/hlogo.png"}
              alt="sharply-logo"
              className="object-contain"
              fill
            />
          </div>

          <p ref={textRef} className="text-white leading-[145%] ">
            Fast, trusted campus logistics — powered by verified student runners
            across UNILAG & LUTH.
          </p>
          <div className=""></div>
        </div>
        <div ref={linkRef} className="flex  gap-4 justify-between w-full">
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h3 className="text-white font-semibold text-[14px] lg:text-lg">
                {section.title}
              </h3>

              <div className="flex flex-col gap-2">
                {section.link.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="text-white/80 max-lg:text-[12px] hover:text-white transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        ref={lastRef}
        className="pt-[10px] lg:pt-[33px] opacity-0 border-t flex max-lg:flex-col max-lg:items-center  gap-4 justify-between border-white"
      >
        <div className="flex  items-center lg:items-baseline max-lg:text-[12px] text-white gap-6">
          <Link href="/">Terms of Service </Link>
          <Link href="/">Privacy Policy </Link>
          <Link href="/">Security </Link>
        </div>
        <p className="text-white max-lg:text-[12px] text-[14px] leading-[145%]">
          &copy; 2026 Sharply by QUAD. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
