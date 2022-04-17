import React from "react";
import "./Testimonials.css";
import {Swiper, SwiperSlide} from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonials = () => {
    const clients = [
        {
            img: profilePic1,
            review: 
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quos doloribus, eum temporibus quasi sint veniam facilis labore, debitis reprehenderit ullam expedita possimus tempore, molestias odit quis voluptas omnis consequuntur?",
        },
        {  
            img: profilePic2,
            review: 
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quos doloribus, eum temporibus quasi sint veniam facilis labore, debitis reprehenderit ullam expedita possimus tempore, molestias odit quis voluptas omnis consequuntur?",
        },
        {
            img: profilePic3,
            review: 
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quos doloribus, eum temporibus quasi sint veniam facilis labore, debitis reprehenderit ullam expedita possimus tempore, molestias odit quis voluptas omnis consequuntur?",
        },
        {
            img: profilePic4,
            review: 
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quos doloribus, eum temporibus quasi sint veniam facilis labore, debitis reprehenderit ullam expedita possimus tempore, molestias odit quis voluptas omnis consequuntur?",
            
        }
    ]

    return (
        <div className="t-wrapper" id="Testimonials">
            <div className="t-heading">
                <span>Client always get</span>
                <span> Exceptional Work </span>
                <span>from me...</span>
                <div className="blur s-blur1" style={{bakground: "var(--purple)"}}></div>
                <div className="blur s-blur2" style={{bakground: "skyblue"}}></div>
            </div>
            {/* slider */}
                <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{clickable: true}}
                >
                    {clients.map((client, index) => {
                        return(
                            <SwiperSlide key = {index}>
                                <div className="testimonial">
                                    <img src={client.img} alt="" />
                                    <span>{client.review}</span>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
        </div>
    );
};

export default Testimonials;