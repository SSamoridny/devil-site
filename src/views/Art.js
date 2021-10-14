import openSea from "../assets/open sea.png";
import art0 from "../assets/art/0.png";
import art1 from "../assets/art/1.png";
import art2 from "../assets/art/2.png";
import art3 from "../assets/art/3.png";
import art4 from "../assets/art/4.png";
import art6 from "../assets/art/6.png";
import art7 from "../assets/art/7.png";
import art8 from "../assets/art/8.png";
import art9 from "../assets/art/9.png";
import art10 from "../assets/art/10.png";
import art11 from "../assets/art/11.png";
import art12 from "../assets/art/12.png";
import art13 from "../assets/art/13.png";
import art14 from "../assets/art/14.png";
import art15 from "../assets/art/15.png";
import art17 from "../assets/art/17.png";
import art18 from "../assets/art/DDS173.png";
import art19 from "../assets/art/DDS207.png";

export default function Art() {
  return (
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="art-intro" style={{ textAlign: "center" }}>
        <h1
          className="pl-5 mr-3"
          style={{
            fontFamily: "scary",
            fontSize: "8rem",
            color: "white",
            display: "inline-block",
          }}
        >
          DDS
          <a
            href="https://opensea.io/collection/dead-devil-society"
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
      </div>
      <div class="carousel-inner pb-5" style={{ width: "90%", margin: "auto" }}>
        <div class="carousel-item active" data-bs-interval="5000">
          <img src={art0} class="artpic" alt="" />
          <img src={art1} class="artpic" alt="" />
          <img src={art2} class="artpic" alt="" />
          <img src={art3} class="artpic" alt="" />
          <img src={art4} class="artpic" alt="" />
          <img src={art6} class="artpic" alt="" />
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src={art7} class="artpic" alt="" />
          <img src={art8} class="artpic" alt="" />
          <img src={art9} class="artpic" alt="" />
          <img src={art10} class="artpic" alt="" />
          <img src={art11} class="artpic" alt="" />
          <img src={art12} class="artpic" alt="" />
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src={art13} class="artpic" alt="" />
          <img src={art14} class="artpic" alt="" />
          <img src={art15} class="artpic" alt="" />
          <img src={art17} class="artpic" alt="" />
          <img src={art18} class="artpic" alt="" />
          <img src={art19} class="artpic" alt="" />
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
    // <div className="container-fluid">
    //   <div className="row" style={{ backgroundColor: "#940700" }}>
    //     <h1
    //       className="pl-5"
    //       style={{ fontFamily: "scary", fontSize: "8rem", color: "white" }}
    //     >
    //       ART
    //     </h1>
    //     <div className="col-md-3 mb-4">
    //       <Card cardimg={art0} />
    //     </div>
    //     <div className="col-md-3 mb-4">
    //       <Card cardimg={art1} />
    //     </div>
    //     <div className="col-md-3 mb-4">
    //       <Card cardimg={art2} />
    //     </div>
    //     <div className="col-md-3 mb-4">
    //       <Card cardimg={art3} />
    //     </div>
    //     <div className="col-md-3 mb-4">
    //       <Card cardimg={art4} />
    //     </div>
    //     <div className="col-md-3 mb-4">
    //       <Card cardimg={art17} />
    //     </div>
    //     <div className="col-md-3 mb-4">
    //       <Card cardimg={art6} />
    //     </div>
    //     <div className="col-md-3 mb-4">
    //       <Card cardimg={art7} />
    //     </div>
    //     <div className="col-md-3 mb-4">
    //       <Card cardimg={art8} />
    //     </div>
    //     <div className="col-md-3 mb-4">
    //       <Card cardimg={art9} />
    //     </div>
    //     <div className="col-md-3 mb-4">
    //       <Card cardimg={art10} />
    //     </div>
    //     <div className="col-md-3 mb-4">
    //       <Card cardimg={art11} />
    //     </div>
    //     <div className="col-md-3 mb-4">
    //       <Card cardimg={art12} />
    //     </div>
    //     <div className="col-md-3 mb-4">
    //       <Card cardimg={art13} />
    //     </div>
    //     <div className="col-md-3 mb-4">
    //       <Card cardimg={art14} />
    //     </div>
    //     <div className="col-md-3 mb-4">
    //       <Card cardimg={art15} />
    //     </div>

    //   </div>
    // </div>
  );
}
