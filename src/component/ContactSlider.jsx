import React, { useEffect, useRef } from "react";
import "./ContactSlider.css";

const ContactSlider = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      imagesRef.current.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          img.classList.add("slide-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const images = [
    "./assets/contact.svg",
   
  ];

  return (
    <section className="contact-slider">
      {images.map((src, index) => (
        <div
          key={index}
          ref={(el) => (imagesRef.current[index] = el)}
          className="slide-image"
        >
          <div className="image-box">
            <img src={src} alt={`Slide ${index}`} className="imagee" />
          </div>
        </div>
      ))}
    </section>
  );

  
};

export default ContactSlider;
