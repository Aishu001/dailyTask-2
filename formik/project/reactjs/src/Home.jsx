import React from 'react'


import { BrowserRouter as Router, Route, Link, Routes  } from "react-router-dom"

import './Home.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AddAuthor from './AddAuthor';
import AddBook from './AddBook';

function Home() {
  return (
    <> 
   
   
    <div className='sub'>
      <p className='sub'>
        Book Details
      </p>
      <p className='sub'>
        Author Details
      </p>
    </div>
  
        {/* <img className='home-img' src="library-slider-img-3_1653482722.jpeg" alt="" /> */}
       
        <div className="button-con">
        
          <Link to="/book">
            
            
           
      <Card.Img variant="top" src="istockphoto-1318319153-612x612.jpeg "   className='card-img'/>
      
  
          </Link>
         
          <Link to="/author">

          
          
      <Card.Img variant="top" src="img2.png" className='card-img'/>
      
          </Link>
        </div>
     
   
    

    </>
  )
}

export default Home