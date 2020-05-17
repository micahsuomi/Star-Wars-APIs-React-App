import React from 'react';
import '../assets/style/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init({
    offset: 400,
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
            
            <div className="about-right" data-aos="fade-left"></div>

            </div>
        </div>

    )
}


export default About;
