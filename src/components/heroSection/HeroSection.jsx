import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const texts = []; // Texto particular para cada imagen

    const settings = {
        autoplay: true,
        autoplaySpeed: 5000, // 5 segundos de intervalo
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                }
            }
        ],
        beforeChange: (current, next) => setCurrentSlide(next)
    };

    const images = [
        'https://i.ibb.co/NrNy9Jj/fam.jpg',
        'https://i.ibb.co/9sh0ZbM/banner-2.jpg',
        'https://i.ibb.co/hVs2dk2/banner.jpg',
        'https://i.ibb.co/QJByKdz/BF-1.jpg,',
        
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(texts[currentSlide]);
        }, 2000);

        return () => clearInterval(interval);
    }, [currentSlide, texts]);

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Slide ${index + 1}`} />
                </div>
            ))}
        </Slider>
    );
}

export default HeroSection;
