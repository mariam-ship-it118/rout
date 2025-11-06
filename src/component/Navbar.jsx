import React, { Component } from 'react';
import { BrowserRouter,Link } from 'react-router-dom';
import './Navbar.css';

const Btn = () => {
    return ( 

<>

<Link to="/aboutus">
<button className='buttn'>About Us</button>
</Link>

</>

  

    );

}
 
export default Btn;


