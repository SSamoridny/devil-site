import React from "react";
import logo from "../assets/dds_logo.png";
// import openSea from "../assets/open sea.png";
import twitter from "../assets/twitter.png";
import discord from "../assets/discord.png";
import { Link } from "react-scroll";
import ReactAudioPlayer from "react-audio-player"
import music from "../assets/Dead_Devils_Society_Theme_2.wav"

// import MemberCheck from "./MemberCheck";


export default function Navbar() {
  return (
    <nav
      class="navbar navbar-light fixed-top"
      style={{ backgroundColor: "rgb(156, 18, 18)" }}
    >
      <div class="container-fluid">
        <span id="nav-brand" class="navbar-brand">
          <div className="top-nav">
            <img
              src={logo}
              alt=""
              style={{ height: "4rem", width: "4rem", marginRight: "2rem" }}
            />
            DEAD DEVIL SOCIETY
          </div>
        </span>
        <ReactAudioPlayer
            style={{display: 'inline-block', margin: 'auto', width: '8rem'}}
            src={music}
            autoPlay
            loop
            controls
          />
        <div classname="ms-auto" class=" ms-auto mr-5">
          <a
            href="https://discord.com/invite/JNhtBgnDGa"
            target="_blank"
            rel="noreferrer"
          >
            <i>
              <img className="icon-size ml-3 top-nav" src={discord} alt="" />
            </i>
          </a>
          <a
            href="https://twitter.com/deadevilsociety?lang=en"
            target="_blank"
            rel="noreferrer"
          >
            <i>
              <img className="icon-size ml-3 top-nav" src={twitter} alt="" />
            </i>
          </a>
          

        </div>
        <button
          class="navbar-toggler"
          style={{
            border: "2px solid white",
            backgroundColor: "rgb(156, 18, 18)",
          }}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5
              class="offcanvas-title"
              id="offcanvasNavbarLabel"
              style={{ fontFamily: "scary", color: "white", fontSize: "3rem" }}
            >
              DDS
            </h5>
            <button
              type="button"
              class="btn-close btn-close-white text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" style={{cursor: 'pointer'}}>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  offset="1"
                  aria-current="page"
                  data-bs-dismiss="offcanvas"
                  to="learn-section"
                  smooth={true}
                  style={{ color: "white" }}
                >
                  WELCOME TO THE DDS
                </Link>
              </li>
              
              <li>
                <Link
                class="nav-item"
                aria-current="page"
                data-bs-dismiss="offcanvas"
                to="faq"
                smooth="true"
                style={{color: 'white'}}
                >
                  FAQ
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  data-bs-dismiss="offcanvas"
                  to="team-section"
                  smooth={true}
                  style={{ color: "white" }}
                >
                  TEAM DDS
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  data-bs-dismiss="offcanvas"
                  to="roadmap-section"
                  spy={true}
                  smooth={true}
                  style={{ color: "white" }}
                >
                  ROADMAP
                </Link>
              </li>

              {/* <MemberCheck /> */}
              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
