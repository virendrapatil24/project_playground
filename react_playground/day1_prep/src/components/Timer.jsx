import { useEffect, useState } from "react";
import "./base.css";
import axios from "axios";
import Button from "./Button";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [joke, setJoke] = useState("please wait let me fetch it first");
  const [showJoke, setShowJoke] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    const fetchJoke = async () => {
      const response = await axios.get(
        "https://official-joke-api.appspot.com/random_joke"
      );
      console.log(response.data);
      setJoke(response.data.setup + response.data.punchline);
    };

    fetchJoke();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="timer-container">
        <div>Timer: {time}</div>
        <Button
          text={showJoke ? "Hide Joke" : "Show Joke"}
          onclick={() => setShowJoke(!showJoke)}
        />
        {showJoke && <div className="joke">Joke of the Day: {joke}</div>}
      </div>
    </div>
  );
};

export default Timer;
