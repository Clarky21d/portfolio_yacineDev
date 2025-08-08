import { motion } from 'framer-motion';


const fadueInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
}
const staggerChildren = {
    animate: { transition: { staggerChildren: 0.1 } },
};



export const Navbar = () => {
    return <motion.nav className='navbar'
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
    >
        <motion.div className='logo'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >Portfolio</motion.div>

        <motion.ul className='nav-links'
            variants={staggerChildren}>
            <motion.li
                variants={fadueInUp}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <a href='#home'>Home</a>
            </motion.li>
            <motion.li
                variants={fadueInUp}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <a href='#projects'>Projects</a>
            </motion.li>
            <motion.li
                variants={fadueInUp}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <a href='#contact'>Contact</a>
            </motion.li>

        </motion.ul>
    </motion.nav>
}