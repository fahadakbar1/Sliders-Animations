import React, { useState, useEffect } from "react";
import "./index.css";

function ClickableBox({ image, onClick }) {
  const [animationState, setAnimationState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState((prevState) => (prevState + 1) % 4);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="box-container" onClick={onClick}>
      <img src={image} alt="next" className="next-image" />
      <div className={`border-animation state-${animationState}`}></div>
    </div>
  );
}

export default ClickableBox;