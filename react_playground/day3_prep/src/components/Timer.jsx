import React from "react";

const Timer = () => {
  return (
    <div className="timer__container">
      <h2 className="timer__title">Timer</h2>
      <div className="countdown__container">
        <div className="countdown__label__container">
          <p>Hours</p>
          <p>Minutes</p>
          <p>Seconds</p>
        </div>
        <div className="countdown__time__container">
          <input
            type="number"
            onInput={(e) => {
              if (e.target.value.length > 2) {
                e.target.value = e.target.value.slice(0, 2);
              }
            }}
            placeholder="00"
          />
          <p>:</p>
          <input
            type="number"
            onInput={(e) => {
              if (e.target.value.length > 2) {
                e.target.value = e.target.value.slice(0, 2);
              }
            }}
            maxLength={2}
            placeholder="00"
          />
          <p>:</p>
          <input
            type="number"
            onInput={(e) => {
              if (e.target.value.length > 2) {
                e.target.value = e.target.value.slice(0, 2);
              }
            }}
            maxLength={2}
            placeholder="00"
          />
        </div>
        <div className="countdown__button__container">
          <button>Start</button>
          <button>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
