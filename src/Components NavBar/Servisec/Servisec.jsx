import React from "react";
import '../Servisec/Servisec.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from '../../img/amazon.png'
import { motion } from "framer-motion";
import {themeContext} from '../../Context';
import { useContext } from 'react';


const Services = () => {
    const transition = {duration: 1, type: 'spring'};
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
   
    return(
            <div className="services" id="Services">

                {/* left side */}
                <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span style={{color : darkMode ? 'black' : ''}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, praesentium animi dignissimos qui <br />laboriosam maiores architecto quis tempora id numquam tempore sit sunt exercitationem! Odio et itaque dolorem quidem repellat.</span>
                <a href={Resume} download><button className="button s-button">Downdload CV</button></a>
                <div className="blur s-blur1" style={{bakground: "#ABF1FF94"}}></div>
                </div>
                {/*right side*/}
                <div className="cards">
                    {/*First card*/}
                    <motion.div 
                    initial={{left: '25%' }}
                    whileInView={{left: '10rem'}}
                    transition={transition}
                    style={{left: '19rem'}}>
                        <Card 
                        emoji = {HeartEmoji}
                        heading = {"Design"}
                        detail = {"Figma, Sketch, Photoshop, Adobe, "}
                        />
                    </motion.div>
                     {/*Second card*/}
                    <motion.div
                        initial={{left: '0rem' }}
                        whileInView={{left: '-4rem'}}
                        transition={transition} 
                        style={{top: '12rem', left: '-8rem'}}>
                            <Card 
                                emoji = {Glasses}
                                heading = {"Developer"}
                                detail = {"Html, Css, JavaScript, React"}
                            />
                    </motion.div>
                     {/*3rd card*/}
                     <motion.div
                        initial={{left: '0rem' }}
                        whileInView={{left: '12rem'}}
                        transition={transition}  
                        style={{top: '19rem', left: '16rem'}}>
                            <Card 
                                emoji = {Humble}
                                heading = {"UI/UX"}
                                detail = {"Lorem, ipsum dolor sit amet consectetur sit amet consectetur "}
                            />
                    </motion.div>
                     <div className="blur s-blur2" style={{bakground: "var(--purple)"}}></div>
                </div>
            </div>
    );
}

export default Services;