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
                           href="https://www.nintendo.com/store/products/hollow-knight-switch/"
                           target='_blank'>

                    <img src={nintendo} alt=""/>
                </motion.a>
                <motion.a initial={{opacity: 0, y: 50}}
                          whileInView={{opacity: 1, y: 0}}
                          viewport={{once: true}}
                          transition={{duration: 0.6}}
                          href="https://store.playstation.com/en-us/product/UP1822-CUSA13632_00-HOLLOWKNIGHT18US" target='_blank'>
                    <img src={ps4} alt=""/>
                </motion.a>
                <motion.a initial={{opacity: 0, y: 50}}
                          whileInView={{opacity: 1, y: 0}}
                          viewport={{once: true}}
                          transition={{duration: 0.7}} href="https://www.xbox.com/en-us/games/store/hollow-knight-voidheart-edition/9mw9469v91lm" target='_blank'>
                    <img src={xbox} alt=""/>
                </motion.a>
                <motion.a initial={{opacity: 0, y: 50}}
                          whileInView={{opacity: 1, y: 0}}
                          viewport={{once: true}}
                          transition={{duration: 0.8}} href="https://store.steampowered.com/app/367520/Hollow_Knight/"  target='_blank'>
                    <img src={steam} alt=""/>
                </motion.a>
                <motion.a initial={{opacity: 0, y: 50}}
                          whileInView={{opacity: 1, y: 0}}
                          viewport={{once: true}}
                          transition={{duration: 0.9}} href="https://www.gog.com/game/hollow_knight"  target='_blank'>
                    <img src={gog} alt=""/>
                </motion.a>
                <motion.a initial={{opacity: 0, y: 50}}
                          whileInView={{opacity: 1, y: 0}}
                          viewport={{once: true}}
                          transition={{duration: 1}} href="https://www.humblebundle.com/store/hollow-knight"  target='_blank'>
                    <img src={humble} alt=""/>
                </motion.a>
            </div>
            <motion.div initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 1.2}} id='trailer' className="link_video">
                <iframe title='Hollow Knight Trailer'
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