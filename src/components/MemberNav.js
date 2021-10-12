import React from "react";
import logo from "../assets/dds_logo.png";
import openSea from "../assets/open sea.png";
import twitter from "../assets/twitter.png";
import discord from "../assets/discord.png";
import { Link } from "react-router-dom";


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
            <Link
              to='/devil-site'
              style={{ textDecoration: "none", color: "white" }}
            >
              DEAD DEVIL SOCIETY
            </Link>
          </div>
        </span>
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
          <a
            href="https://opensea.io/collection/dead-devil-society"
            target="_blank"
            rel="noreferrer"
          >
            <i>
              <img className="icon-size ml-3 top-nav" src={openSea} alt="" />
            </i>
          </a>
        </div>
      </div>
    </nav>
  );
}
