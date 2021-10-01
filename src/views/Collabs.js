import collab1 from "../assets/collabs/0Fish0.png"
import collab2 from "../assets/collabs/Amanda.png"
import collab3 from "../assets/collabs/Baby.png"
import collab4 from "../assets/collabs/belu.png"
import collab5 from "../assets/collabs/BKK.png"
import collab6 from "../assets/collabs/DirtGod.png"
import collab7 from "../assets/collabs/Hammy.png"
import collab8 from "../assets/collabs/Idio.png"
import collab9 from "../assets/collabs/Izzy.png"
import collab10 from "../assets/collabs/James.png"
import collab11 from "../assets/collabs/Link.png"
import collab12 from "../assets/collabs/Lola.png"
import collab13 from "../assets/collabs/Nos.jpg"
import collab14 from "../assets/collabs/oddman.png"
import collab15 from "../assets/collabs/PDestroyer.png"
import collab16 from "../assets/collabs/rosko.png"
import collab17 from "../assets/collabs/Shifters.png"
import collab18 from "../assets/collabs/Sisto.png"
import collab19 from "../assets/collabs/Stacy.png"
import collab20 from "../assets/collabs/Tombs.png"

export default function Collabs () {
    return (
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <h1 className="pl-5" style={{ fontFamily: "scary", fontSize: "8rem", color: 'white' }}>COLLABS</h1>
            <div class="carousel-inner pb-5">
                <div class="carousel-item active" data-bs-interval="5000">
                    <img src={collab1} class="art w-25 p-2" alt="" />
                    <img src={collab2} class="art w-25 p-2" alt="" />
                    <img src={collab3} class="art w-25 p-2" alt="" />
                    <img src={collab4} class="art w-25 p-2" alt="" />
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                    <img src={collab5} class="art w-25 p-2" alt="" />
                    <img src={collab6} class="art w-25 p-2" alt="" />
                    <img src={collab7} class="art w-25 p-2" alt="" />
                    <img src={collab8} class="art w-25 p-2" alt="" />
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                    <img src={collab9} class="art w-25 p-2" alt="" />
                    <img src={collab10} class="art w-25 p-2" alt="" />
                    <img src={collab11} class="art w-25 p-2" alt="" />
                    <img src={collab12} class="art w-25 p-2" alt="" />
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                    <img src={collab13} class="art w-25 p-2" alt="" />
                    <img src={collab14} class="art w-25 p-2" alt="" />
                    <img src={collab15} class="art w-25 p-2" alt="" />
                    <img src={collab16} class="art w-25 p-2" alt="" />
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                    <img src={collab17} class="art w-25 p-2" alt="" />
                    <img src={collab18} class="art w-25 p-2" alt="" />
                    <img src={collab19} class="art w-25 p-2" alt="" />
                    <img src={collab20} class="art w-25 p-2" alt="" />
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