import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parallax type="Services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="Portfolio"/></section>
    <Portfolio />
    <section id="Contact">
      <Contact/>
    </section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    {/* <section id="Contact">Contact</section> */}
  </div>;
};

export default App;
