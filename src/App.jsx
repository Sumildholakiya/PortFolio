import "./app.scss";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parallax type="Services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="Portfolio"/></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    {/* <section id="Contact">Contact</section> */}
  </div>;
};

export default App;
