import React from "react"
import {Link } from 'react-scroll'

export default function Navbar() {
  return (

    <nav class="navbar navbar-light bg-danger fixed-top">
        <div class="container-fluid">
            <span></span>
            <span id="nav-brand" class="navbar-brand">DEAD DEVIL SOCIETY</span>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">DDS</h5>
                <button type="button"  class="btn-close btn-close-white text-reset"  data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item" >
                    <Link class="nav-link active" aria-current="page" to="learn-section" style={{color: "white"}}>LEARN</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="rarity-section" style={{color: "white"}}>RARITY</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="faq-section" style={{color: "white"}}>FAQ</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="roadmap-section" style={{color: "white"}}>ROADMAP</Link>
                </li>
                </ul>
                
            </div>
            </div>
        </div>
    </nav>


  );
}