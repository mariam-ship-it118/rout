import React, { Component } from 'react';
import {useParams} from 'react-router-dom';



const Subnews = () => {
    
    let news ={
       n1:{
        title:"artilce 1",
        para:"start with this and..."
       },
       n2:{
         title:"artilce 2",
        para:"start with this and..."
       }
    };
    
    let {id} = useParams();
    console.log(id);
    return ( 
       <>
       <span>{news[id].para}</span>
      <h1>{news[id].title}</h1>
       </>
     );
}
 
export default Subnews; 