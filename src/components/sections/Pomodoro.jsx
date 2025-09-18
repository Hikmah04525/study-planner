import { useState, useEffect, useRef } from "react";

export default function Pomodoro() {
  const [time, setTime] = useState(25 * 60); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("work"); // "work" | "break"
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev === 0) {
            handleSwitchMode();
            return mode === "work" ? 5 * 60 : 25 * 60;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, mode]);

  const handleSwitchMode = () => {
    setMode((prev) => (prev === "work" ? "break" : "work"));
    setIsRunning(false);
  };

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(mode === "work" ? 25 * 60 : 5 * 60);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const motivationalText =
    mode === "work"
      ? "💪 Stay focused, you got this!"
      : "🌱 Take a deep breath and relax.";

  return (
    <div className="pomodoro-page">
      <h2>⏳ Pomodoro Timer</h2>
      <div className="pomodoro-timer">
        <div className="circle">
          <span>
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </span>
        </div>
        <p className="mode">{mode === "work" ? "Work Session" : "Break Time"}</p>
        <p className="motivation">{motivationalText}</p>
        <div className="controls">
          <button onClick={toggleTimer}>
            {isRunning ? "⏸ Pause" : "▶ Start"}
          </button>
          <button onClick={resetTimer}>🔄 Reset</button>
        </div>
      </div>
    </div>
  );
}
