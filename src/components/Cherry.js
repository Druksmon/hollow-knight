import {motion} from "framer-motion";
import cherryLogo from '../assets/logos/team_cherry_logo_big_white.png'
import ari from '../assets/new_icons_0000_Layer-3.png'
import william from '../assets/new_icons_0001_Layer-1.png'
import david from '../assets/icons_0002_1.png'


const Cherry = () => {
    return (
        <div id='team-cherry' className="cherry_container">
            <div className="cherry_selector">
                <motion.img initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 1.2}} src={cherryLogo} alt=""/>
                <motion.p initial={{opacity: 0, y: 50}}
                          whileInView={{opacity: 1, y: 0}}
                          viewport={{once: true}}
                          transition={{duration: 1.2}}>Hollow Knight is being developed by Team Cherry in Adelaide,
                    South Australia. We're a team of 3
                    people who, alongside making the game, are responsible for building these websites, cutting
                    those game trailers, posting regular game updates, answering questions on social media and much
                    more. Though it's a lot of work, we love doing it, and it's made even more enjoyable by the
                    enthusiastic support we've received from fans this whole way.
                </motion.p>
                <motion.a target='_blank' href='https://www.teamcherry.com.au/'
                          initial={{opacity: 0, y: 50}}
                          whileInView={{opacity: 1, y: 0}}
                          viewport={{once: true}}
                          transition={{duration: 1.2, delay: 0.3}}>Visit the Team Cherry Site
                </motion.a>

                <div className="cherry_members">
                    <motion.div initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 1.2, delay: 0.2}} className="cherry_member">
                        <img src={ari} alt=""/>
                        <h3>Ari Gibson</h3>
                        <p>Ari is responsible for game design alongside William. He creates the game's art,
                            environments and animates hundreds of bugs.</p>
                    </motion.div>
                    <motion.div initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 1.2, delay: 0.4}} className="cherry_member">
                        <img src={william} alt=""/>
                        <h3>William Pellen</h3>
                        <p>William designs the game along with Ari. He creates the enemy, boss and game behaviour
                            for Hollow Knight. If an enemy seems too challenging or a gauntlet insurmountable, blame
                            him!
                        </p>
                    </motion.div>
                    <motion.div initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 1.2, delay: 0.6}} className="cherry_member">
                        <img src={david} alt=""/>
                        <h3>David Kazi</h3>
                        <p>Dave was responsible for Hollow Knight's technical direction. He divided his time between
                            making the game run and fixing things that Ari and William broke.
                        </p>
                    </motion.div>
                </div>
            </div>
            <div className="cherry_logos">
                <motion.a initial={{opacity: 0, y: 50}}
                          whileInView={{opacity: 1, y: 0}}
                          viewport={{once: true}}
                          transition={{duration: 0.5, delay: 0.2}}
                          className="cherry_logo" href='https://twitter.com/TeamCherryGames' target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512">
                        <path
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                    </svg>

                </motion.a>
                <motion.a initial={{opacity: 0, y: 50}}
                          whileInView={{opacity: 1, y: 0}}
                          viewport={{once: true}}
                          transition={{duration: 0.5, delay: 0.4}}
                          className="cherry_logo" href='https://www.youtube.com/channel/UCZS2K8ZsUmujTuj3cNMyBSA'
                          target='_blank'>

                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 576 512">
                        <path
                            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                    </svg>
                </motion.a>
                <motion.a initial={{opacity: 0, y: 50}}
                          whileInView={{opacity: 1, y: 0}}
                          viewport={{once: true}}
                          transition={{duration: 0.5, delay: 0.6}}
                          className="cherry_logo" href='https://www.facebook.com/teamcherrygames/' target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 320 512">
                        <path
                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                    </svg>
                </motion.a>

            </div>
            <p>Hollow Knight is © Copyright 2021 Team Cherry</p>
        </div>
    )
}

export default Cherry