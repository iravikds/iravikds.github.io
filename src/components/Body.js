import React, {useEffect, useState} from 'react';
import twitterLogo from '../assets/png/twitter-ico.png';
import linkedinLogo from '../assets/png/linkedin-ico.png';
import githubLogo from '../assets/png/github-ico.png';



const Body = () => {

    const [repos, setRepos] = useState([]);

    useEffect(() => {
      
      fetch('https://api.github.com/users/iravikds/repos')
      .then(res =>{
        return res.json();
      })
      .then(data =>{
        setRepos(data);
      });

    }, [])

    return (
        <div>
            <div>
                <section className="home-hero">
                    <div className="home-hero__content">
                        <h1 className="heading-primary">Hey, My name is <strong>Ravi Das</strong></h1>
                        <div className="home-hero__info">
                            <p className="text-primary2">
                                Software Engineer
                            </p>
                        </div>
                        <div className="home-hero__cta">
                            <a href="#projects" className="btn2 btn2--bg">Projects</a>
                        </div>
                    </div>
                    <div className="home-hero__socials">
                        <div className="home-hero__social">
                            <a href="https://linkedin.com/in/iravikds" className="home-hero__social-icon-link">
                                <img src={linkedinLogo} alt="icon" className="home-hero__social-icon" />
                            </a>
                        </div>
                        <div className="home-hero__social">
                            <a href="https://github.com/iravikds" className="home-hero__social-icon-link">
                                <img src={githubLogo} alt="icon" className="home-hero__social-icon" />
                            </a>
                        </div>
                        <div className="home-hero__social">
                            <a href="https://twitter.com/iravikds" className="home-hero__social-icon-link">
                                <img src={twitterLogo} alt="icon" className="home-hero__social-icon" />
                            </a>
                        </div>
                        <div className="home-hero__social">
                            <a href="https://leetcode.com/iraviikmr" className="home-hero__social-icon-link">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/LeetCode_logo_white_no_text.svg" alt="icon" className="home-hero__social-icon" />
                            </a>
                        </div>
                        {/* <div className="home-hero__social">
                            <a href="#" className="home-hero__social-icon-link">
                                <img src="./assets/png/yt-ico.png" alt="icon" className="home-hero__social-icon" />
                            </a>
                        </div>
                        <div className="home-hero__social">
                            <a href="#" className="home-hero__social-icon-link home-hero__social-icon-link--bd-none">
                                <img src="./assets/png/insta-ico.png" alt="icon" className="home-hero__social-icon" />
                            </a>
                        </div> */}
                    </div>
                    <div className="home-hero__mouse-scroll-cont">
                        <div className="mouse" />
                    </div>
                </section>
                <section id="about" className="about sec-pad">
                    <div className="main-container">
                        <h2 className="heading heading-sec heading-sec__mb-med">
                            <span className="heading-sec__main">About Me</span>
                            {/* <span class="heading-sec__sub">
    Passionate about creating awesome products and solving interesting problems.
  </span> */}
                        </h2>
                        <div className="about__content">
                            <div className="about__content-main">
                                <h3 className="about__content-title">Get to know me!</h3>
                                <div className="about__content-details">
                                    <p className="about__content-details-para">
                                        Hey! It's
                                        <strong> Ravi Das </strong>
                                        and I'm a <strong> Software Developer </strong> located in
                                        Jharkhand. I'm a software engineer specializing in both <strong>backend</strong> and <strong>frontend</strong> technologies. 
                                    </p>
                                    <p className="about__content-details-para">
                                    If you want to know more then contact me.
                                    </p>
                                </div>
                                <a href="#contact" className="btn2 btn2--med btn2--theme dynamicBgClr">Contact</a>
                            </div>
                            <div className="about__content-skills">
                                <h3 className="about__content-title">My Skills</h3>
                                <div className="skills">
                                    <div className="skills__skill">Python</div>
                                    <div className="skills__skill">Java</div>
                                    <div className="skills__skill">JavaScript</div>
                                    <div className="skills__skill">C#</div>
                                    <div className="skills__skill">C</div>
                                    <div className="skills__skill">React</div>
                                    <div className="skills__skill">Django</div>
                                    <div className="skills__skill">NodeJS</div>
                                    <div className="skills__skill">HTML</div>
                                    <div className="skills__skill">CSS</div>
                                    <div className="skills__skill">GIT</div>
                                    <div className="skills__skill">SQL</div>
                                    <div className="skills__skill">MongoDB</div>
                                    <div className="skills__skill">Bootstrap</div>
                                    <div className="skills__skill">Unity</div>
                                    <div className="skills__skill">Wordpress</div>
                                    <div className="skills__skill">Android</div>
                                    <div className="skills__skill">AWS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="projects" className="projects sec-pad">
                    <div className="main-container">
                        <h2 className="heading heading-sec heading-sec__mb-bg">
                            <span className="heading-sec__main">Projects</span>
                            {/* <span className="heading-sec__sub">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
                                tempora explicabo quae quod deserunt eius sapiente
                            </span> */}
                        </h2>
                        <div className="row center-text">
                            <div className="col-md-4 mb-4">
                                <div className="card border-0 h-100"><a href="https://github.com/iravikds/covid19tracker" target="_blank" rel="noreferrer"><img src="/static/media/carbon.b300cdd1.png" alt="" className="card-img-top" /></a>
                                    <div className="card-body">
                                        <h5 className="projects__row-content-title"> <a href="https://iravikds.github.io/covid19india-react" target="_blank" rel="noreferrer" className="text-dark">Covid19
                                            Tracker</a></h5>
                                        <p className="text-muted card-text projects__row-content-desc">COVID 19 Tracker India is a minimalist covid19 tracker web app in React.js
                                            library using APIs to fetch data. </p>
                                        <p className="card-text"><a href="https://iravikds.github.io/covid19india-react" target="_blank" rel="noreferrer">Read more</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card border-0 h-100"><a href="https://r4vikumar.pythonanywhere.com" target="_blank" rel="noreferrer"><img src="/static/media/adoptapet-logo.ab599236.png" alt="" className="card-img-top" /></a>
                                    <div className="card-body">
                                        <h5 className="projects__row-content-title"> <a href="https://r4vikumar.pythonanywhere.com" className="text-dark" target="_blank" rel="noreferrer">AdoptAPet - Pet
                                            Adoption Platform</a></h5>
                                        <p className="text-muted card-text projects__row-content-desc">AdoptAPet is a pet adoption platform. This project is based on Django
                                            (backend) and React.js as frontend.</p>
                                        <p className="card-text"><a href="https://r4vikumar.pythonanywhere.com">Read more</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card border-0 h-100"><a href="https://github.com/iravikds/url-shortner" target="_blank" rel="noreferrer"><img src="/static/media/carbon.b300cdd1.png" alt="" className="card-img-top" /></a>
                                    <div className="card-body">
                                        <h5 className="projects__row-content-title"> <a href="https://github.com/iravikds/url-shortner" target="_blank" rel="noreferrer" className="text-dark">URL Shortner</a>
                                        </h5>
                                        <p className="text-muted card-text projects__row-content-desc">Takes long URLs and make them shorter! This project is based on Django.
                                        </p>
                                        <p className="card-text"><a href="https://github.com/iravikds/url-shortner" target="_blank" rel="noreferrer">Read more</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                <div className="main-container">
                <h2 className="heading heading-sec heading-sec__mb-bg">
                            <span className="heading-sec__main">GIT REPOS</span>
                </h2>

                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Language</th>
                        </tr>
                        </thead>
                        <tbody>
                        {repos.map((item) =>(
                        <tr>
                            <td><a href={item.svn_url} className="text-dark text-decoration-none" target="_blank">
                            {item.name}</a></td>
                            <td>{item.description}</td>
                            <td>{item.language}</td>
                        </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                </section>
                <section id="contact" className="contact sec-pad dynamicBg">
                    <div className="main-container">
                        <h2 className="heading heading-sec heading-sec__mb-med">
                            <span className="heading-sec__main heading-sec__main--lt">Contact</span>
                            {/* <span className="heading-sec__sub heading-sec__sub--lt">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
                                tempora explicabo quae quod deserunt eius sapiente
                            </span> */}
                        </h2>
                        <div className="home-hero__cta">
                            <a href="mailto:iravikds@gmail.com" className="btn2 btn2--bg">E-Mail Me</a>
                        </div>
                        {/* <div className="contact__form-container">
                            <form action="#" className="contact__form">
                                <div className="contact__form-field">
                                    <label className="contact__form-label" htmlFor="name">Name</label>
                                    <input required placeholder="Enter Your Name" type="text" className="contact__form-input" name="name" id="name" />
                                </div>
                                <div className="contact__form-field">
                                    <label className="contact__form-label" htmlFor="email">Email</label>
                                    <input required placeholder="Enter Your Email" type="text" className="contact__form-input" name="email" id="email" />
                                </div>
                                <div className="contact__form-field">
                                    <label className="contact__form-label" htmlFor="message">Message</label>
                                    <textarea required cols={30} rows={10} className="contact__form-input" placeholder="Enter Your Message" name="message" id="message" defaultValue={""} />
                                </div>
                                <button type="submit" className="btn2 btn2--theme contact__btn2">
                                    Submit
                                </button>
                            </form>
                        </div> */}
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Body
