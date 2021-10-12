import React from "react";
import Card from '../components/Card'
import Ghost from '../assets/membersNFT/gxosts.png'
import Ape from '../assets/membersNFT/Ape3759.png'
import MemberNav from "../components/MemberNav.js";


function MemberNFT (props) {
  return (
    
    <div>
      <MemberNav />
      <h1 id='portfolio' style={{ fontFamily: "scary", fontSize: "6rem", color: 'white' }}>DOA NFT COLLECTION</h1>
        <div className="container-fluid">
        <div className="row">
          
          <div className="col-md-6 mb-4">
            <Card
              name="Ghxsts Lunar Zxdiac - Horse"
              cardimg={Ghost}
              openseaLink="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/80494307024529346018053650490912529916739680814770830097664395778913487290398"
              description="PURCHASE PRICE: 8.88 ETH (USD $31,801.94)"
              description2="CURRENT FLOOR: 5.917 ETH"
            />
          </div>

          <div className="col-md-6 mb-4">
            <Card
              name="BAYC 3759"
              cardimg={Ape}
              openseaLink="https://opensea.io/assets/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/3759"
              description="PURCHASE PRICE: 30.01 ETH (USD $107,386.88)"
              description2="CURRENT FLOOR: 39.48 ETH"
            />
          </div>

          {/* <div className="col-md-6 mb-4">
            <Card
              name="K3YS NFT Website"
              projectname="K3YS"
              titlecolor="midnightblue"
              cardimg={keys}
              projectlink="https://k3ys.netlify.app/"
              githublink="https://github.com/SSamoridny/K3YS"
              description="In my first B2B project I was able to work with the business director of K3YS to create their site. Using best practice styles and designs, I was able to create the project to their specifications, straight to the point, and make it about the art."
              description2="Created With: HTML, CSS"
            />
          </div>

          <div className="col-md-6 mb-4">
            <Card
              name="Drastic Measurements"
              projectname="Drastic Measurements"
              titlecolor="midnightblue"
              cardimg={drastic}
              projectlink="https://vast-taiga-98028.herokuapp.com/"
              githublink="https://github.com/SSamoridny/Dashboard"
              description="Created for a real world production company, Drastic Measurements is an app designed for costume measurements for Broadway productions."
              description2="Created With: HTML, CSS, JavsScript, Bootstrap, MongoDB, Node.JS, and Express"
            />
          </div>

          <div className="col-md-6 mb-4">
            <Card
              name="Weather Dashboard"
              projectname="Weather Dashboard"
              titlecolor="midnightblue"
              cardimg={weather}
              projectlink="https://ssamoridny.github.io/Weather-Dashboard-Homework-6/"
              githublink="https://github.com/SSamoridny/Weather-Dashboard-Homework-6"
              description="Not sure what to pack on your vacation? Check the 5 day forecast on the Weather Dashboard. Using weather APIs to power this JavaScript app, I was able to bring you a fully functional app with local storage to keep your weather needs on hand."
              description2="Created With: HTML, CSS, JavsScript"
            />
          </div>

          <div className="col-md-6 mb-4">
            <Card
              name="Workout Tracker"
              projectname="Workout Tracker"
              titlecolor="midnightblue"
              cardimg={workout}
              projectlink="https://fathomless-headland-20645.herokuapp.com/"
              githublink="https://github.com/SSamoridny/NoSQL-Workout-Tracker"
              description="Working out is hard enough. Sometimes you can't even stand let alone remember what you did last time. Wonder no more with the Workout Tracker!"
              description2="Created With: HTML, CSS, JavsScript, Bootstrap, MongoDB, Node.JS, and Express"
            />
          </div> */}

        </div>
      </div>
    </div>
  );
}

export default MemberNFT;