import "./App.css";
import Aboutme from "./screens/Aboutme";
import Header from "./screens/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./screens/Services";
import Previous from "./screens/Previous";
import Pricing from "./screens/Pricing";
import Testimonial from "./screens/Testimonial";
import Footer from "./screens/Footer";
import LightSpeed from "react-reveal/LightSpeed";
import Navbar from "./screens/Navbar/Navbar";
import Contact from "./screens/Contact";

function App() {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff" }}>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Header />
        <LightSpeed left>
          <Aboutme />
        </LightSpeed>
        <LightSpeed right>
          <Services />
        </LightSpeed>
        <LightSpeed left>
          <Previous />
        </LightSpeed>
        <LightSpeed right>
          <Pricing />
        </LightSpeed>
        <LightSpeed left>
          <Testimonial />
        </LightSpeed>
        <LightSpeed right>
          <Footer />
        </LightSpeed>
      </Router>{" "}
    </div>
  );
}

export default App;
