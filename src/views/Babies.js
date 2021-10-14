import openSea from "../assets/open sea.png";
import babies1 from "../assets/babies/McDs.gif"
import babies2 from "../assets/babies/Baby12.gif"
import babies3 from "../assets/babies/BabyPunk.gif"
import babies4 from "../assets/babies/Baby39.gif"
import babies5 from "../assets/babies/Baby38.gif"
import babies6 from "../assets/babies/Baby33.gif"
import babies7 from "../assets/babies/Baby48.gif"
import babies8 from "../assets/babies/Baby14.gif"
import babies9 from "../assets/babies/Baby5.gif"
import babies10 from "../assets/babies/Baby2.gif"
import babies11 from "../assets/babies/BloudraadBaby.jpeg"
import babies12 from "../assets/babies/Baby9.gif"
import babies13 from "../assets/babies/Baby52.gif"
import babies14 from "../assets/babies/KarateBaby.gif"
import babies15 from "../assets/babies/Baby30.gif"
import babies16 from "../assets/babies/Baby13.gif"
import babies17 from "../assets/babies/Baby35.gif"
import babies18 from "../assets/babies/BabyPac.gif"
import babies19 from "../assets/babies/Baby10.gif"
import babies20 from "../assets/babies/ITBaby.gif"
import babies21 from "../assets/babies/baby23.gif"
import babies22 from "../assets/babies/baby27.gif"
import babies23 from "../assets/babies/baby34.gif"
import babies24 from "../assets/babies/baby42.gif"

export default function Collabs () {
    return (
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" style={{textAlign: 'center'}}>
            <h1 className="pl-5 babies" style={{ fontFamily: "scary", fontSize: "6rem", color: 'white' }}>GENESIS BABIES
            <a
              href="https://opensea.io/collection/babydevils"
              target="_blank"
              rel="noreferrer"
              style={{display: 'inline-block', textDecoration: 'none', color: 'white'}}
            >
              <i>
                <img className="art-link ml-5 top-nav mr-2" src={openSea} alt="Open Sea icon"/>
              </i>
            </a>
            </h1>
            <div class=" carousel-inner pb-5" style={{width: '90%', margin: 'auto'}}>
                <div class="carousel-item active" data-bs-interval="4000">
                    <img src={babies1} class="artpic" alt="" />
                    <img src={babies2} class="artpic" alt="" />
                    <img src={babies3} class="artpic" alt="" />
                    <img src={babies4} class="artpic" alt="" />
                    <img src={babies5} class="artpic" alt="" />
                    <img src={babies6} class="artpic" alt="" />
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                    <img src={babies7} class="artpic" alt="" />
                    <img src={babies8} class="artpic" alt="" />
                    <img src={babies9} class="artpic" alt="" />
                    <img src={babies10} class="artpic" alt="" />
                    <img src={babies11} class="artpic" alt="" />
                    <img src={babies12} class="artpic" alt="" />
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                    <img src={babies13} class="artpic" alt="" />
                    <img src={babies14} class="artpic" alt="" />
                    <img src={babies15} class="artpic" alt="" />
                    <img src={babies16} class="artpic" alt="" />
                    <img src={babies17} class="artpic" alt="" />
                    <img src={babies18} class="artpic" alt="" />
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                    
                    <img src={babies19} class="artpic" alt="" />
                    <img src={babies20} class="artpic" alt="" />
                    <img src={babies21} class="artpic" alt="" />
                    <img src={babies22} class="artpic" alt="" />
                    <img src={babies23} class="artpic" alt="" />
                    <img src={babies24} class="artpic" alt="" />
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
    )
}