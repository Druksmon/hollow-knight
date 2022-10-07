import {motion} from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

import desctructoid from '../assets/logos/desctructoid.png'
import eza from '../assets/logos/eza.png'
import famitsu from '../assets/logos/famitsu.png'
import gamerinformer from '../assets/logos/gameinformer.png'
import pcgamer from '../assets/logos/pcgamer.png'
import ign from '../assets/logos/ign.png'


const Reviews = () => {

    return (
        <div className="reviews_container">
            <div className="reviews_background">
                <div className="reviews_gradient"/>
                <Carousel autoPlay infiniteLoop showArrows={false} showStatus={false} showIndicators={true} showThumbs={false}
                          interval={2000} stopOnHover={true} className="reviews_selector">
                    <motion.div initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                viewport={{once: true}}
                                transition={{duration: 1, delay: 0.2}} className="review">
                        <h3><q> It's a deep dive into a dark place, and a brilliantly rich experience. </q></h3>
                        <h5>- 9/10 Game Informer</h5>
                    </motion.div>
                    <motion.div initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                viewport={{once: true}}
                                transition={{duration: 1, delay: 0.2}} className="review">
                        <h3><q> Truly a masterpiece of gaming if there ever was one, and certainly art worthy of being
                            in a museum. </q></h3>
                        <h5>- 10/10 Destructoid</h5>
                    </motion.div>
                    <motion.div initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                viewport={{once: true}}
                                transition={{duration: 1, delay: 0.2}} className="review">
                        <h3><q> Best Platformer 2017 - The joy of Hollow Knight is the joy of discovery, always
                            hard-earned, never handed to you. </q></h3>
                        <h5>- 92/100 PC Gamer</h5>
                    </motion.div>

                </Carousel>
            </div>
            <div className="reviews_icons-box">
                <div className="reviews_icons">
                    <motion.div initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                viewport={{once: true}}
                                transition={{duration: 1, delay: 0.2}} className="review_img">
                        <img src={gamerinformer} alt=""/>
                    </motion.div>
                    <motion.div initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                viewport={{once: true}}
                                transition={{duration: 1, delay: 0.4}} className="review_img">
                        <img src={pcgamer} alt=""/>
                    </motion.div>
                    <motion.div initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                viewport={{once: true}}
                                transition={{duration: 1, delay: 0.6}} className="review_img">
                        <img src={ign} alt=""/>
                    </motion.div>
                    <motion.div initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                viewport={{once: true}}
                                transition={{duration: 1, delay: 0.8}} className="review_img">
                        <img src={desctructoid} alt=""/>
                    </motion.div>
                    <motion.div initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                viewport={{once: true}}
                                transition={{duration: 1, delay: 1}} className="review_img">
                        <img src={eza} alt=""/>
                    </motion.div>
                    <motion.div initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                viewport={{once: true}}
                                transition={{duration: 1, delay: 1.2}} className="review_img">
                        <img src={famitsu} alt=""/>
                    </motion.div>

                </div>
                <motion.p initial={{opacity: 0}}
                          whileInView={{opacity: 1}}
                          viewport={{once: true}}
                          transition={{duration: 1}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
                    esse quas veniam. Accusantium,
                    aperiam consectetur facere harum magnam nisi soluta tenetur. Beatae delectus dolorum odit quos sunt!
                    Nobis, quas, voluptas?
                </motion.p>
            </div>
        </div>

    )
}

export default Reviews