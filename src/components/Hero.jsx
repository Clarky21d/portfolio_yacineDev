import { motion } from "framer-motion"
import { Prism as SyntaxHighLighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const fadueInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
}
const staggerChildren = {
    animate: { transition: { staggerChildren: 0.1 } },
};

export const Hero = () => {
    return (
        < motion.section id="home" className="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="hero-container">
                <motion.div className="hero-content"
                    variants={staggerChildren}
                    initial="initial"
                    animate="animate"
                >
                    <motion.div className="hero-badge">
                        <span>👋Hello ,I'm</span>
                    </motion.div>
                    <motion.h1 className="glitch" variants={fadueInUp}
                        whileHover={{ scale: 1.02 }}>
                        Douache Ahmed Yacine
                    </motion.h1>
                    <motion.h2 className="hero-subtitle">
                        Web developer and cybersecurity enthusiast
                    </motion.h2>
                    <motion.p className="hero-description" variants={fadueInUp}>
                        I like building websites and learning how to make them more secure. Always curious and enjoy solving problems through code and CTF challenges.
                    </motion.p>

                    <motion.div className="cta-buttons" variants={staggerChildren}>
                        <motion.a href="#projects" className="cta-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}>
                            View My Work
                        </motion.a>
                        <motion.a href="#contact" className="cta-secondary" whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }} >
                            Contact Me
                        </motion.a>
                    </motion.div>
                    <motion.div className="social-links"
                        variants={staggerChildren}
                    >
                        <motion.a href="https://github.com/Clarky21d" target="_blank">
                            <i className="fab fa-github"></i>
                        </motion.a>
                        <motion.a href="https://www.linkedin.com/in/douache-ahmed-yacine" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </motion.a>
                        <motion.a href="https://www.instagram.com/douache_yacine" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </motion.a>
                    </motion.div>
                </motion.div>
                <motion.div className="hero-image-container"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="code-display">
                        <SyntaxHighLighter language="typescript"
                            customStyle={{
                                margin: 0,
                                padding: "2rem",
                                height: "100%",
                                borderRadius: "20px",
                                backgroundColor: "rgba(30,41,59,0.8)",
                                backdropFilter: "blur(10px)",
                                marginBottom: "20px",
                                overflow: "hidden"
                            }}
                            style={vscDarkPlus} >
                            {`const aboutMe: DeveloperProfile = {
  codename: "YacineDev",
  origin: "📍 Somewhere between Wireshark logs and React components",
  role: "Web Developer & Cybersecurity Explorer",
  stack: {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "TailwindCSS", "Next.js"],
    tools: ["Node.js", "Express", "Vite"],
  },
  traits: [
    "clean-code fan",
    "CTF challenger",
    "dark mode believer",
    "security-first mindset",
  ],
  missionStatement:
    "Building modern web experiences while keeping them safe from the shadows.",
  availability: "Open to opportunities and collaborations",
};
`}
                        </SyntaxHighLighter>
                    </div>
                    <motion.div className="floating-card"
                        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="card-content">
                            <span className="card-icon"> 💻 </span>
                            <span className="card-text">
                                Currently working on something awesome!
                            </span>

                        </div>
                    </motion.div>
                </motion.div>
            </div>

        </motion.section>

    );
};