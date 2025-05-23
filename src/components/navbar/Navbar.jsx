import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sumil Dholakiya
        </motion.span>
        <div className="social">
          <a href="https://github.com/Sumildholakiya" className="icon" target="_blank">
            <img src="/github.webp" alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/sumil-dholakiya-48aa132a2/?originalSubdomain=in" className="icon" target="_blank">
            <img src="/linkdin.webp" alt="Linkdin" />
          </a>
          <a href="https://www.instagram.com/sumil_007__/" className="icon" target="_blank">
            <img src="/instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


