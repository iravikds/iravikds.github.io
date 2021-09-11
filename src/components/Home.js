import React, {useEffect,useState} from 'react';
import photo from '../assets/ravi.jpg';
import placeholderimg from '../assets/carbon.png';
import adoptapet from '../assets/adoptapet-logo.png';


const Home = () => {

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
        <div className="container p-2">
        <div className="row justify-content-center">
          
          <div className="col">
            {/*card start*/}
            <div className="card-box">
              <div className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand" href="#">
                  <div className="m-1" style={{fontSize: '20px'}}>
                    <span style={{fontSize: '20px'}} className="fa-stack fa-3x">
                      <i className="fa fa-circle fa-stack-2x text-primary" />
                      <strong className="fa-stack-1x text-white" style={{marginTop: '-.1em'}}>R</strong>
                    </span>
                    <span className="logo-text">Ravi</span> Das
                  </div>
                </a>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                  <ul className="nav float-right">
                    <li className="nav-item">
                      <a className="nav-link" href="#about">About Me</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://1drv.ms/b/s!AmuSxIieD591jEcpjcQB9G3K9GHU?e=ZPKML3">Resume</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                  </ul>
                </div>
              </div>
             
              <section className="p-5 m-5">
                <div className="container"> 
                  <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1 pt-5">
                      <h5><span id="spin" /><p /></h5>
                      <h1>Ravi Das</h1>
                      <p className="lead">Passionate about creating awesome
                        products and solving interesting problems.</p>
                      <p><a href="https://1drv.ms/b/s!AmuSxIieD591jEcpjcQB9G3K9GHU?e=ZPKML3" target="_blank" className="btn btn-outline-primary shadow m-2">
                          <i className="fa fa-download" aria-hidden="true" /> Download CV</a>
                        <a href="mailto:iravikds@gmail.com" className="btn btn-outline-primary m-2">
                          <i className="fa fa-comments" aria-hidden="true" /> Contact Me</a>
                          <br></br><br></br>
                                    
                                    <a href="https://www.linkedin.com/in/iravikds" class="m-2">
                                    <i class="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn</a>
                                    <a href="https://github.com/iravikds" class="m-2">
                                    <i class="fa fa-github-square" aria-hidden="true"></i> GitHub</a>
                                    <a href="https://leetcode/iraviikmr" class="m-2">
                                    <i class="fa fa-code" aria-hidden="true"></i> LeetCode</a>
                          
                          </p>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                      <img src={photo} className="img-fluid border border-primary" style={{borderRadius: '50%'}} width={300} />
                    </div>
                  </div>
                </div>
              </section>
             
              
             
              <section className id="portfolio">
                <div className="container">
                  <h2>Projects</h2>
                  <p className="lead text-muted mb-5">Projects I made.</p>
                  <div className="row">
                  <div className="col-md-4 mb-4">
                      <div className="card border-0 h-100">
                        <a href="https://iravikds.github.io/awwdopt-react/" target="_blank"><img src={adoptapet} alt="" className="card-img-top" /></a>
                        <div className="card-body">
                          <h5> <a href="https://iravikds.github.io/awwdopt-react/" className="text-dark" target="_blank">
                              Awwdopt - Pet Adoption Platform</a></h5>
                          <p className="text-muted card-text">Awwdopt is a pet adoption platform. This project is based on React.js (only frontend)</p>
                          <p className="card-text"><a href="https://iravikds.github.io/awwdopt-react/">Read more</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="card border-0 h-100">
                        <a href="https://r4vikumar.pythonanywhere.com" target="_blank"><img src={adoptapet} alt="" className="card-img-top" /></a>
                        <div className="card-body">
                          <h5> <a href="https://r4vikumar.pythonanywhere.com" className="text-dark" target="_blank">
                              AdoptAPet - Pet Adoption Platform</a></h5>
                          <p className="text-muted card-text">AdoptAPet is a pet adoption platform. This project is based on Django (backend).</p>
                          <p className="card-text"><a href="https://r4vikumar.pythonanywhere.com">Read more</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="card border-0 h-100">
                        <a href="https://github.com/iravikds/url-shortner" target="_blank"><img src={placeholderimg} alt="" className="card-img-top" /></a>
                        <div className="card-body">
                          <h5> <a href="https://github.com/iravikds/url-shortner" target="_blank" className="text-dark">
                              URL Shortner</a></h5>
                          <p className="text-muted card-text">Takes long URLs and make them shorter! This project is based on Django.</p>
                          <p className="card-text"><a href="https://github.com/iravikds/url-shortner" target="_blank">Read more</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="card border-0 h-100">
                        <a href="https://github.com/iravikds/food-recommender-system" target="_blank"><img src={placeholderimg} alt="" className="card-img-top" /></a>
                        <div className="card-body">
                          <h5> <a href="https://github.com/iravikds/food-recommender-system" className="text-dark" target="_blank">
                              Food Recommender System</a></h5>
                          <p className="text-muted card-text">food recommender system is based on collaborative filtering method which recommends food items based on pre trained model.</p>
                          <p className="card-text"><a href="https://github.com/iravikds/food-recommender-system" target="_blank">Read more</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="card border-0 h-100">
                        <a href="https://github.com/iravikds/covid19tracker" target="_blank"><img src={placeholderimg} alt="" className="card-img-top" /></a>
                        <div className="card-body">
                          <h5> <a href="https://github.com/iravikds/covid19tracker" target="_blank" className="text-dark">
                              Covid19 Tracker</a></h5>
                          <p className="text-muted card-text">COVID 19 Tracker India is a minimalist covid19 tracker web app in django framework and web scrapping. </p>
                          <p className="card-text"><a href="https://github.com/iravikds/covid19tracker" target="_blank">Read more</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
              <h2>GitHub Repos</h2>
                  <p className="lead text-muted mb-5">My github repos.</p>
                  

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
              </section>
              
            </div>
          </div>
        </div>
      </div>

    )
}

export default Home