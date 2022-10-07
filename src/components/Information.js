import {motion} from "framer-motion";


import screen1 from '../assets/screens/Lake_of_Unn.jpg'
import screen2 from '../assets/screens/Blue_Cave.jpg'
import screen3 from '../assets/screens/colosseum.jpg'
import screen4 from '../assets/screens/City_of_Tears.jpg'
import screen5 from '../assets/screens/Grimm.jpg'
import screen6 from '../assets/screens/Crossroads Entrance.jpg'
import screen7 from '../assets/screens/mines.jpg'
import screen8 from '../assets/screens/Moss_charger.jpg'


import separator from '../assets/separator.png'


import Image from "./Image";

const Information = () => {
    return (

        <div className="info_container">
            <motion.div initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 1.2}} className="info_title">
                <h1>Descend into the Dark</h1>
                <img src={separator} alt=""/>
            </motion.div>
            <div className="info_images">
                <Image classImg={'image_box-1'} img={screen1}/>
                <div className="info-box-1">
                    <div className="info_text">
                        <h1>Brave the Depths of a Forgotten Kingdom</h1>
                        <h3>Beneath the fading town of Dirtmouth sleeps a vast, ancient kingdom.
                            or glory, or answers to old secrets. <br/>
                            <br/>
                            As the enigmatic Knight, you’ll traverse the depths,
                            unravel its mysteries and conquer its evils.</h3>
                    </div>
                </div>
                <Image classImg={'image_box-2'} img={screen2}/>
                <div className=" info-box-2">
                    <div className="info_text">
                        <h1>Use Your Skills and Reflexes to Survive</h1>
                        <h3>Hollow Knight is a challenging 2D action-adventure. <br/>
                            <br/>You’ll explore twisting caverns, battle
                            tainted creatures and escape intricate traps, all to solve an ancient long-hidden
                            mystery.</h3>
                    </div>
                </div>
                <Image classImg={'image_box-3'} img={screen3}/>
                <Image classImg={'image_box-4'} img={screen4}/>
                <Image classImg={'image_box-5'} img={screen5}/>
                <div className=" info-box-3">
                    <div className="info_text">
                        <h1>Evocative Hand-Drawn Art</h1>
                        <h3>The world of Hollow Knight is brought to life in vivid, moody detail, its caverns alive with
                            bizarre and terrifying creatures, each animated by hand in a traditional 2D style.</h3>
                    </div>
                </div>

                <Image classImg={'image_box-6'} img={screen6}/>
                {/*<Image classImg={'image_box-7'} img={screen7}/>*/}
                {/*<Image classImg={'image_box-8'} img={screen8}/>*/}
            </div>


            {/*<div className="info_img info_img-1">*/}
            {/*    <img src={screen1} alt=""/>*/}
            {/*</div>*/}
            {/*<div className="info_img info_img-2">*/}
            {/*    <img src={screen2} alt=""/>*/}
            {/*</div>*/}
            {/*<div className="info_img info_img-3">*/}
            {/*    <img src={screen3} alt=""/>*/}
            {/*</div>*/}
            {/*<div className="info_img info_img-4">*/}
            {/*    <img src={screen4} alt=""/>*/}
            {/*</div>*/}
            {/*<div className="info_img info_img-5">*/}
            {/*    <img src={screen4} alt=""/>*/}
            {/*</div>*/}


        </div>

    )
}

export default Information