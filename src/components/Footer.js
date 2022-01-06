import React from 'react';
import twitterLogo from '../assets/png/twitter-ico.png';
import linkedinLogo from '../assets/png/linkedin-ico.png';
import githubLogo from '../assets/png/github-ico.png';


const Footer = () => {
    return (
        <div>
            <footer className="main-footer">
                <div className="main-container">
                    <div className="main-footer__upper">
                        <div className="main-footer__row main-footer__row-1">
                            <h2 className="heading heading-sm main-footer__heading-sm">
                                <span>Social</span>
                            </h2>
                            <div className="main-footer__social-cont">
                                <a target="_blank" rel="noreferrer" href="https://github.com/iravikds">
                                    <img className="main-footer__icon" src={githubLogo} alt="icon" />
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/iravikds">
                                    <img className="main-footer__icon" src={linkedinLogo} alt="icon" />
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://twitter.com/iravikds">
                                    <img className="main-footer__icon" src={twitterLogo} alt="icon" />
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://leetcode.com/iravikds">
                                    <img className="main-footer__icon" src="https://upload.wikimedia.org/wikipedia/commons/a/ab/LeetCode_logo_white_no_text.svg" alt="icon" />
                                </a>
                                {/* <a target="_blank" rel="noreferrer" href="#">
                                    <img className="main-footer__icon" src="./assets/png/yt-ico.png" alt="icon" />
                                </a>
                                <a target="_blank" rel="noreferrer" href="#">
                                    <img className="main-footer__icon main-footer__icon--mr-none" src="./assets/png/insta-ico.png" alt="icon" />
                                </a> */}
                            </div>
                        </div>
                        <div className="main-footer__row main-footer__row-2">
                            <h4 className="heading heading-sm text-lt">Ravi Das</h4>
                            <p className="main-footer__short-desc">
                                Passionate about creating awesome products and solving interesting problems.
                            </p>
                        </div>
                    </div>
                    {/* If you give me some credit or shoutout here by linking to my website, then it will be a big thing for me and will help me a lot :) */}
                    <div className="main-footer__lower">
                        © Copyright 2021. Made by
                        <a rel="noreferrer" target="_blank" href="https://iravikds.github.io">Ravi Das</a>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
