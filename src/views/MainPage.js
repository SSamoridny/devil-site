import Nav from "../components/Nav";
import Header from "../views/Header";
import Home from "../views/HomePage";

export default function MainPage () {
    return (
        <div class="container-fluid">
            <Nav />
            <Header />
            <Home />
        </div>
    )
}