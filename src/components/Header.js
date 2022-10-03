import logo from '../assets/logos/hollow_knight_title_large_white.png'
import video from '../assets/Atmos_snippet.gif'
import {motion} from "framer-motion";

const Header = () => {
    return (

        <div className="header_container">
            <div className="header_logo-container">
                <motion.img initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 1.2}} src={logo} alt="hollow-knight"/>

            </div>
            {/*<div className="header_video">*/}
            {/*    <img src={video} alt=""/>*/}
            {/*</div>*/}
            <div className="header_gradient"/>
        </div>

    )
}

export default Header