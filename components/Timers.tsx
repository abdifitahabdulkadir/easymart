"use client";
import { useTimer } from "@/hooks/useTimer";
import { popois } from "@/lib/font";
import DisplayTimerItemValue from "./DisplayTimeritem";
interface ProsType {
  className?: string;
}
export function FlashItemsTimer({ className }: ProsType) {
  const { daysLeft, hoursLeft, minutesLeft, seconsLeft } = useTimer();
  return (
    <div
      className={`text-black gap-x-2 lg:gap-x-5 flex-wrap flex items-center  justify-around  ${className} w-fit`}
    >
      <DisplayTimerItemValue isLastOne={false} title="Days" value={daysLeft} />
      <DisplayTimerItemValue
        isLastOne={false}
        title="Hours"
        value={hoursLeft}
      />
      <DisplayTimerItemValue
        isLastOne={false}
        title="Minutes"
        value={minutesLeft}
      />
      <DisplayTimerItemValue
        isLastOne={true}
        title="Seconds"
        value={seconsLeft}
      />
    </div>
  );
}

export function BestSellingProductsTimer() {
  const times = Object.entries(useTimer());
  return (
    <div
      className={`grid grid-cols-2 gap-y-2 lg:grid-cols-4 gap-x-2  ${popois.className} `}
    >
      {times.map(([key, value], index) => {
        return (
          <div
            key={key + value}
            className="flex flex-col  bg-white rounded-full items-center justify-center h-[2.6rem]  py-2 md:py-1 w-[2.6rem] md:h-[3rem] md:w-[3rem]"
          >
            <h4 className="font-semibold text-black text-base">
              {value < 9 ? `0${value}` : value}
            </h4>
            <span className="font-normal text-[0.4rem] text-black">
              {index == 0 && "Days"}
              {index == 1 && "Hours"}
              {index == 2 && "Minutes"}
              {index == 3 && "Seconds"}
            </span>
          </div>
        );
      })}
    </div>
  );
}
