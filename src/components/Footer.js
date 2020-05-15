import React from 'react';
import '../assets/style/Footer.css';

const Footer = (props) => {

    props = {
        headingSmall: "Star Wars APIs",
        footerText1: "View on Github",
        footerText2: "Deployed on Netlify",
        footerText3: "View my Portfolio"
        
    }
    return(
        <div className="footer">
                <ul className="footer-wrapper">
                <li className="footer-text"><a href="https://swapi.co/" target="blank">{props.headingSmall}</a></li>
                <li className="footer-text"><a href="https://github.com/micahsuomi/Star-Wars-APIs-React-App" target="blank">{props.footerText1}</a></li>
                <li className="footer-text"><a href="https://www.netlify.com/">{props.footerText2}</a></li>
                <li className="footer-text"><a href="https://www.michelezuccawebdev.com/">{props.footerText3}</a></li>

                </ul>
        </div>
    )
}

export default Footer;