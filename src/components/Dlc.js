import godmaster from '../assets/godmaster.jpg'
import grimm from '../assets/grimm.jpg'
import hidden from '../assets/hidden.jpg'
import lifeblood from '../assets/lifeblood.jpg'
import {motion} from "framer-motion";

const Dlc = () => {
    return (
        <div id='dlc' className="dlc_container">
            <div className="dlc_boxes">
                <motion.div initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5}} className="dlc_box">
                    <h3>Hidden Dreams</h3>
                    <img src={hidden} alt=""/>
                    <p>Mighty new foes emerge! New Boss fights. New Upgrades. New Music.</p>
                </motion.div>
                <motion.div initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.7}} className="dlc_box">
                    <h3>The Grimm Troupe</h3>
                    <img src={grimm} alt=""/>
                    <p>Light the Nightmare Lantern. Summon the Troupe. New Major Quest. New Boss Fights. New Charms.
                        New Enemies. New Friends.</p>
                </motion.div>
                <motion.div initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.9}} className="dlc_box">
                    <h3>Lifeblood</h3>
                    <img src={lifeblood} alt=""/>
                    <p>A Kingdom Upgraded! New Boss. Upgraded Bosses. Tweaks and Refinements across the whole
                        game.</p>
                </motion.div>
                <motion.div initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 1.1}} className="dlc_box">
                    <h3>Godmaster</h3>
                    <img src={godmaster} alt=""/>
                    <p>Take your place amongst the Gods. New Characters and Quest. New Boss Fights. Epic New
                        Music!</p>
                </motion.div>
            </div>
        </div>
    )
}

export default Dlc