import React from 'react'
import './headerComponent.css'
import { Navbar, Nav } from 'react-bootstrap';
const HeaderComponent = () => {
  return (
  <>
   <div> <nav className="navbar navbar-expand-lg bg-body-tertiary">
   <div className="container-fluid">
     <a className="navbar-brand" href="#"><h1>Gastón Benítez</h1></a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
       <div className="navbar-nav">
         <a className="nav-link active" aria-current="page" href="#">Home</a>
         <a className="nav-link" href="#">About</a>
         <a className="nav-link" href="#">Projects</a>
         <a className="nav-link " href='#'>Education</a>
         
       </div>
     </div>
   </div>
 </nav>
  </div>

</>
  )
}

export default HeaderComponent