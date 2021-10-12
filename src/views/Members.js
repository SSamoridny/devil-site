import MemberNFT from "./MemberNFT";

const Members = () => {
    return ( 
        <section style={{ backgroundColor: "#dd4224" }} className=" p-5">
          
          <h1 style={{ fontFamily: "scary", fontSize: "8rem" }}>Members Only</h1>
          <h3>Dead Devil Society Vault</h3>
          <p>
            Total Value
          </p>
          <h3>The Dead Devil Society NFT Collection</h3>
          <p>
            Updated Weekly
          </p>
          <MemberNFT />
        
        </section>
     );
}
 
export default Members;