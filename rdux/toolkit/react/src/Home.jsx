import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {  Link } from "react-router-dom"
import './Home.css'
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

function Home() {
  return (
    <>
    <div className='home-container'>
    <Link to="/products" ><button className='homeButton'> Click here to Purchase !!!</button></Link>
      <img src="oneplus9pro-colours.webp" alt=""  className='imageHome' />
    </div>
   
    </>
  )
}

export default Home