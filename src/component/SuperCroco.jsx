import React, { useState, useEffect } from 'react';
import './SuperCroco.css';
import Croco from "../assets/supercroco.svg";
import AnimatedText from './AnimatedText';




const SuperCrocoAnimation = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate position for circular flight
  const centerX = window.innerWidth / 2; // Center of screen horizontally
  const centerY = window.innerHeight / 2; // Center of screen vertically
  const radius = 150; // Radius of the circle (adjust for larger/smaller orbit)
  const speed = 0.01; // Speed of rotation based on scroll (adjust for faster/slower)
  const angle = scrollY * speed; // Angle increases with scroll

  const x = centerX + radius * Math.cos(angle) - 50; // Offset by half image width for centering
  const y = centerY + radius * Math.sin(angle) - 50; // Offset by half image height for centering

  return (
    <div className="landing-section">
      <img src={Croco} // Adjust path if your image is elsewhere
        alt="SuperCroco"
        className="super-croco"
        style={{
          transform: `translate(${x}px, ${y}px) rotate(${angle * (180 / Math.PI)}deg)`, // Move and rotate for flying effect
        }}
      />
      {/* Add your landing content here, e.g., text, buttons */}
      <AnimatedText text='Measure Twice' />
      <AnimatedText text='Cut Once' />
    </div>
  );
};

export default SuperCrocoAnimation;
