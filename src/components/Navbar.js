import logo from '../assets/logos/Team_Cherry_Logo_Big.png'
import {motion} from "framer-motion";

const Navbar = () => {
    return (

        <nav className="nav_container">
            <motion.div  className="nav_selector">
                <ul>
                    <li>
                        <a href="#play">Play</a>
                    </li>
                    <li>
                        <a href="#trailer">Trailer</a>
                    </li>

                    <li className='nav_logo'>
                        <img src={logo} alt="team-cherry"/>
                    </li>
                    <li>
                        <a href="#dlc">Dlc</a>
                    </li>
                    <li>
                        <a href="#team-cherry">Team Cherry</a>
                    </li>

                </ul>
            </motion.div>
        </nav>

    )
}

export default Navbar