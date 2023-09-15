import { useState, useEffect } from "react";
import "./index.css";
import ClickableBox from "../ClickableBox";

function Slider() {
  const images = [
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/02/02/17/29/nature-3125912_1280.jpg",
    "https://plus.unsplash.com/premium_photo-1669550788590-859353c91996?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmF5JTIwb2YlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  ];
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    const topImageDiv = document.querySelector('.top-image');
    const bottomImageDiv = document.querySelector('.bottom-image');
  
    // Apply the slide-out animation
    topImageDiv.classList.add('slide-out');
    bottomImageDiv.classList.add('slide-out');
  
    setTimeout(() => {
      // Change the image after the animation ends
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
      
      // Remove the slide-out animation so that the divs return to their original position
      // topImageDiv.classList.remove('slide-out');
      // bottomImageDiv.classList.remove('slide-out');
    }, 1000); // 1 second because that's our transition duration
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
    <img 
      src={images[(index + 1) % images.length]} 
      alt="next" 
      className="next-image" 
    />
    <div
    key={index}
      className="image-part top-image" 
      style={{ backgroundImage: `url(${images[index]})` }}
    ></div>
    <div 
      key={index + 1}
      className="image-part bottom-image" 
      style={{ backgroundImage: `url(${images[index]})` }}
    ></div>
    <ClickableBox
      image={images[(index + 1) % images.length]}
      onClick={nextImage}
    />
  </div>
  );
}

export default Slider;
