import "./App.css";
import bootstrap from "bootstrap";
import Home from "./views/HomePage";
import Header from "./views/Header";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Members from "./views/Members";


function App() {
  return (
    <Router>
      <div className="">
        <Switch>
          <Route exact path="/devil-site">
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
  );
}

export default App;
