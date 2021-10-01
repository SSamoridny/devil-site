
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Element } from "react-scroll";

export default function HomePage(props) {
  return (
    <>
      <div className=""style={{color: 'white', fontFamily: 'Ubuntu'}}>
        <div className="p-5" style={{ backgroundColor: "#bb280f" }}>
          <section className="info ">
            <Element name="learn-section" />
            <div className="">
              <div className="text" >
                <h3>What is The Dead Devil Society?</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci repellendus quasi sequi enim quos nihil. Facere quae
                dolores ratione quaerat, voluptatibus aut est non, et possimus
                dolor vero, architecto quam ipsum voluptas sed eaque
                perspiciatis ad nulla necessitatibus id. Rerum ullam eos
                accusamus laborum blanditiis veritatis natus ea, repellat
                nesciunt recusandae tenetur asperiores, fugit voluptate
                explicabo nostrum architecto odio rem ad iure? Quidem enim amet
                distinctio obcaecati velit ullam, quas dignissimos, a sunt
                pariatur molestiae explicabo, quibusdam perspiciatis ad nam
                exercitationem numquam! Placeat non voluptates cupiditate
                nostrum, nobis porro ex voluptas sequi vitae explicabo? Harum
                nemo eaque porro autem accusamus?
              </div>
            </div>
          </section>
          <section className="info info--graph info-white">
            <Element name="rarity-section" />
            <div className="inner-container">
              <div className="graph-container">
                <div className="text">
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
                </div>
              </div>
              <div className="text-and-text">
                <div className="text">
                  <h3>Why join the DDS?</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Beatae iste itaque dicta animi pariatur libero similique
                    repellendus id quo nostrum ipsum, aperiam sequi? Quidem
                    voluptatibus consequatur accusamus saepe ullam iure ea
                    explicabo nesciunt ad, illo at hic quae veniam earum
                    repudiandae, similique nihil recusandae. Illum architecto
                    fuga error ducimus eveniet quas, consequatur fugiat velit,
                    quis assumenda enim? Provident, atque officia! Enim magnam
                    excepturi sed molestiae. Minus, totam, delectus neque fuga
                    quis tempore mollitia dolorem, nulla laudantium accusamus
                    fugit necessitatibus tempora porro consequatur sapiente sit
                    quod illum ducimus aliquam id exercitationem? Quo repellat
                    inventore eligendi tenetur quaerat perspiciatis neque
                    molestias reiciendis!
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos architecto sed consequuntur in iure consectetur
                  fuga, aut doloribus fugit provident rem corrupti, odio
                  doloremque quos repudiandae, tempora laudantium ducimus
                  deleniti nisi obcaecati quisquam voluptatum? Praesentium,
                  doloremque? Temporibus beatae, iure accusamus earum impedit
                  harum doloremque illum repudiandae enim facilis esse natus
                  nihil vero officiis rerum quidem similique voluptate sapiente
                  consequatur eveniet distinctio aperiam delectus culpa
                  pariatur? Laudantium dolore libero tempore corrupti. Beatae
                  esse eos pariatur eveniet amet minus non quo accusantium
                  quisquam voluptas doloremque facere assumenda, natus magni
                  ipsa? Quas non blanditiis at dolore dolores, et eveniet
                  reprehenderit perspiciatis labore fuga recusandae aliquid.
                  Libero vitae molestias cupiditate
                </p>
              </div>
            </div>
          </section>
        </div>

        <section style={{ backgroundColor: "#dd4224" }} className="p-5">
          <Element name="faq-section" />
          <h1 style={{ fontFamily: "scary", fontSize: "8rem" }}>FAQ</h1>
          <h3>What’s an NFT?</h3>
          <p>
            An NFT stands for “Non-fungible token” and is a fancy way of saying
            it’s a unique, one of a kind digital item that users can buy, own,
            and trade. Some NFTs main function are to be digital art and look
            cool, some offer additional utility like exclusive access to
            websites or participation in an event, think of it like a rare piece
            of art that can also act as a “members” card.
          </p>
          <h3>What is a Metamask?</h3>
          <p>
            What is Metamask? Metamask is a crypto wallet that can store your
            Ethereum, and is needed to purchase and mint a Dead Devil Society
            NFT. Having a wallet gives you an Ethereum address (i.e.
            0xABCD….1234), this is where your NFT will be stored. Learn more
            about Metamask and how easy it is to use over here! (
            <a target="_blank" rel="noreferrer" href="https://metamask.io/">
              https://metamask.io/
            </a>
            )
          </p>
          <h3>Where does my NFT go after I purchase a DDS NFT?</h3>
          <p>
            Your NFT will appear in whatever address, or connected wallet you
            used to purchase the Dead Devil Society NFT. You can then view them
            on Opensea. (Link to Opensea)
          </p>
          <h3>This sounds awesome, how do I get involved?</h3>
          <p>
            Head over to the Discord, jump in on the conversation and let us
            know your ideas!{" "}
          </p>
          <h3>What can I do with my Devil?</h3>
          <p>
            You are free to do anything with them under a non-exclusive license.
          </p>
          <h3>Is the DDS a good investment?</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellat
          aperiam dolor, voluptatibus quam maxime vero quidem fugiat sed, quos
          tempora id quo saepe totam nesciunt architecto. Laudantium vel
          expedita eaque quia, facilis esse dignissimos magni velit suscipit
          voluptates explicabo nesciunt blanditiis. Amet mollitia omnis fugiat
          natus voluptatum in voluptatibus.
        </section>
        <section className="">
          <Element name="roadmap-section"  />
          <div className="inner-container" >
            <div className="text" style={{backgroundColor: 'f5ac4e'}}>
              <div id="roadmap" className="mb-32" >
                <h1
                  className=" p-5"
                  style={{
                    fontFamily: "scary",
                    fontSize: "8rem",
                    color: "white",
                    backgroundColor: "#f5ac4e",
                  }}
                >
                  D.D.S. ROADMAP
                </h1>
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
                        <a href="/white_paper.pdf">white paper</a>
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
