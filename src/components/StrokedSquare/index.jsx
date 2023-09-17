import React, { useEffect, useState } from 'react';
import './index.css';

const StrokedSquare = () => {
    const [key, setKey] = useState(0); // Unique key to remount component and re-trigger animation

    useEffect(() => {
        const timer = setTimeout(() => {
            setKey(prevKey => prevKey + 1); // Update the key to force re-render and re-trigger animation
        }, 4000); // 4 seconds 

        return () => {
            clearTimeout(timer); // Cleanup timer to avoid any unexpected behavior
        };
    }, [key]);

    return (
        <div className="square" key={key}>
            <div className="border-horizontal"></div>
            <div className="border-vertical"></div>
        </div>
    );
}
export default StrokedSquare;