     import { useEffect, useState } from 'react';

     const AnimatedText = ({ text }) => {
       const [visibleLetters, setVisibleLetters] = useState([]);

       useEffect(() => {
         const letters = text.split('');
         letters.forEach((_, index) => {
           setTimeout(() => {
             setVisibleLetters(prev => [...prev, index]);
           }, index * 100); // Stagger delay
         });
       }, [text]);

       return (
         <div className="animated-text">
           {text.split('').map((letter, index) => (
             <span key={index} className={visibleLetters.includes(index) ? 'visible' : ''}>
               {letter}
             </span>
           ))}
         </div>
       );
     };

     export default AnimatedText;
     