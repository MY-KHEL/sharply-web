"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export function HowItWorks() {
  const deliverySteps = [
    {
      icon: "",
      title: "Request a pickup",
      content: "Enter pickup & drop-off and see the price instantly",
    },
    {
      icon: "",
      title: "A runner accepts",
      content: "A nearby verified student grabs your job in seconds.",
    },
    {
      icon: "",
      title: "Track to the door",
      content: "Follow the live map until it is safely delivered.",
    },
  ];
  const buttonRef = useRef<HTMLParagraphElement>(null);
  const sectionref = useRef<HTMLParagraphElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width:768px)", () => {
      gsap.from(contentRef.current!.querySelectorAll(".box"), {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.4,
        ease: "power2.out",
        
        scrollTrigger:{
          trigger:contentRef.current,
          start:'top 80%',
          end:'+=300',
          scrub:true,

        }
      });
    });
    mm.add("(max-width:767px)", () => {
      gsap.fromTo(contentRef.current!.querySelectorAll(".box"),{
        opacity: 0,
        y: 20,
        scale:0.4
      }, {
        opacity: 1,
        y: 0,
        scale:1,
        stagger: 0.3,
        duration: 0.6,
        ease: "power2.out",
        
        scrollTrigger:{
          trigger:contentRef.current,
          start:'top 80%',
          end:'+=300',
          
          scrub:true,

        }
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionref.current,
        start: "top 80%",
        // scrub:true,
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
    );
  });
  return (
    <section
      ref={sectionref}
      className="px-2 lg:px-30 py-15 gap-8 bg-[#EFF8FC] flex flex-col items-center"
    >
      <p
        ref={buttonRef}
        className="font-semibold leading-[140%] w-fit rounded-lg 2xl:text-2xl bg-white text-[#48B7DD] border border-[#48B7DD] px-4 py-2"
      >
        HOW IT WORKS
      </p>
      <p
        ref={textRef}
        className="text-[33px] text-center leading-[140%] font-bold "
      >
        Three taps to delivery
      </p>
      <div
        ref={contentRef}
        className="w-full p-6 flex max-lg:flex-col  justify-between gap-8 max-lg:rounded-lg bg-white"
      >
        {deliverySteps.map((step, index) => (
          <div className="relative box" key={index}>
            <div
              className={`flex gap-4 relative rounded-lg p-5 ${index % 2 != 0 ? "bg-linear-to-r from-[#48B7DD] to-[#276377] text-white  " : ""}`}
            >
              <div className="aspect-square w-13 h-13 bg-[#E5FAFF] rounded-full "></div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-[19px] leading-[145%]">
                  {step.title}
                </p>
                <p className="text-sm">{step.content}</p>
              </div>
            </div>
            <div className="absolute top-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 aspect-sqaure bg-[#FFCC00] flex items-center justify-center text-white rounded-full ">
              {" "}
              {index + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
