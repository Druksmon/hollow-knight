import {motion} from "framer-motion";

import nintendo from '../assets/logos/store_logos__0000_Layer-7.png'
import ps4 from '../assets/logos/store_logos__0005_Layer-2.png'
import xbox from '../assets/logos/store_logos__0002_Layer-5.png'
import steam from '../assets/logos/store_logos__0004_Layer-8.png'
import gog from '../assets/logos/store_logos__0006_Layer-3.png'
import humble from '../assets/logos/store_logos__0003_Layer-4.png'


const Link = () => {
    return (
        <div className="link_container">
            <div id='play' className="link_selector">
                <motion.a  initial={{opacity: 0, y: 50}}
                           whileInView={{opacity: 1, y: 0}}
                           viewport={{once: true}}
                           transition={{duration: 0.5}}
                           href="">
                    <img src={nintendo} alt=""/>
                </motion.a>
                <motion.a initial={{opacity: 0, y: 50}}
                          whileInView={{opacity: 1, y: 0}}
                          viewport={{once: true}}
                          transition={{duration: 0.6}}href="">
                    <img src={ps4} alt=""/>
                </motion.a>
                <motion.a initial={{opacity: 0, y: 50}}
                          whileInView={{opacity: 1, y: 0}}
                          viewport={{once: true}}
                          transition={{duration: 0.7}} href="">
                    <img src={xbox} alt=""/>
                </motion.a>
                <motion.a initial={{opacity: 0, y: 50}}
                          whileInView={{opacity: 1, y: 0}}
                          viewport={{once: true}}
                          transition={{duration: 0.8}} href="">
                    <img src={steam} alt=""/>
                </motion.a>
                <motion.a initial={{opacity: 0, y: 50}}
                          whileInView={{opacity: 1, y: 0}}
                          viewport={{once: true}}
                          transition={{duration: 0.9}} href="">
                    <img src={gog} alt=""/>
                </motion.a>
                <motion.a initial={{opacity: 0, y: 50}}
                          whileInView={{opacity: 1, y: 0}}
                          viewport={{once: true}}
                          transition={{duration: 1}} href="">
                    <img src={humble} alt=""/>
                </motion.a>
            </div>
            <motion.div initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 1.2}} id='trailer' className="link_video">
                <iframe
                    src="https://www.youtube.com/embed/JuP47fRBsWg">
                </iframe>
            </motion.div>

            <motion.h1 initial={{opacity: 0, y: 50}}
                       whileInView={{opacity: 1, y: 0}}
                       viewport={{once: true}}
                       transition={{duration: 0.8}}>
                Hollow Knight Expands with 4 Giant Free Content Packs</motion.h1>

        </div>
    )
}

export default Link