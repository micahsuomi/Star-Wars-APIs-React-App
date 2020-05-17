import React, {Component} from 'react';
import '../assets/style/AboutMe.css';
import profile from '../assets/imgs/background1.jpg';

const porfolioLink = 'https://michelezuccawebdeveloper.netlify.com/';
class AboutMe extends Component {
    constructor() {
        super();
        this.state = {
            aboutMeHeading: "About Me",
            text1: "This is my first completed React page after 3 weeks of studying React. The page doesn't use anything advanced, just the basics of Props, State, SetState, Events, class-based and function-based components. React indeed makes you a better JavaScript developer!",
            isShowing: false
        }
    }

    showHide = () => {this.setState({isShowing: !this.state.isShowing})}
    render() {
        return(

            <div className="about-me-container" id="contact">
            <div className="about-me-wrapper">

            <div className="about-me-left" data-aos="fade-left">
            <img src={profile} alt="profile pic" /></div>

            <div className="about-me-right" data-aos="fade-right">
            <h2 className="about-me-header">{this.state.aboutMeHeading}</h2>
            <p className="about-me-description">{this.state.text1}</p>

           
            {
                this.state.isShowing ? 
                <p className="about-me-description">I'm a Full-Stack Development student at Integrify Academy in Helsinki, very close to graduation. I have started coding and studying web development as self-taught. I think for programming as an art. Nothing can be mastered without constant practice, repetition, self-discipline and continuous learning.

                I focus on responsive and user-friendly UI, functionality, data manipulation. My stack of choice is currently the MERN stack, but I am also studying the JAMStack. I love working especially with React and JavaScript and practicing coding challenges. When I'm not coding, I'm into UI/UX Design, painting, digital illustrations and photography. You can view my portfolio at <a href={porfolioLink} target="blank">Michele Zucca Web Developer</a></p> : ''
            }
            

            <button className="btn-more" onClick = {this.showHide}>{this.state.isShowing ? 'View Less' : 'View More'}</button>
            
            </div>

            </div>

            </div>

        )
    }
}
export default AboutMe;