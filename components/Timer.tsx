"use client";

import { useEffect, useState } from "react";
import { TbDotsVertical } from "react-icons/tb";
// convert to 3 to seconsd and add 23 hours , 45 minuts and 59 secons
const intialTime = 3 * 24 * 60 * 60 + 23 * 60 * 60 + 45 * 60 + 59;

function formatDate(seconds: number) {
  const daysLeft = Math.floor(seconds / (24 * 60 * 60));
  const hoursLeft = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
  const minutesLeft = Math.floor((seconds % (60 * 60)) / 60);
  const seconsLeft = Math.floor(seconds % 60);
  return { daysLeft, hoursLeft, minutesLeft, seconsLeft };
}
export default function Timer({ className }: { className: string }) {
  const [timeLeft, setTimeLeft] = useState(intialTime);

  const { daysLeft, hoursLeft, minutesLeft, seconsLeft } = formatDate(timeLeft);
  useEffect(function () {
    //listen and update the timer  at each second.
    const timerId = setInterval(function () {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : intialTime));
    }, 1000);

    // clear the timer after componetns unmounts
    return () => {
      return clearInterval(timerId);
    };
  }, []);
  return (
    <div
      className={`text-black gap-x-2 lg:gap-x-5 flex-wrap flex items-center lg:justify-between justify-around ${className}`}
    >
      <CombineItems isLastOne={false} title="Days" value={daysLeft} />
      <CombineItems isLastOne={false} title="Hours" value={hoursLeft} />
      <CombineItems isLastOne={false} title="Minutes" value={minutesLeft} />
      <CombineItems isLastOne={true} title="Seconds" value={seconsLeft} />
    </div>
  );
}

function CombineItems({
  title,
  value,
  isLastOne,
}: {
  title: string;
  value: number;
  isLastOne: boolean;
}) {
  return (
    <div className="flex items-center  gap-x-5 mb-2">
      <div className="flex flex-col items-center justify-around">
        <span className="font-light text-gray-600">{title}</span>
        <h4 className=" font-bold text-[1rem] lg:text-[1.5rem] ">
          {`${value < 9 ? `0${value}` : value}`}
        </h4>
      </div>
      {!isLastOne && (
        <TbDotsVertical className="text-teritiaryOrangeColor mt-5" />
      )}
    </div>
  );
}
