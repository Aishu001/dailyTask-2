import React from 'react'
import './App.css'
import ShoppingCart from './ShoppingCart'
import { BrowserRouter as Router, Route, Link, Routes  } from "react-router-dom"
import Home from './Home'

function App() {


  return (
    <>
   {/* <ShoppingCart/>    */}

   <Router>
      <div>
            <Routes>
              <Route path ="/" exact Component={Home} ></Route>
              <Route path ="/products"  Component={ShoppingCart} ></Route>
 
            </Routes>
 
      </div>
     </Router>
    </>
  )
}

export default App
