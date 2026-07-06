"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export function WhySharply() {
  const features = [
    {
      index: [
        {
          icon: "",
          title: "Verified runners",
          content:
            "All runners are verified students, ensuring a safe and reliable delivery experience.",
        },
        {
          icon: "",
          title: "Instant Dispatch",
          content: "Matched to the nearest available runner in seconds.",
        },
      ],
    },
    {
      index: [
        {
          icon: "",
          title: "Live tracking",
          content:
            "Watch your runner move on the map, with a live ETA to the door.",
        },
        {
          icon: "",
          title: "Upfront pricing",
          content:
            "See the exact price before you send. No surprises at drop-off.",
        },
      ],
    },
    {
      index: [
        {
          icon: "",
          title: "Send anything",
          content: "Documents, food, parcels, market runs — across campus.",
        },
        {
          icon: "",
          title: "Pay your way",
          content: "Cash, bank transfer or the in-app wallet — whatever works.",
        },
      ],
    },
  ];

  const buttonRef = useRef<HTMLParagraphElement>(null);
  const sectionRef = useRef<HTMLParagraphElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end:'+=600',
        scrub:true,
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });

    tl.fromTo(
      buttonRef.current,
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
      },
    ).fromTo(
      contentRef.current,
      {
        opacity: 0,
       
      },
      {
        opacity: 1,
        
      },
    ).from(
    contentRef.current!.querySelectorAll("h1, p"),

  {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.4,
    ease: "power2.out",
  }
);

  }, []);

  return (
    <div className="p-2 max-lg:py-10 lg:p-30 flex flex-col gap-8 items-center">
      <div ref={sectionRef} className="flex flex-col items-center gap-4">
        <p
          ref={buttonRef}
          className="font-semibold leading-[140%] w-fit rounded-lg bg-[#EFF8FC] 2xl:text-2xl  text-[#48B7DD] border border-[#48B7DD] px-4 py-2"
        >
          WHY SHARPLY ?
        </p>

        <p
          ref={textRef}
          className="text-[33px] text-center leading-[140%] font-bold "
        >
          Built for campus speed
        </p>
      </div>
      <div ref={contentRef} className="flex max-lg:flex-col max-lg:gap-4 items-center justify-between w-full ">
        {features.map((feature, index) => (
          <div
            className={`${index === features.length - 1 ? "" : "lg:border-r max-lg:border-b max-lg:py-6 border-[#F0F2F5] lg:pr-20"} flex flex-col gap-4 px-8 w-full`}
            key={index}
          >
            {feature.index.map((item, index) => (
              <div className="lg:max-w-[293px] " key={index}>
                <div className=" flex flex-col gap-1">
                  <h1 className="text-[19px] font-semibold">{item.title}</h1>
                  <p className="text-[#878787] leadnig-[145%]">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
