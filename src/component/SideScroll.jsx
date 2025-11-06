import React, { Component } from 'react';
import "./SideScroll.css";
import SideText from './SideText';
import faaa from "../assets/side1.svg";
import laaa from "../assets/side2.svg";
import paaa from "../assets/side3.svg";
import taaa from "../assets/side4.svg";
import kaaa from "../assets/side5.svg";

import saaa from "../assets/side6.svg";
import maaa from "../assets/side7.svg";
import naaa from "../assets/side8.svg";
import raaa from "../assets/side9.svg";

const SideScroll = () => {
    return ( 
<section className='scrollframe'>

<section className='dis'>
       <SideText />
       <img src={faaa} alt="" className='imginside' />
       <img src={laaa} alt="" className='imginside' />
       <img src={paaa} alt="" className='imginside' />
       <img src={taaa} alt="" className='imginside' />
       <img src={kaaa} alt="" className='imginside' />
       <img src={saaa} alt="" className='imginside' />
       <img src={maaa} alt="" className='imginside' />
       <img src={naaa} alt="" className='imginside' />
       <img src={raaa} alt="" className='imginside' />
</section>
</section>
   

     );
}
 
export default SideScroll;