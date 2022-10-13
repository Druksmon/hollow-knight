import unity from '../assets/logos/unity.png'
import {motion} from "framer-motion";

const Unity = () => {
    return (
        <div className="unity_container">
            <div className="unity_logo">
                <motion.h3 initial={{opacity: 0, y: -50}}
                           whileInView={{opacity: 1, y: 0}}
                           viewport={{once: true}}
                           transition={{duration: 0.5}}>Made with
                </motion.h3>
                <motion.img initial={{opacity: 0, y: -50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5}} src={unity} alt=""/>
            </div>
            <motion.p initial={{opacity: 0, y: 50}}
                      whileInView={{opacity: 1, y: 0}}
                      viewport={{once: true}}
                      transition={{duration: 0.5}}>Learn about the methods we used to make Hollow Knight, and about the
                engine under-pinning the whole
                game.
            </motion.p>
            <motion.a target='_blank' href='https://unity.com/madewith/hollow-knight' initial={{opacity: 0, y: 50}}
                      whileInView={{opacity: 1, y: 0}}
                      viewport={{once: true}}
                      transition={{duration: 0.5}}>DETAILS
            </motion.a>
        </div>
    )
}

export default Unity