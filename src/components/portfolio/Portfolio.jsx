import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Blog Sphere",
        img: "/blogsphere.png",
        desc: "BlogSphere is a full-stack blogging website built with React, Express.js, MongoDB, and Tailwind CSS, featuring a clean UI, smooth animations, and seamless blog management.",
        link: "https://blog-sphere-rho.vercel.app/"
    },
    {
        id: 2,
        title: "BroCode Agency",
        img: "/agency.png",
        desc: "BroCode Agency is a responsive website built using HTML, CSS, and JavaScript, offering a modern and user-friendly interface for various services and products.",
        link: "https://sd-agency.netlify.app/"
    },
    {
        id: 3,
        title: "Organic Farm Food",
        img: "/organicfarm.png",
        desc: "Organic Farm Food is a website for fresh farm products with a clean UI and smooth navigation, built using HTML, CSS, JavaScript, and Bootstrap.",
        link: "https://sd-organicfarm.netlify.app/"
    },
    {   
        id: 4,
        title: "Project Showcase",
        img: "/project-showcase.png", // Make sure to add this image in public/assets
        desc: "Project Showcase is a central hub displaying all my key projects in one place. It features a responsive layout, category filters, smooth animations, and a modern UI — built using React, Vite, and Tailwind CSS.",
        link: "https://sd-project-showcase.netlify.app/"
    }

];

const Single = ({ item }) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"] 
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2> {item.title} </h2>
                        <p> {item.desc} </p>
                        <button onClick={() => window.open(item.link, "_blank")}>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });

    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });


    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
