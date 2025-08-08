import { motion } from "framer-motion";

const fadueInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
}
const staggerChildren = {
    animate: { transition: { staggerChildren: 0.1 } },
};
export const Projects = () => {
    return <motion.section id="projects"
        className="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
    >
        <motion.h2 variants={fadueInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            My Projects</motion.h2>
        <motion.div className="projects-grid"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <motion.div className="project-card"
                variants={fadueInUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}

            >

                <motion.div className="project-image"
                    style={{
                        backgroundImage: "url('/screenshot1.png')"
                    }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}

                />
                <h3>Admin Dashboard</h3>
                <p>A clean and modern responsive admin dashboard designed for web applications.
                    This project focuses on creating a user-friendly interface with a
                    responsive layout suitable for various devices</p>
                <div className="project-tech">
                    <span> HTML5</span>
                    <span> CSS3</span>
                    <span> JavaScript</span>
                    <span> Google Material Icons</span>
                </div>

            </motion.div>

            <motion.div className="project-card"
                variants={fadueInUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}

            >

                <motion.div className="project-image"
                    style={{
                        backgroundImage: "url('/25515.jpg')"
                    }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}

                />
                <h3>Project Coming Soon </h3>
                <p>I'm working on something new and exciting!
                    This project is still in progress and will be added here soon. Stay tuned!</p>
                <div className="project-tech">
                    {/* <span> HTML5</span>
                    <span> CSS3</span>
                    <span> JavaScript</span>
                    <span> Google Material Icons</span> */}
                </div>

            </motion.div>
        </motion.div>

    </motion.section >;
}