import "./services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
    initial: {
        x: -500,
        opacity: 0,
        y: 100
    },
    animate: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1

        }
    }
}
const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref, { margin: "-100px" })

    return (
        <motion.div className="services" variants={variants} initial="initial"
            // whileInView="animate"
            ref={ref}
            animate={isInView && "animate"}>
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on helping your brand grow
                    <br />and move forward</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="ppl" />
                    <h1><motion.b whileHover={{
                        color: "orange"
                    }}>Unique</motion.b> Ideas</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{
                        color: "orange"
                    }}>For Your</motion.b> Business.</h1>
                    <button><a href="https://sd-project-showcase.netlify.app/" target="_blank" style={{ display: "block"}}>WHAT WE DO?</a></button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{
                    backgroundColor: "rgb(201, 198, 198)",
                    color: "black"
                }}>
                    <h2>
                        Branding
                    </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque blanditiis laboriosam iste quod pariatur et nemo nisi. Optio, beatae nam, natus nihil unde a debitis ipsum asperiores delectus officia architecto.</p>
                    <button> <a href="https://sd-project-showcase.netlify.app/" target="_blank" style={{ display: "block" }}>Go</a></button>
                </motion.div>
                <motion.div className="box" whileHover={{
                    backgroundColor: "rgb(201, 198, 198)",
                    color: "black"
                }}>
                    <h2>
                        Branding
                    </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque blanditiis laboriosam iste quod pariatur et nemo nisi. Optio, beatae nam, natus nihil unde a debitis ipsum asperiores delectus officia architecto.</p>
                    <button> <a href="https://sd-project-showcase.netlify.app/" target="_blank" style={{ display: "block" }}>Go</a></button>                </motion.div>
                <motion.div className="box" whileHover={{
                    backgroundColor: "rgb(201, 198, 198)",
                    color: "black"
                }}>
                    <h2>
                        Branding
                    </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque blanditiis laboriosam iste quod pariatur et nemo nisi. Optio, beatae nam, natus nihil unde a debitis ipsum asperiores delectus officia architecto.</p>
                    <button> <a href="https://sd-project-showcase.netlify.app/" target="_blank" style={{ display: "block" }}>Go</a></button>                </motion.div>


            </motion.div>
        </motion.div>
    )
}

export default Services
