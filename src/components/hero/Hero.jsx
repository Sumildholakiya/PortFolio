import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeInOut",
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
};
const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType:"mirror",
            duration: 20,
        },
    },
};

const Hero = () => {

    const scrollToContact = () => {
        const contactSection = document.getElementById("Contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>SUMIL DHOLAKIYA</motion.h2>
                    <motion.h1 variants={textVariants}>Web Developer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}> <a href="https://drive.google.com/uc?export=download&id=19mOVzmr7XmVsdfcvENFcTeLz-6ZPJ_bG">Download Resume</a> </motion.button>
                        <motion.button variants={textVariants} onClick={scrollToContact} > Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="scroll" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Full Stake Developer / Frontend Developer
            </motion.div>
            <div className="imageContainer">
                <img src="./hero.png" alt="hero" />
            </div>
        </div>
    )
};

export default Hero;
