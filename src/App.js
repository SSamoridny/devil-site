import './App.css';
import bootstrap from 'bootstrap'
import Home from "./views/HomePage";
import Header from "./views/Header"
import Nav from "./components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="container">
      <Nav />
      <Header />
      <Home />
    </div>
  );
}

export default App;
