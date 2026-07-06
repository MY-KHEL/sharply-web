"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CounterProps = {
  value: number;
  suffix?: string;
};

export function Counter({ value, suffix = "" }: CounterProps) {
  const counterRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!counterRef.current) return;

    const obj = { value: 0 };

    const tween = gsap.to(obj, {
      value,
      duration: 2,
      ease: "power2.out",
      snap: { value: 1 },
      paused: true, // don't start immediately
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = `${obj.value}${suffix}`;
        }
      },
    });

    const trigger = ScrollTrigger.create({
      trigger: counterRef.current,
      start: "top 90%",
      scrub:true,
    //   markers: true,
      once: true,
      onEnter: () => tween.play(),
    });

    return () => {
      trigger.kill();
      tween.kill();
    };
  }, [value, suffix]);

  return (
    <p ref={counterRef} className="font-bold text-[23px] leading-[140%]">
      0{suffix}
    </p>
  );
} 