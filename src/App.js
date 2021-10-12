import "./App.css";
import bootstrap from "bootstrap";
import Home from "./views/HomePage";
import Header from "./views/Header";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Members from "./views/Members";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

function getLibrary(provider) {
  return new Web3(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <div className="">
          <Switch>
            <Route path="/devil-site" exact>
              <Nav />
              <Header />
              <Home />
            </Route>
            <Route path="/members">
              <Members />
            </Route>
          </Switch>
        </div>
      </Router>
    </Web3ReactProvider>
  );
}

export default App;
