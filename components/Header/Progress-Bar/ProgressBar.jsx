import { useState, useEffect } from "react";
import "./ProgressBar.css";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const maxProgress = 4e5

  useEffect(() => {
    if (progress < maxProgress && isRunning) {
      const interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 100, maxProgress)); 
      }, 5);

      return () => clearInterval(interval);
    }
  }, [progress, isRunning]);
  return (
    <>
      <div className="line">
        <div className="line-result">
          <h3 className="line-name">Заработанно учениками:</h3>
          <p className="line-progress" onClick={() => setIsRunning((prev) => !prev)}>{progress}₽</p>
        </div>
        <div className="line-arr">
          <div
            className="line-bg"
            style={{
              height: "100%",
              width: `${(progress / maxProgress) * 40}%`,
              background: "linear-gradient(141deg, #df5950 0%, #451046 100%)",
              transition: "width 0.5s ease-in-out",
            }}
          ></div>
        </div>
        <div className="line-goal">
          <div className="start">0</div>
          <div className="end">1 000 000₽</div>
        </div>
      </div>
    </>
  );
}
