"use client";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const blueCircleRef = useRef<HTMLDivElement>(null);
  const yellowCircleRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLParagraphElement>(null);
  const HeadingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const blueText = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const tl = gsap.timeline();
    const secondTimeline = gsap.timeline();

    // first timeline for the hero section

    if (
      !contentRef.current ||
      !buttonRef.current ||
      !HeadingRef.current ||
      !blueCircleRef.current ||
      !yellowCircleRef.current
    ) {
      return;
    }

    const split = new SplitType(contentRef.current, { types: "lines" });

    tl.fromTo(
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
    )
      .fromTo(
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
      )
      .fromTo(
        imageRef.current,
        {
          opacity: 0,
          scale: 0.4,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: "back.out(1.4)",
        },
      );

    // second timeline for the hero section
    secondTimeline
      .fromTo(
        buttonRef.current,
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
        },
      )
      .fromTo(
        HeadingRef.current,
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
        },
      )
      .from(split.lines, {
        yPercent: 100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      })
      .fromTo(
        blueText.current,
        {
          color: "black",
        },
        {
          color: "#48B7DD",
        },
      );

    return () => {
      split.revert();
    };
  }, []);

  return (
    <div className=" px-8 lg:px-30 pb-15 pt-35 relative max-lg:flex-col flex items-center justify-between w-full  overflow-hidden">
      <div className="w-full  ">
        <div className="flex flex-col  max-lg:text-center gap-4 max-lg:mx-auto max-w-[430px] 2xl:max-w-[540px]">
          <p
            ref={buttonRef}
            className="font-semibold leading-[140%] max-lg:mx-auto w-fit rounded-lg z-20 bg-[#EFF8FC] 2xl:text-2xl  text-[#48B7DD] border border-[#48B7DD] px-4 py-2"
          >
            QUAD'S LOGISTICS
          </p>

          <h1
            ref={HeadingRef}
            className="font-bold text-[60px] 2xl:text-[80px] leading-[140%] z-20"
          >
            Campus Deliveries,{" "}
            <span ref={blueText} className="text-[#48B7DD]">
              Sharply{" "}
            </span>{" "}
            Fast
          </h1>

          <p ref={contentRef}>
            Sharply is QUAD's logistics service — get documents, food and
            parcels moved across UNILAG & LUTH by verified student runners, in
            minutes.
          </p>
        </div>
      </div>
      <div className="w-full lg:pr-40  flex justify-end max-lg:justify-center z-20 max-lg:hidden ">
        <div
          ref={imageRef}
          className="relative aspect-240/505 w-full max-w-[240px] 2xl:max-w-[300px]"
        >
          <Image
            src={"/pngs/sharplymockup.png"}
            alt="sharply mockup"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div
        ref={blueCircleRef}
        className="absolute  aspect-square w-[425px] rounded-full bg-[#48B7DD]/30 max-lg:-top-10 -top-2 max-lg:-right-30 -right-10"
      ></div>
      <div
        ref={yellowCircleRef}
        className="absolute  aspect-square w-[254px] rounded-full bg-[#FFCC00]/30 max-lg:-bottom-20 max-lg:-left-20 bottom-30 right-10"
      ></div>
    </div>
  );
}
