import {Parallax, Background} from 'react-parallax';

const Image = ({img, classImg, blur}) => {
    return (
        <Parallax blur={5} className={classImg} strength={300}>
            <Background>
                <img src={img} alt='uhg'/>
            </Background>
        </Parallax>
    )
}

export default Image