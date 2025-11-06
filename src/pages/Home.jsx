import React, { Component } from 'react';
import Btn from '../component/Navbar';
import { BrowserRouter,Link } from 'react-router-dom';
import ASCIIText from '../component/ASCIIText ';



const Home = () => {
    return ( 


        <>
      <p className='whitef'>Artistics</p>
    
      <Btn />


      <ASCIIText
  text='hello_world'
  enableWaves={true}
  asciiFontSize={8}
/>




        </>
    

    
    
    



     );
}
 
export default Home;