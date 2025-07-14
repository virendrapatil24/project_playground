import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(
        () => setSeconds((prev) => prev + 1),
        1000
      );
    }
  };

  const handleStop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setSeconds(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const formatSeconds = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(Math.floor(seconds % 60)).padStart(2, "0");

    return `${hrs} : ${mins} : ${secs}`;
  };

  return (
    <div className="stopwatch__container">
      <h2 className="stopwatch__title">Stopwatch</h2>
      <div className="countdown__container">
        <div className="countdown__label__container">
          <p>Hours</p>
          <p>Minutes</p>
          <p>Seconds</p>
        </div>
        <div className="countdown__time__container">
          {formatSeconds(seconds)}
        </div>
        <div className="countdown__button__container">
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
