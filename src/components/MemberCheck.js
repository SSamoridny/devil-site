import { useWeb3React } from "@web3-react/core";
import { Redirect } from "react-router-dom";
import { injected } from "./wallet/Connect";

export default function MemberCheck() {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  async function connect() {
    try {
      await activate(injected);
      console.log("connected");
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <div>
      <li
        onClick={connect}
        className="nav-item memberCheck"
        style={{
          textDecoration: "none",
          color: "white",
          fontFamily: "scary",
          fontSize: "2rem",
        }}
        href="/members"
      >
        MEMBERS ONLY
        {active ? (
          <Redirect to="/members"></Redirect>
        ) : (
          <Redirect to="/devil-site" />
        )}
      </li>
    </div>
  );
}
