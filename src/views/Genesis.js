import openSea from "../assets/open sea.png";
import genesis1 from "../assets/genesis/100.gif"
import genesis2 from "../assets/genesis/RichBitch.gif"
import genesis3 from "../assets/genesis/69.gif"
import genesis4 from "../assets/genesis/Ritual.gif"
import genesis5 from "../assets/genesis/Metal Punk.gif"
import genesis6 from "../assets/genesis/Hisoka.gif"
import genesis7 from "../assets/genesis/Laser Eyes.gif"
import genesis8 from "../assets/genesis/50.gif"
import genesis9 from "../assets/genesis/NiftyCats.gif"
import genesis10 from "../assets/genesis/65.gif"
import genesis11 from "../assets/genesis/QBDevil.gif"
import genesis12 from "../assets/genesis/93Holo.gif"
import genesis13 from "../assets/genesis/95.gif"
import genesis14 from "../assets/genesis/98.gif"
import genesis15 from "../assets/genesis/Waifu.gif"
import genesis16 from "../assets/genesis/91.gif"
import genesis17 from "../assets/genesis/89.gif"
import genesis18 from "../assets/genesis/Holo90.gif"
import genesis19 from "../assets/genesis/57.gif"
import genesis20 from "../assets/genesis/66.gif"

export default function Genesis () {
    return (
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <h1 className="pl-5" style={{ fontFamily: "scary", fontSize: "8rem", color: 'white' }}>GENESIS
            <a
              href="https://opensea.io/collection/cryptodevils-v2"
              target="_blank"
              rel="noreferrer"
              style={{display: 'inline-block', textDecoration: 'none', color: 'white'}}
            >
              <i>
                <img className="art-link ml-5 top-nav mr-2" src={openSea} alt="Open Sea icon"/>
              </i>
            </a>
            </h1>
            <div class="carousel-inner pb-5">
                <div class="carousel-item active" data-bs-interval="4000">
                    <img src={genesis1} class="art w-25 p-2" alt="" />
                    <img src={genesis2} class="art w-25 p-2" alt="" />
                    <img src={genesis3} class="art w-25 p-2" alt="" />
                    <img src={genesis4} class="art w-25 p-2" alt="" />
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                    <img src={genesis5} class="art w-25 p-2" alt="" />
                    <img src={genesis6} class="art w-25 p-2" alt="" />
                    <img src={genesis7} class="art w-25 p-2" alt="" />
                    <img src={genesis8} class="art w-25 p-2" alt="" />
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                    <img src={genesis9} class="art w-25 p-2" alt="" />
                    <img src={genesis10} class="art w-25 p-2" alt="" />
                    <img src={genesis11} class="art w-25 p-2" alt="" />
                    <img src={genesis12} class="art w-25 p-2" alt="" />
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                    <img src={genesis13} class="art w-25 p-2" alt="" />
                    <img src={genesis14} class="art w-25 p-2" alt="" />
                    <img src={genesis15} class="art w-25 p-2" alt="" />
                    <img src={genesis16} class="art w-25 p-2" alt="" />
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                    <img src={genesis17} class="art w-25 p-2" alt="" />
                    <img src={genesis18} class="art w-25 p-2" alt="" />
                    <img src={genesis19} class="art w-25 p-2" alt="" />
                    <img src={genesis20} class="art w-25 p-2" alt="" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}