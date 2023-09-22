"use client"

import React, { useState, useEffect } from 'react';
import '../globals.css';

const Carousel = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const imageSize = {
        width: '1000px',
        height: '600px',
    };

    const images = [
        'Img/Kuvatõmmis 2023-09-21 095305.png',
        'img/depositphotos_7277917-stock-photo-pediatrician_1629234070.jpg',
        'Img/pediatric-hospital.jpg',
    ];

    return (
        <div className="flex flex-col align-center justify-center text-center">
            <div className='pt-6 mx-auto'>
                <div className="flex flex-col align-center justify-center">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Description of Image ${index + 1}`}
                            className={`fixed-size-image rounded-2xl ${index === slideIndex ? 'block' : 'hidden'}`}
                            style={imageSize}
                            onMouseOver={() => {}}
                            onMouseOut={() => {}}
                        />
                    ))}
                </div>
            </div>
            <h2 className="text-6xl text-black mt-[10px] mb-[10x]">Beebide ja väikelaste esmaabi</h2>
            <p className="text-2xl text-black mt-[10px] mb-[10x]">Õppige oskusi beebi või lapse abistamiseks hädaolukorras</p>
        </div>
    );
};

export default Carousel;

