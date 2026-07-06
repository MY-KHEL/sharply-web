"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Counter } from "./counter";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export function FeatureSection() {
  const features = [
    {
      value: 12,
      suffix: " min",
      feature: "Average Delivery Time",
    },
    {
      value: 2,
      suffix: "",
      feature: "Campuses Live Now",
    },
    {
      value: 500,
      suffix: "+",
      feature: "Verified Student Runners",
    },
    {
      value: 10,
      suffix: "K+",
      feature: "Deliveries Completed",
    },
  ];
  const counter = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!counter.current) return;

//     gsap.fromTo(counter.current, {
//         opacity: 0,
//     }, {opacity:1,scrollTrigger:{
//         trigger: counter.current,
//         start: "top 80%",
//         end: "bottom 20%",
//         scrub: true,
//         markers: true,
//     }});
//   }, []);

  return (
    <section className="w-full bg-[#48B7DD] gap-6 flex max-lg:grid grid-cols-2 justify-between px-8 lg:px-30 py-6 ">
      {features.map((feature, index) => (
        <div
          key={feature.feature}
          className={`flex flex-col lg:items-center gap-2  text-white ${index !== features.length - 1 ? "lg:pr-15 lg:border-r border-white" : "pr-0"}`}
        >
          <Counter value={feature.value} suffix={feature.suffix} />
          <p>{feature.feature}</p>
        </div>
      ))}
    </section>
  );
}
