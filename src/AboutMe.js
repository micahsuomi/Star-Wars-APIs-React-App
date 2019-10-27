import React, {Component} from 'react';
import './AboutMe.css';
import profile from './background1.jpg';
import HideText from './HideText';


class AboutMe extends Component {
    constructor() {
        super();
        this.state = {
            aboutMeHeading: "About Me",
            text1: "This is my first completed React page after 3 weeks of studying React. The page doesn't use anything advanced, just the basics of Props, State, SetState, Events, class-based and function-based components. React indeed makes you a better JavaScript developer!",
        }
    }

    render() {
        return(

            <div className="about-me-container" id="contact">
            <div className="about-me-wrapper">

            <div className="about-me-right" data-aos="fade-left">
            <img src={profile} alt="profile pic" /></div>

            <div className="about-me-left" data-aos="fade-right">
            <h2 className="about-me-header">{this.state.aboutMeHeading}</h2>
            <p className="about-me-description">{this.state.text1}</p>

            <HideText text ="I'm a self-thought front-end developer. I aim to create beautiful, responsive and user-friendly web pages, and I pay a lot of attention to UI and prototyping. I usually build everything from scratch rendering a page more unique and customized.

            I have a background in art and design (also self-taught). I love working with designs, colors and contrast, whitespaces, font-sizes. It just feels natural to me. I'm now focusing on React and modern JavaScript. When I'm not coding, I'm into UI Design, painting, digital illustrations and photography.You can view my web development porfolio at the link. Most of my work includes responsive design with HTML, CSS, JavaScript, Sass and Bootstrap. You can view my porfolio at." />
            
            </div>

            </div>
        </div>

        )
    }
}
export default AboutMe;