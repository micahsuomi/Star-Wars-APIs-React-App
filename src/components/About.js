import React from 'react';
import '../assets/style/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init({
    offset: 200,
    duration: 800
});

const About = (props) => {
    
        props = {

            heading: "About",
            paragraph: "This website uses the SWAPI (Star Wars API) website to display Star Wars data. Here are displayed some movies, characters, planets, species and starships data. Hope you'll like the design! If you want to learn more about the SWAPI website, click on the button below." 

        } 

    return(

        <div className="about-container" id="about">
            <div className="about-wrapper">

            <div className="about-left" data-aos="fade-right">
            <h2 className="about-header">{props.heading}</h2>
            <p className="about-description">{props.paragraph}</p>
            <button className="btn-learn-more">
                <a href="https://swapi.dev/" target="blank">
                    Learn More On SWAPI</a></button>
            </div>
            
            <div className="about-right" data-aos="fade-left">
                <img src="https://cdn.vox-cdn.com/thumbor/WPU-WT6wZXMUVVZ2JaH09ozK1fI=/0x0:640x427/1200x800/filters:focal(269x163:371x265)/cdn.vox-cdn.com/uploads/chorus_image/image/54636905/Rey_and_BB-8.0.0.jpg" alt="the force awakens"/>
            </div>

            </div>
        </div>

    )
}


export default About;
