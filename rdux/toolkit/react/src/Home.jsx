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
    <h1 className='tracking-in-contract-bck-top'>
        Smart Phones 
      </h1>
     <Image className='scale-up-center' src="OnePlus-11-1-1024x668.jpeg" fluid />
    <Navbar expand="lg" className="fixed-top">
        <Container>
          
            <Nav className="nav-link"> 
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </Nav>
          
        </Container>
      </Navbar>
    </>
  )
}

export default Home