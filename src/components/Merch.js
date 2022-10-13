import {motion} from "framer-motion";

import separator from '../assets/separator.png'
import ghost from '../assets/logos/Ghost_Ramp_Logo_cropped.png'
import fangamer from '../assets/logos/logos__0002_1.png'
import yetee from '../assets/logos/logos__0001_2.png'


const Merch = () => {
    return (
        <>
            <div className="merch_gradient"/>
            <div className="merch_container">
                <div className="merch_selector">
                    <motion.div initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 1.2}} className="merch_title">
                        <h1>Our Merch</h1>
                        <img src={separator} alt=""/>
                    </motion.div>
                    <div className="merch_boxes">
                        <motion.div initial={{opacity: 0, y: 50}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true}}
                                    transition={{duration: 1.2, delay: 0.2}} className="merch_box">
                            <img src={fangamer} alt=""/>
                            <p>Plush Grubs! Plush Knights! Rad Tees and so much more!</p>
                            <a target='_blank' href='https://www.fangamer.com/collections/hollow-knight'>BROWSE
                                FANGAMER</a>
                        </motion.div>
                        <motion.div initial={{opacity: 0, y: 50}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true}}
                                    transition={{duration: 1.2, delay: 0.4}} className="merch_box">
                            <img src={yetee} alt=""/>
                            <p>Classy Tees! Stylish Pins! The coolest, friendliest yetee we know!</p>
                            <a target='_blank' href='https://theyetee.com/collections/hollow-knight'>BROWSE THEYETEE</a>
                        </motion.div>
                        <motion.div initial={{opacity: 0, y: 50}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true}}
                                    transition={{duration: 1.2, delay: 0.6}} className="merch_box">
                            <img src={ghost} alt=""/>
                            <p>Limited Vinyl Releases!</p>
                            <a target='_blank' href='https://store.ghostramp.com/password'>
                                BROWSE GHOST-RAMP</a>
                        </motion.div>

                    </div>
                    <div className="merch_album">
                        <div className="merch_album_gradient"/>
                        <div className="merch_text">
                            <motion.h1 initial={{opacity: 0, y: 50}}
                                       whileInView={{opacity: 1, y: 0}}
                                       viewport={{once: true}}
                                       transition={{duration: 1}}>A Haunting, Orchestral Score
                            </motion.h1>
                            <motion.p initial={{opacity: 0, y: 50}}
                                      whileInView={{opacity: 1, y: 0}}
                                      viewport={{once: true}}
                                      transition={{duration: 1}}>Composed and produced by Christopher
                                Larkin, <br/> Hollow Knight’s epic score is woven
                                throughout the game, <br/> echoing the sadness of a majestic civilisation brought to
                                ruin.
                            </motion.p>
                            <motion.a initial={{opacity: 0, y: 50}}
                                      whileInView={{opacity: 1, y: 0}}
                                      viewport={{once: true}}
                                      transition={{duration: 1.2, delay: 0.2}}
                                      href='https://christopherlarkin.bandcamp.com/album/hollow-knight-original-soundtrack'
                                      target='_blank'>
                                Purchase the Official Soundtrack
                            </motion.a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Merch