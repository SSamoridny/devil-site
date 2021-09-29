import React from 'react';
import openSea from '../assets/open sea.png'
import casino from '../assets/dds_casino_resized.png'
import Fire from '../components/Fire';

export default function Banner () {
  return (
    <div id="page-container-fluid">
          <div className="container">
              
                  <div className="banner">
                      <img src={casino} alt="" style={{height: "100%", width: "100%", objectFit: "contain", borderRadius: "5px"}}/>
                  </div>
          </div>  

          <div className="devil-intro">
                <p>5000 Devils have risen from the depths of HELL to the Blockchain...</p>
                <p>There is no choice, but to join... the DEAD DEVIL SOCIETY</p>
              </div>  
              
              
              <div className="container-fluid flame-icon">
                <div className=" row border-">
                    <div className="list-group-item col-sm d-flex justify-content-center"><a href="https://discord.com/invite/JNhtBgnDGa" target="_blank" rel="noreferrer">< Fire/><i className="fab fa-discord fa-5x" /></a></div>
                    <div className="list-group-item col-sm d-flex justify-content-center"><a href="https://twitter.com/deadevilsociety?lang=en" target="_blank" rel="noreferrer">< Fire/><i className="fab fa-twitter fa-5x" /></a></div>
                    <div className="list-group-item col-sm d-flex justify-content-center"><a href="https://opensea.io/collection/dead-devil-society" target="_blank" rel="noreferrer">< Fire/><i><img className="open-sea" src={openSea} alt="" /></i></a></div>
      
                </div>
              </div>
            
          </div>
        
  )
}