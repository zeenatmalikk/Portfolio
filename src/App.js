import "./App.css";
import Aboutme from "./screens/Aboutme";
import Header from "./screens/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Services from "./screens/Services";
import Previous from "./screens/Previous";
import Pricing from "./screens/Pricing";
import Testimonial from "./screens/Testimonial";
import Footer from "./screens/Footer";
import LightSpeed from "react-reveal/LightSpeed";
import Navbar from "./screens/Navbar/Navbar";
import Contact from "./screens/Contact";
import PrevPage from "./screens/PrevPage";
import PrevPageForm from "./screens/PrevPageForm";
import FormHire from "./screens/FormHire";
import Landing from "./screens/Landing";

function App() {
  return (
    <div style={{ backgroundColor: "#202020", color: "#fff" }}>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/contact" component={Contact}>
            <Contact />
          </Route>
          <Route path="/previouspage">
            <PrevPage />
          </Route>
          <Route path="/hireme">
            <FormHire />
          </Route>
        </Switch>
        {/* <Landing/> */}
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

        {/* <PrevPageForm/> */}
      </Router>{" "}
    </div>
  );
}

export default App;
