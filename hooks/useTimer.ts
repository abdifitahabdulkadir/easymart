import { useEffect, useState } from "react";
// convert to 3 to seconsd and add 23 hours , 45 minuts and 59 secons
const intialTime = 3 * 24 * 60 * 60 + 23 * 60 * 60 + 45 * 60 + 59;

function formatDate(seconds: number) {
  const daysLeft = Math.floor(seconds / (24 * 60 * 60));
  const hoursLeft = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
  const minutesLeft = Math.floor((seconds % (60 * 60)) / 60);
  const seconsLeft = Math.floor(seconds % 60);
  return { daysLeft, hoursLeft, minutesLeft, seconsLeft };
}
export function useTimer() {
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

  return { daysLeft, hoursLeft, minutesLeft, seconsLeft };
}
