import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Element } from "react-scroll";
import discord from "../assets/discord.png";
import devil from "../assets/devil.png"
import hustler from "../assets/hustler.gif"
import samo from "../assets/SamoDevil.png";
import toroco from "../assets/torocoDevil.png";
import bloudraad from "../assets/babies/BloudraadBaby.jpeg";
import mdubore from "../assets/mdubore.png";
import Card from "../components/TeamCard";
import map from "../assets/pngwing.com.png";
import white from "../assets/white_paper.pdf"

export default function HomePage(props) {
  return (
    <>
      <Element name="learn-section" />
      <div className="" style={{ color: "white", fontFamily: "Ubuntu" }}>
        <div
          className="p-5"
          style={{ backgroundColor: "#bb280f", textAlign: "center" }}
        >
          <section className="info ">
            <div className="">
              <div className="text">
                <h1 style={{ fontFamily: "scary", fontSize: "6rem" }}>
                  Welcome to the DDS
                </h1>
                <h3>What is The Dead Devil Society?</h3>
                <p>
                  Since the dawn of man, there has been a balance between good
                  and evil. On one shoulder sits an Angel, and on the other, the
                  Devil themselves. The Devil takes many shapes and has many
                  names but did you think there was only one? At over 5000
                  strong, The Dead Devil Society is a project and a community
                  like no other with a steady roadmap and a dedicated team,
                  there is no choice but to join...the Dead Devil Society
                </p>
              </div>
            </div>
          </section>
          <section className="info info--graph info-white">
            <Element name="rarity-section" />
            <div className="inner-container">
              <div className="graph-container">
                {/* <div className="text">
                  <h3>How rare is my Devil?</h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  iste harum modi quibusdam, ipsum quo illo, ullam facere magni
                  nulla placeat dolorem, voluptas hic ex dolorum. Minus id odit
                  veniam repellendus sed ipsa quis voluptatibus nulla excepturi.
                  Dolore labore ullam aliquid aut! Itaque id illo odit molestias
                  beatae repellat numquam laudantium reprehenderit
                  exercitationem dicta ipsa, nobis mollitia vitae illum iste et
                  dignissimos, ut nihil magni aliquam quis distinctio
                  voluptatem. Perferendis deleniti nulla ad accusantium dolorum?
                  Culpa earum maiores nostrum, exercitationem saepe in maxime
                  natus, magnam laudantium est ipsum, asperiores pariatur nemo
                  architecto et? Minus culpa eaque ut excepturi dicta magni!
                </div> */}
              </div>
              <div className="text-and-text">
                <div className="text">
                  <h3>Why join the DDS?</h3>
                  <p>
                    Joining the DDS is much more than simply owning one of the
                    most sought-after projects in the space. Once you enter the
                    world of the Dead Devil Society, you become part of one of
                    the most active online communities in the NFT world. Within
                    minutes of joining our Discord and introducing yourself to
                    your fellow Devils, you will feel the power of the DDS with
                    every member looking to help us all win. Is that enough for
                    you? Well, there's more! Team DDS is always building and
                    looking to the future with improvements and projects to make
                    the NFT space hotter by the minute, and our community is the
                    biggest part of that. Join the society!
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="info info--yellow">
            <div className="inner-container">
              <div className="text">
                <h3>Future of the Dead Devil Society?</h3>
                <p>
                  Flames burn eternal, and so does the fire inside of Team DDS.
                  New curations and additions are constantly being created and
                  discussed with our community and within Team DDS itself. With
                  some exciting news ready to drop near the end of the month
                  (keep a lookout on Discord), your team is working on ways to
                  improve and grow to bring our hodlers the most value and
                  utility of any project in the space.
                </p>
              </div>
            </div>
          </section>
        </div>
        <Element name="faq" />
        <section
          style={{ backgroundColor: "#dd4224", textAlign: "center" }}
          className="p-5"
        >
          <h1 style={{ fontFamily: "scary", fontSize: "8rem" }}>FAQ</h1>
          <div className="text">
            <h3>What’s an NFT?</h3>
            <p>
              An NFT stands for “Non-fungible token” and is a fancy way of
              saying it’s a unique, one of a kind digital item that users can
              buy, own, and trade. Some NFTs main function are to be digital art
              and look cool, some offer additional utility like exclusive access
              to websites or participation in an event, think of it like a rare
              piece of art that can also act as a “members” card.
            </p>
            <h3>What is a Metamask?</h3>
            <p>
              What is Metamask? Metamask is a crypto wallet that can store your
              Ethereum, and is needed to purchase and mint a Dead Devil Society
              NFT. Having a wallet gives you an Ethereum address (i.e.
              0xABCD….1234), this is where your NFT will be stored. Learn more
              about Metamask and how easy it is to use over here! (
              <a
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
                href="https://metamask.io/"
              >
                https://metamask.io/
              </a>
              )
            </p>
            <h3>Where does my NFT go after I purchase a DDS NFT?</h3>
            <p>
              Your NFT will appear in whatever address, or connected wallet you
              used to purchase the Dead Devil Society NFT. You can then view
              them on Opensea. (Link to Opensea)
            </p>
            <h3>This sounds awesome, how do I get involved?</h3>
            <p>
              Head over to the{" "}
              <a
                href="https://discord.com/invite/JNhtBgnDGa"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                Discord
                <i>
                  <img
                    className="icon-size ml-1 mr-1 top-nav"
                    src={discord}
                    alt=""
                  />
                </i>
              </a>
              , jump in on the conversation and let us know your ideas!{" "}
            </p>
            <h3>What can I do with my Devil?</h3>
            <p>
              You are free to do anything with them under a non-exclusive
              license.
            </p>
            {/* <h3>Is the DDS a good investment?</h3>
            <p>
              Team DDS is always looking to grow and innovate in the NFT world.
              While our team and investors are huge fans of the art, the project
              is bigger than art and NFTs in itself. By striving forward,
              growing and adding to our Road Map, Team DDS is always looking to
              bring maximum value to our holders and community where we all win
              and share in those wins coolectively. A Dead Devil Society NFT
              will always be a great investment.
            </p> */}
          </div>
        </section>
        <Element name="team-section" />
        <section
          style={{ backgroundColor: "rgb(223, 88, 10)", textAlign: "center" }}
          className=" teamDDS"
        >
          <h1 style={{ fontFamily: "scary", fontSize: "8rem" }}>Team DDS</h1>
          <div
            className="row no-gutters"
            style={{ width: "90%", margin: "auto" }}
          >
            <div className="col-md-4 mb-4">
              <Card
                name="Devil"
                cardimg={devil}
                description2="Genesis Founder, NFT Artist, Chairman of the Board – Law Student
              (IRL)"
              />
            </div>

            <div className="col-md-4 mb-4">
              <Card
                name="ART HUSTLER"
                cardimg={hustler}
                description2="Founder, Flipper, Rainmaker – Businessman (IRL)"
              />
            </div>

            <div className="col-md-4 mb-4">
              <Card
                name="Mdubore"
                cardimg={mdubore}
                description2="Analyst & Advisor, Project Manager - Director of Hardware
              Engineering at a Communications Company (IRL)"
              />
            </div>

            <div className="col-md-4 mb-4">
              <Card
                name="Toroco"
                cardimg={toroco}
                description2="Programmer & Advisor, Project Manager, – Lead Software Engineer"
              />
            </div>
            <div className="col-md-4 mb-4">
              <Card
                name="Bloudraad (LEP Baby)"
                cardimg={bloudraad}
                description2="Genesis Member, Copywriting, Content Creation and Community Multi
              signatory – Owner of a Media Agency (IRL)"
              />
            </div>
            <div className="col-md-4 mb-4">
              <Card
                name="SSamo"
                cardimg={samo}
                description2="Webmaster and Content Creator - Web Developer (IRL)"
              />
            </div>
          </div>
        </section>
        <Element name="roadmap-section" />
        <section className="">
          <div className="inner-container">
            <div className="text">
              <div id="roadmap" className="mb-32">
                <div>
                  <h1
                    className="p-5"
                    style={{
                      fontFamily: "scary",
                      fontSize: "6rem",
                      color: "white",
                      backgroundColor: "#f5ac4e",
                      textAlign: "center",
                    }}
                  >
                    D.D.S. ROADMAP
                    <i>
                      <img
                        style={{ display: "inline-block", height: '5rem', width: '5rem' }}
                        className="road-map ml-5 top-nav mr-2"
                        src={map}
                        alt=""
                      />
                    </i>
                  </h1>
                </div>
                <VerticalTimeline>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#f5ac4e", color: "#fff" }}
                    contentArrowStyle={{
                      borderRight: "0px solid  rgb(255, 255, 255)",
                    }}
                  >
                    <h3 className="vertical-timeline-element-title font-serif">
                      DDS Collective Fund 🏧
                    </h3>
                    <p className="font-cursive">
                      A Collective fund run by the Devil Club (you guys and me)
                      supporting small NFT Artists and also making profit (for
                      all of us) while doing that, and also putting it back in
                      the community.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#f5ac4e", color: "#fff" }}
                    contentArrowStyle={{
                      borderRight: "0px solid  rgb(255, 255, 255)",
                    }}
                  >
                    <h3 className="vertical-timeline-element-title font-serif">
                      The Burning 🔥
                    </h3>
                    <p className="font-cursive">
                      First of the many events, that start after the launch.
                      Runs for a week, includes burning, involves other NFT
                      community artists, and physical 👀 gifts (check out the{" "}
                      <span style={{ color: "yellow", cursor: "pointer" }}>
                        <a href={white}>white paper</a>
                      </span>{" "}
                      for more details).
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#f5ac4e", color: "#fff" }}
                    contentArrowStyle={{
                      borderRight: "0px solid  rgb(255, 255, 255)",
                    }}
                  >
                    <h3 className="vertical-timeline-element-title font-serif">
                      Dead Note 📝
                    </h3>
                    <p className="font-cursive">
                      The &apos;Bucket List&apos;. Where does all the ETH from
                      the community wallet go? To complete everything on the
                      Bucket List! Through community voting, we can remove, as
                      well as add new items.
                    </p>
                  </VerticalTimelineElement>
                </VerticalTimeline>

                <br />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
