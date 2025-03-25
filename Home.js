import React from "react";
import background from './backgroud.jpg';
const Home = () => {


    return(
        
        <div className="home-container">
            <div className="image-container">
            <img src={background} alt="background" className="background-img" />
            </div>
           
            <h1 > Welcome to Elie Rached's Online Shop! </h1>
            <p>
            We offer a carefully curated selection of high-quality products designed to meet your needs and exceed your expectations. Whether you're shopping for the latest trends, unique gifts, or everyday essentials, you'll find it here. Enjoy a seamless shopping experience with our user-friendly website, secure payment options, and dedicated customer service.
         Thank you for choosing Elie Rached's Online Shop!
            </p>
            
        </div>
    )
};
export default Home;