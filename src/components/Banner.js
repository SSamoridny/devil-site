import React from "react";
import casino from "../assets/dds_casino_resized.png";


export default function Banner() {
  return (
    <div id="page-container-fluid">
      <div className="container">
        <div className="banner">
          <img
            src={casino}
            alt=""
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
              borderRadius: "5px",
            }}
          />
        </div>
      </div>


      <div className="devil-intro p-5 text-center">
        <p>5000 Devils have risen from the depths of HELL to the Blockchain</p>
        <p>There is no choice, but to join... the DEAD DEVIL SOCIETY</p>
      </div>
    </div>
  );
}
