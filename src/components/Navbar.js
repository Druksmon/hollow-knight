import {useState} from "react";
import logo from '../assets/logos/Team_Cherry_Logo_Big.png'
import logo2 from '../assets/logos/team_cherry_logo_2.png'
import {motion} from "framer-motion";

const Navbar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const closeIfOpen = () => {
        if (isNavExpanded === true) {
            setIsNavExpanded(!isNavExpanded)
        }
    }




    return (

        <nav className="nav_container">
            <div className="nav_selector">
                <button className='burger' onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="white"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <a href="#header">
                    <img className='nav_logo-2' src={logo2} alt=""/>
                </a>

                <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
                    <ul>
                        <motion.li initial={{opacity: 0, x: 50}}
                                   whileInView={{opacity: 1, x: 0}}
                                   viewport={{once: true}}
                                   transition={{duration: 0.5, delay: 0.4}}>
                            <a onClick={closeIfOpen} href="#play">Play</a>
                        </motion.li>
                        <motion.li initial={{opacity: 0, x: 50}}
                                   whileInView={{opacity: 1, x: 0}}
                                   viewport={{once: true}}
                                   transition={{duration: 0.5, delay: 0.2}}>
                            <a onClick={closeIfOpen} href="#trailer">Trailer</a>
                        </motion.li>

                        <motion.li initial={{opacity: 0, y: -50}}
                                   whileInView={{opacity: 1, y: 0}}
                                   viewport={{once: true}}
                                   transition={{duration: 0.3}} className='nav_logo'>
                            <a onClick={closeIfOpen} href="#header">
                                <img src={logo} alt="team-cherry"/>
                            </a>

                        </motion.li>
                        <motion.li initial={{opacity: 0, x: -50}}
                                   whileInView={{opacity: 1, x: 0}}
                                   viewport={{once: true}}
                                   transition={{duration: 0.5, delay: 0.2}}>
                            <a onClick={closeIfOpen} href="#dlc">Dlc</a>
                        </motion.li>
                        <motion.li initial={{opacity: 0, x: -50}}
                                   whileInView={{opacity: 1, x: 0}}
                                   viewport={{once: true}}
                                   transition={{duration: 0.5, delay: 0.4}}>
                            <a onClick={closeIfOpen} href="#team-cherry">Team Cherry</a>
                        </motion.li>

                    </ul>
                </div>

            </div>
        </nav>

    )
}

export default Navbar