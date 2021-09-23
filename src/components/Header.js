import React from 'react';
import mainLogo from '../assets/png/logo.png';
import hamIcon from '../assets/svg/ham-menu.svg';
import hamcloseIcon from '../assets/svg/ham-menu-close.svg';


const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="header__content">
                    <div className="header__logo-container">
                        <div className="header__logo-img-cont">
                            <img src={mainLogo} alt="Logo Image" className="header__logo-img" />
                        </div>
                        <span className="header__logo-sub">Ravi Das</span>
                    </div>
                    <div className="header__main">
                        <ul className="header__links">
                            <li className="header__link-wrapper">
                                <a href="#" className="header__link"> Home </a>
                            </li>
                            <li className="header__link-wrapper">
                                <a href="#about" className="header__link">About </a>
                            </li>
                            <li className="header__link-wrapper">
                                <a href="#projects" className="header__link">
                                    Projects
                                </a>
                            </li>
                            <li className="header__link-wrapper">
                                <a href="#contact" className="header__link"> Contact </a>
                            </li>
                        </ul>
                        <div className="header__main-ham-menu-cont">
                            <img src={hamIcon} alt="hamburger menu" className="header__main-ham-menu" />
                            <img src={hamcloseIcon} alt="hamburger menu close" className="header__main-ham-menu-close d-none" />
                        </div>
                    </div>
                </div>
                <div className="header__sm-menu">
                    <div className="header__sm-menu-content">
                        <ul className="header__sm-menu-links">
                            <li className="header__sm-menu-link">
                                <a href="/"> Home </a>
                            </li>
                            <li className="header__sm-menu-link">
                                <a href="#about"> About </a>
                            </li>
                            <li className="header__sm-menu-link">
                                <a href="#projects"> Projects </a>
                            </li>
                            <li className="header__sm-menu-link">
                                <a href="#contact"> Contact </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Header
