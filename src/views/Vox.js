import openSea from "../assets/open sea.png";
import vox1 from "../assets/vox/vox001.gif";
import vox2 from "../assets/vox/vox008.png";
import vox3 from "../assets/vox/vox011.png";
import vox4 from "../assets/vox/vox014.png";
import vox5 from "../assets/vox/vox024.png";
import vox6 from "../assets/vox/voxKnight.png";
import vox7 from "../assets/vox/vox019.png";
import vox8 from "../assets/vox/vox013.png";
import vox9 from "../assets/vox/vox025.png";
import vox10 from "../assets/vox/vox007.png";
import vox11 from "../assets/vox/vox010.png";
import vox12 from "../assets/vox/vox002.gif";
import vox13 from "../assets/vox/vox003.png";
import vox14 from "../assets/vox/vox018.png";
import vox15 from "../assets/vox/vox004.png";
import vox16 from "../assets/vox/vox006.png";
import vox17 from "../assets/vox/vox005.png";
import vox18 from "../assets/vox/vox023.png";
import vox19 from "../assets/vox/vox028.png";
import vox20 from "../assets/vox/vox009.png";
import vox21 from "../assets/vox/voxbast.png";
import vox22 from "../assets/vox/voxyc.png";
import vox23 from "../assets/vox/vox026.png";
import vox24 from "../assets/vox/vox017.png";

export default function Vox() {
  return (
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-bs-ride="carousel"
      style={{ textAlign: "center" }}
    >
      <h1
        className="pl-5"
        style={{ fontFamily: "scary", fontSize: "8rem", color: "white" }}
      >
        VOX Devils
        <a
          href="https://opensea.io/collection/voxel-devils-1"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            textDecoration: "none",
            color: "white",
          }}
        >
          <i>
            <img
              className="art-link ml-5 top-nav mr-2"
              src={openSea}
              alt="Open Sea icon"
            />
          </i>
        </a>
      </h1>
      <div
        class=" carousel-inner pb-5"
        style={{ width: "90%", margin: "auto" }}
      >
        <div class="carousel-item active" data-bs-interval="4000">
          <img src={vox1} class="artpic-vox" alt="" />
          <img src={vox2} class="artpic-vox" alt="" />
          <img src={vox3} class="artpic-vox" alt="" />
          <img src={vox4} class="artpic-vox" alt="" />
          <img src={vox5} class="artpic-vox" alt="" />
          <img src={vox6} class="artpic-vox" alt="" />
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <img src={vox7} class="artpic-vox" alt="" />
          <img src={vox8} class="artpic-vox" alt="" />
          <img src={vox9} class="artpic-vox" alt="" />
          <img src={vox10} class="artpic-vox" alt="" />
          <img src={vox11} class="artpic-vox" alt="" />
          <img src={vox12} class="artpic-vox" alt="" />
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <img src={vox13} class="artpic-vox" alt="" />
          <img src={vox14} class="artpic-vox" alt="" />
          <img src={vox15} class="artpic-vox" alt="" />
          <img src={vox16} class="artpic-vox" alt="" />
          <img src={vox17} class="artpic-vox" alt="" />
          <img src={vox18} class="artpic-vox" alt="" />
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <img src={vox19} class="artpic-vox" alt="" />
          <img src={vox20} class="artpic-vox" alt="" />
          <img src={vox21} class="artpic-vox" alt="" />
          <img src={vox22} class="artpic-vox" alt="" />
          <img src={vox23} class="artpic-vox" alt="" />
          <img src={vox24} class="artpic-vox" alt="" />
        </div>
      </div>
      {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button> */}
    </div>
  );
}
