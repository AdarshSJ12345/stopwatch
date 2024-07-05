import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './Websiterouter/Home'
import About from './Websiterouter/About'
import Contact from './Websiterouter/Contact'
function Newwebsite() {
  return (
         
    <div className="video-background">
    <video autoPlay loop muted>
      <source src="your-video-file.mp4" type="video/mp4" /> 
    </video>
        <div className='content'>
          <head>
          <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  <title>my bike website</title>
  </head>
          <div className='mainhead'>
            <h1 >MY BIKE <br/>WEBSITE<br/></h1>
            
            <Router>
              <nav className='nav-bar'>
                <ul className='navbar-list'>
                  <li className='navbarlist-child'><Link to="/home">Home</Link></li>
                  <li className='navbarlist-child'><Link to="/about">About</Link></li>
                  <li className='navbarlist-child'><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>
              <Routes>
                <Route path="Mynewwebsite\Newwebsite.jsx" element={<Home/>}></Route>
                <Route path="" element={<About/>}></Route>
                <Route path="" element={<Contact/>}></Route>
              </Routes>
            </Router>
            </div>
            <div className='mainhead2'>
              <h2>    its your road <br/>   <span>others can ride it with you </span><br/> but noone can ride it <br/>for you</h2>
            </div>
        </div>
      </div>
   
  )
}

export default Newwebsite
