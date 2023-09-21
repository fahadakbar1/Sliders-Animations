import React, { useState } from 'react';
import "./index.css";
import { useSwipeable } from 'react-swipeable';

const images = [
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/02/02/17/29/nature-3125912_1280.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZbRmm2ytky-H8x_YfdYfOtvV_-THs8cQrzw&usqp=CAU",
    "https://plus.unsplash.com/premium_photo-1669550788590-859353c91996?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmF5JTIwb2YlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  ];

function SecondSlider() {
    const [currentIndex, setCurrentIndex] = useState(1);

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            setCurrentIndex(prev => (prev + 1) % images.length);
        },
        onSwipedRight: () => {
            setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    const displayedImages = [
        images[(currentIndex - 1 + images.length) % images.length],
        images[currentIndex],
        images[(currentIndex + 1) % images.length]
    ];

    return (
        <div {...handlers} className="slider">
            {displayedImages.map((image, index) => (
                <div
                    key={image}
                    className={`slider-image ${index === 0 ? 'left' : index === 2 ? 'right' : 'center'}`}
                >
                    <img src={image} alt={`Slider ${index}`} />
                </div>
            ))}
        </div>
    );
}

export default SecondSlider;
