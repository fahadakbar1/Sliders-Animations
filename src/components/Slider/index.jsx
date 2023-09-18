import { useState, useEffect, useRef } from "react";
import "./index.css";
import ClickableBox from "../ClickableBox";

function Slider() {
  const images = [
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/02/02/17/29/nature-3125912_1280.jpg",
    "https://plus.unsplash.com/premium_photo-1669550788590-859353c91996?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmF5JTIwb2YlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  ];
  const [index, setIndex] = useState(0);
  const [strokeKey, setStrokeKey] = useState(0); // Moved from StrokedSquare
  const strokeRef = useRef(strokeKey); // useRef to keep track of strokeKey in useEffect

  useEffect(() => {
    strokeRef.current = strokeKey; // Update strokeRef whenever strokeKey changes
  }, [strokeKey]);

  const nextImage = () => {
    const topImageDiv = document.querySelector('.top-image');
    const bottomImageDiv = document.querySelector('.bottom-image');
    const boxTopImageDiv = document.querySelector('.box-top-image');
  const boxBottomImageDiv = document.querySelector('.box-bottom-image');
  
    // Apply the slide-out animation
    topImageDiv.classList.add('slide-out');
    bottomImageDiv.classList.add('slide-out');
    boxTopImageDiv.classList.add('slide-out');
  boxBottomImageDiv.classList.add('slide-out');
  
    setTimeout(() => {
      // Change the image after the animation ends
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
      
      // Add no-transition class, change the image, then remove the slide-out class
      topImageDiv.classList.add('no-transition');
      bottomImageDiv.classList.add('no-transition');
      topImageDiv.style.backgroundImage = `url(${images[(index + 1) % images.length]})`;
      bottomImageDiv.style.backgroundImage = `url(${images[(index + 1) % images.length]})`;
      topImageDiv.classList.remove('slide-out');
      bottomImageDiv.classList.remove('slide-out');
      
      // Force a reflow, this is to make sure the next operation will be a separate render
      void topImageDiv.offsetWidth;

      // Remove no-transition class to bring back the animation for next time
      topImageDiv.classList.remove('no-transition');
      bottomImageDiv.classList.remove('no-transition');


      boxTopImageDiv.classList.add('no-transition');
      boxBottomImageDiv.classList.add('no-transition');
      boxTopImageDiv.style.backgroundImage = `url(${images[(index + 1) % images.length]})`;
      boxBottomImageDiv.style.backgroundImage = `url(${images[(index + 1) % images.length]})`;
      boxTopImageDiv.classList.remove('slide-out');
      boxBottomImageDiv.classList.remove('slide-out');
      
      // Force a reflow, this is to make sure the next operation will be a separate render
      void boxTopImageDiv.offsetWidth;

      // Remove no-transition class to bring back the animation for next time
      boxTopImageDiv.classList.remove('no-transition');
      boxBottomImageDiv.classList.remove('no-transition');
    }, 1000); // 1 second because that's our transition duration

    setStrokeKey(strokeRef.current + 1);
};

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="slider-container">
    <div
      className="next-image" 
      style={{ backgroundImage: `url(${images[(index + 1) % images.length]})` }}
    ></div>
    <div
      className="image-part top-image" 
      style={{ backgroundImage: `url(${images[index]})` }}
    ></div>
    <div 
      className="image-part bottom-image" 
      style={{ backgroundImage: `url(${images[index]})` }}
    ></div>
    <ClickableBox
      image={images[(index + 1) % images.length]}
      next={images[(index + 2) % images.length]}
      onClick={nextImage}
      strokeKey={strokeKey} 
    />
  </div>
  );
}

export default Slider;
