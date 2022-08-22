import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Resume Builder</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/template">Template</Link>
       
        
       
      </div>
      
    </div>

    <Link className="nav-link" to="/registar">Register</Link>
      <Link className="nav-link" to="/signin">SignIn</Link>
      <Link className="nav-link" to="/about"  >About Us</Link>
  </div>
</nav>
    </div>
  )
}

export default Header
