import React from 'react';
import './Footer.css';

const Footer = (props) => {

    props = {
        headingSmall: "Star Wars APIs",
        footerText1: "View on Github",
        footerText2: "Deployed on Netlify"
        
    }
    return(
        <div className="footer">
                <ul className="footer-wrapper">
                <li className="footer-text"><a href="https://swapi.co/" target="blank">{props.headingSmall}</a></li>
                <li className="footer-text">{props.footerText1}</li>
                <li className="footer-text">{props.footerText2}</li>
                </ul>
        </div>
    )
}

export default Footer;