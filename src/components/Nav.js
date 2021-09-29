import React from "react"
import logo from "../assets/dds_logo.png"
import {Link } from 'react-scroll'

export default function Navbar() {
  return (

    <nav class="navbar navbar-light bg-black fixed-top">
        <div class="container-fluid">
            
            <span id="nav-brand" class="navbar-brand"><img src={logo} alt="" style={{height: "4rem", width: "4rem", marginRight:"2rem"}}/>DEAD DEVIL SOCIETY</span>
            <button class="navbar-toggler bg-danger"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon" ></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">DDS</h5>
                <button type="button"  class="btn-close btn-close-white text-reset"  data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item" >
                    <Link class="nav-link active" aria-current="page" data-bs-dismiss="offcanvas" to="learn-section" smooth={true} style={{color: "white"}}>LEARN</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" data-bs-dismiss="offcanvas" to="rarity-section" smooth={true} style={{color: "white"}}>RARITY</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" data-bs-dismiss="offcanvas" to="faq-section" smooth={true} style={{color: "white"}}>FAQ</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" data-bs-dismiss="offcanvas" to="roadmap-section" spy={true} smooth={true} style={{color: "white"}}>ROADMAP</Link>
                </li>
                </ul>
                
            </div>
            </div>
        </div>
    </nav>


  );
}