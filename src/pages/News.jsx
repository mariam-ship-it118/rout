import React, { Component } from 'react';
import { Link } from 'react-router-dom';




const News = () => {
    return ( 
   <>
     <Link to="news/n1">
         <h1>Article 1</h1>
        </Link>


 <Link to="news/n2">
         <h1>Article 2</h1>
        </Link>
   
   
   
   </> 
      
     );
}
 
export default News;