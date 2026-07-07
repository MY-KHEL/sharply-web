"use client";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Banner() {
  const mainRef = useRef<HTMLDivElement>(null);
  const firstHeadingRef = useRef<HTMLHeadingElement>(null);
  const secondHeadingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const blueCircleRef = useRef<HTMLDivElement>(null);
  const yellowCircleRef = useRef<HTMLDivElement>(null);
   const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width:767px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top 90%",
          end: "+=400",
          scrub: true,
          // markers: true,
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        firstHeadingRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
        },
      )
        .fromTo(
          secondHeadingRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
          },
        )
        .fromTo(
          textRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
          },
        )
        .fromTo(
          buttonRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
          },
        );
    });
    mm.add("(min-width:766px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top 50%",
          end: "+=400",
          scrub: true,
          // markers: true,
          toggleActions: "play none none reverse",
        },
      });
      const shapeTl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top 50%",
          end: "+=400",
          // scrub: true,
          // markers: true,
          toggleActions: "play none none reverse",
        },
      });

      shapeTl.fromTo(
      blueCircleRef.current,
      {
        y: -20,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      },
    ).fromTo(
      yellowCircleRef.current,
      {
        y: 20,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
      },
    ).fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale:0.4
      },
      {
        opacity:1,
        scale:1,
        duration: 2,
        ease: "back.out(1.4)",
      },
      '-=0.5'
    )
      tl.fromTo(
        firstHeadingRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
        },
      )
        .fromTo(
          secondHeadingRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
          },
        )
        .fromTo(
          textRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
          },
        )
        .fromTo(
          buttonRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
          },
        );
    });
  });
  return (
    <section ref={mainRef} className=" max-lg:p-2 p-30  max-lg:py-8">
      <div className="w-full relative rounded-3xl bg-linear-to-r from-[#48B7DD] overflow-hidden to-[#276377] py-8 px-4 lg:px-15 items-center flex justify-center lg:justify-between">
        <div className="w-full flex flex-col z-20 gap-4 max-w-[430px]">
          <div className="flex flex-col">
            <h1
              ref={firstHeadingRef}
              className="font-bold opacity-0 text-[48px] leading-[140%] text-white "
            >
              Get Sharply
            </h1>
            <h1
              ref={secondHeadingRef}
              className="font-bold opacity-0 text-[48px] leading-[140%] text-[#FFCC00]"
            >
              Move Sharply
            </h1>
          </div>
          <p ref={textRef} className="max-md:text-center  text-white text-[19px] leading-[140%]">
            Free to download. Live on UNILAG & LUTH now, with more campuses
            coming soon.
          </p>

          <Link
            ref={buttonRef}
            href={"https://sharply.quadstores.com/register"}
            className="font-semibold leading-[140%] max-lg:w-full w-fit px-8 py-3 flex items-center justify-center bg-white rounded-lg"
          >
            Register as a runner{" "}
          </Link>
        </div>
        <div className="w-full flex justify-end max-lg:hidden  z-20 pr-40">
          <div ref={imageRef} className="opacity-0 aspect-[249/505] relative max-w-[249px]  w-full ">
            <Image
              src="/pngs/homemockup.png"
              alt="Home Mockup"
              fill
              className=""
            />
          </div>
        </div>

        <div ref={blueCircleRef} className="aspect-square w-[425px] bg-[#3587a3] rounded-full absolute -right-20  -top-40 "></div>
        <div ref={yellowCircleRef} className="aspect-square w-[254px] bg-[#FFCC00] max-lg:hidden rounded-full absolute -right-4  bottom-7 "></div>
      </div>
    </section>
  );
}
