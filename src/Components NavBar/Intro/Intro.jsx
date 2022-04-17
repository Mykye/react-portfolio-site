import React from "react";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import '../Intro/Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instargam from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import { motion } from "framer-motion";
import {themeContext} from '../../Context';
import { useContext } from 'react';

const Intro = () => {
    const transition = {duration : 2 , type: 'spring'};
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return(
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am </span>
                    <span>Misha Boiko </span>
                    <span>Frontend Developer with hight
                        level of experience in web designing 
                        and development, producting the
                        Quality work</span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <a href="https://github.com/Mykye/michael.github.io" target='_blanc'>
                        <img className="icon" src={Github} alt="" />
                    </a>
                    <a>
                        <img className="icon" src={LinkedIn} alt="" />
                    </a>
                    <a>
                        <img className="icon" src={Instargam} alt="" />
                    </a>
                </div>
            </div>
            
            <div className="i-right">
                        <img src={Vector1} alt="" />
                        <img src={Vector2} alt="" />
                        <img src={boy} alt="" />
                        <motion.img 
                        initial={{left: '-36%' }}
                        whileInView={{left: '-24%'}}
                        transition={transition}
                        src={glassesimoji} 
                        alt="" />
                <motion.div 
                initial={{top: '-4%', left: '74%' }}
                whileInView={{left: '68%'}}
                transition={transition}
                style={{top: '-4%', left: '58%',color : darkMode ? 'black' : ''}}
                className = 'floating-div'
                >
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
                </motion.div>
                <motion.div 
                initial={{top: '18rem', left: '0rem' }}
                whileInView={{left: '2.3rem'}}
                transition={transition}
                style={{top: '18.3rem', left: '-5rem',color : darkMode ? 'black' : ''}}
                className = 'floating-div'>
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
                </motion.div>
                {/*blur divs*/ }
                <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
                <div className="blur" style={{background: '#C1f5FF', top:'17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>
            </div>
        </div>
    );
}


export default Intro;