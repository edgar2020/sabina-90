import React, { useState, useEffect, useRef } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Clean up on unmount
  }, [images.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollY = window.scrollY;
        carouselRef.current.style.transform = `translateY(${scrollY * 0.3}px)`; // Adjust parallax speed (0.3)
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="carousel-container">
        <div className="image-carousel" ref={carouselRef}>
        {images.map((image, index) => (
            <div
                key={index}
                className={`carousel-background-slide ${index === currentIndex ? 'active' : ''}`}
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            ))}

        {images.map((image, index) => (
        <img
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            src={image}
            alt=''
        />))}
        </div>
    </div>
  );
};

export default ImageCarousel