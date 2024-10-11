"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import TimeContainer from "./_components/TimeConctainer";

interface TimeLeft {
  jours?: number;
  heures?: number;
  minutes?: number;
  secondes?: number;
}

export default function Home() {
  const calculateTimeLeft = (): TimeLeft => {
    const year = new Date().getFullYear();
    const difference = +new Date(`${year}-10-15T20:00:00`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
        heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        secondes: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="relative h-[100dvh] flex flex-col items-center justify-center gap-20 lg:gap-40">
      <Image
        className="w-[300px] lg:absolute lg:w-[550px]"
        src="/assets/logo_gif.gif"
        width={550}
        height={550}
        alt="logo"
      />
      <div className="w-full grid grid-cols-4 place-content-center z-50">
        <TimeContainer time={timeLeft.jours} day="Jours" />
        <TimeContainer time={timeLeft.heures} day="Heures" />
        <TimeContainer time={timeLeft.minutes} day="Minutes" />
        <TimeContainer time={timeLeft.secondes} day="Secondes" />
      </div>
      <div className="absolute bottom-2 right-2 md:bottom-5 md:right-10 text-sm">
        © 2024 SFDTS
      </div>
    </div>
  );
}
