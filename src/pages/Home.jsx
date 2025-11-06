import React, { Component } from 'react';
import Btn from '../component/Navbar';
import { BrowserRouter,Link } from 'react-router-dom';
import ASCIIText from '../component/ASCIIText ';

   import AnimatedText from '../component/AnimatedText';
import SuperCrocoAnimation from '../component/SuperCroco';


   

const Home = () => {
    return ( 


        <>
    


      <ASCIIText
  text='hello_world'
  enableWaves={true}
  asciiFontSize={8}/>

  <AnimatedText text="consume & Create"  />
       <AnimatedText text="OPTIMAL ALIGNMENT" />
       <p>MAKING MAGIC ONE DAY AT A TIME</p>
       <button className="cta-button">WORK WITH US!</button>

       <Btn />
<SuperCrocoAnimation />
        </>
    

    
    
    



     );
}
 
export default Home;