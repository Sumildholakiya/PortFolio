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
            animate={"animate"}>
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
                    <button>WHAT I DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{
                    backgroundColor: "rgb(201, 198, 198)",
                    color: "black"
                }}>
                    <h2>
                        Front-End Development
                    </h2>
                    <p>I build responsive and user-friendly interfaces using HTML, CSS, JavaScript, React, and Bootstrap. For specific requirements, I also utilize Tailwind CSS for efficient and clean designs.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{
                    backgroundColor: "rgb(201, 198, 198)",
                    color: "black"
                }}>
                    <h2>
                    Back-End Solutions
                    </h2>
                    <p>I specialize in creating scalable and secure back-end solutions using Express.js and MongoDB, ensuring seamless integration with front-end systems and smooth data management.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{
                    backgroundColor: "rgb(201, 198, 198)",
                    color: "black"
                }}>
                    <h2>
                        Project Execution
                    </h2>
                    <p>From conceptualizing ideas to delivering fully functional applications, I manage the entire development process, focusing on performance, quality, and client satisfaction.</p>
                    <button>Go</button>
                </motion.div>


            </motion.div>
        </motion.div>
    )
}

export default Services
