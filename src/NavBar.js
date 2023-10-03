import React from 'react';
import logo from './image/logo.png'
import './App.css';
function NavBar() {
  return (
    <><div>
        <header id="home">
    <div className="container-fluid">
        <nav
        className="navbar navbar-expand-lg navbar-light bg-light px-4  fixed-top"
      >
      <div className="container-fluid">
        <img src={logo} className="navbar-brand fs-2" id='logo'/>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 text-center">
            <li className="nav-item">
              <a href="#home"
                className="nav-link text-dark active "
                aria-current="page"
                >Home</a >
            </li>
            <li className="nav-item ">
              <a href="#delmanage" className=" nav-link text-dark mx-2">Details</a>
            </li>
          </ul>
        </div>
      </div>
    </nav> 
    </div>
  </header>
  </div> 
  </>
  )
}

export default NavBar