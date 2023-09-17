import React, { useEffect, useState } from 'react';
import './index.css';

const StrokedSquare = () => {
    return (
        <div className="square">
            <div className="border-horizontal"></div>
            <div className="border-vertical"></div>
        </div>
    );
}
export default StrokedSquare;