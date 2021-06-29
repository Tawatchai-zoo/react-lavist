import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage/Home";
import Footer from "./pages/Footer/Footer";
import Services from "./pages/Services/Services";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/services" exact component={Services} />
                <Route path="/sign-up">
                    <h1>sign up</h1>
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
