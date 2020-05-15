import React from 'react';
import '../assets/style/Header.css';


const Header = () => {
    
        return(
            <div className="header-container" id="home">
                <div className="header-wrapper">
                    <div className="header-left">

                    </div>

                    <div className="header-right" data aos="fade-left">
                        <div className="header-right-wrapper">
                        <h1 className="main-heading"> Star Wars</h1>
                        <h2 className="sub-heading">A Page Built With Star Wars APIs...</h2>
                        <div className="sub-heading-container">
                        <h2 className="sub-heading">and React</h2>
                        <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" className="react-logo" alt="react logo" />

                        </div>
                        <div className='icon-scroll'></div>

                        </div>

                    </div>

                </div>
            </div>
        )
    }

export default Header;