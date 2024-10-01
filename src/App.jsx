import React, { useState } from "react";
import "./App.css";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="App">
            <nav id="desktop-nav">
                <div className="logo">Web Development</div>
                <ul className="nav-links">
                    <li><a href="#Introduction">Introduction</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#Importance">Importance</a></li>
                    <li><a href="#Tools">Tools</a></li>
                </ul>
            </nav>

            <nav id="hamburger-nav">
                <div className="logo">Web Development</div>
                <div className="hamburger-menu">
                    <div className="hamburger-icon" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`menu-links ${isMenuOpen ? "open" : ""}`}>
                        <ul>
                            <li><a href="#Introduction" onClick={toggleMenu}>Introduction</a></li>
                            <li><a href="#about" onClick={toggleMenu}>About</a></li>
                            <li><a href="#Importance" onClick={toggleMenu}>Importance</a></li>
                            <li><a href="#Tools" onClick={toggleMenu}>Tools</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="profile-bg"></div>
            <section id="profile">
                <div className="section__pic-container">
                    <img src="bt.png" alt="Profile" className="prof" />
                </div>
                <div className="section__text prof-text">
                    <div className="text-line">
                        <p className="section__text__p1 prof-texts1" id="Introduction">Introduction To...</p>
                        <h1 className="title prof-texts1">Web Development</h1>
                    </div>
                    <div className="text-line2">
                        <p className="section__text__p2 prof-texts1">Web development is the process of creating websites for online or intranet use.</p>
                    </div>
                </div>
            </section>

            <section id="about">
                <p className="section__text__p1">Get to Know More About Web Development</p>
                <h1 className="title">About</h1>
                <p className="section__text__p1">
                    The diverse discipline of web development is centered on creating and managing websites that
                    allow users to access and engage with material online...
                </p>
                <h1 className="title" id="Importance">Importance Of Web Development</h1>
                <div className="section-container">
                    <div className="section__pic-container">
                        <img src="https://designdotacademy.com/assets/images/course/uxui.jpg" className="about-pic" />
                    </div>
                    <div className="about-details-container">
                        <div className="about-containers">
                            <div className="details-container">
                                <img src="https://banner2.cleanpng.com/20190419/jaj/kisspng-portable-network-graphics-vector-graphics-computer-medal-png-icon-339-png-repo-free-png-icons-1713897378484.webp" alt="Experience Icon" className="icon" />
                                <h3>Brings Businesses to Life</h3>
                                <p>Web development is crucial for turning business ideas into reality, as a strong online presence 
                                showcases a company's culture, values, and supports branding and marketing efforts.</p>
                            </div>
                            <div className="details-container">
                                <img src="https://banner2.cleanpng.com/20190419/jaj/kisspng-portable-network-graphics-vector-graphics-computer-medal-png-icon-339-png-repo-free-png-icons-1713897378484.webp" alt="Experience Icon" className="icon" />
                                <h3>Building Relationships With Customers</h3>
                                <p>Web development is key to fostering customer relationships by ensuring your website is user-friendly,
                                modern, and reliable. An outdated or difficult-to-navigate site can erode customer trust and harm your business.</p>
                            </div>
                            <div className="details-container">
                                <img src="https://banner2.cleanpng.com/20190419/jaj/kisspng-portable-network-graphics-vector-graphics-computer-medal-png-icon-339-png-repo-free-png-icons-1713897378484.webp" alt="Education Icon" className="icon" />
                                <h3>Creating Leads and Sales</h3>
                                <p>Web development is vital for attracting leads and sales, as it helps customers find your business online. 
                                Without a website, you risk losing potential customers to competitors.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                  <img className="icon arrow" src="https://www.pngarts.com/files/2/Down-Arrow-Transparent-Image.png" alt="arrow" onClick={() => window.location.hash = '#Tools'} />
                
            </section>

            <section id="importance">
                <p className="section__text__p1">Tools</p>
                <h1 className="title" id="Tools">Explore My Tools For Web Development</h1>
                <div className="importance-details-container">
                    <div className="about-containers">
                        {/* Project 1 */}
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" onTouchStart={e => e.currentTarget.classList.toggle('hover')}>
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <img className="img-fluid project-img" src="https://camo.githubusercontent.com/b7fd64533bd72bada5409ddebb3365ae0ea4fdf4379efae7503adeb42db20e12/68747470733a2f2f6c6f676f73706e672e6f72672f646f776e6c6f61642f68746d6c2d352f6c6f676f2d68746d6c2d352d3235362e706e67" alt="Project 1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <p>HTML is the standard markup language used for creating and structuring content on the web...</p>
                                                <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://www.w3schools.com/html/default.asp')}>Learn More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" onTouchStart={e => e.currentTarget.classList.toggle('hover')}>
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <img className="img-fluid project-img" src="https://camo.githubusercontent.com/d523285d4fe0de255530109a2c65812cb852b3667db65a387adcd62c4e7911ea/68747470733a2f2f6c6f676f73706e672e6f72672f646f776e6c6f61642f6373732d332f6c6f676f2d6373732d332d3235362e706e67" alt="Project 2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <p>Cascading Style Sheets is a style sheet language used for specifying the presentation and styling...</p>
                                                <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://www.w3schools.com/css/default.asp')}>Learn More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" onTouchStart={e => e.currentTarget.classList.toggle('hover')}>
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <img className="img-fluid project-img" src="https://camo.githubusercontent.com/895fc5b28f0e20ca664a513c5257ff0aef370cd79544d8bb99454b36fa3d667b/68747470733a2f2f6c6f676f73706e672e6f72672f646f776e6c6f61642f6a6176617363726970742f6c6f676f2d6a6176617363726970742d69636f6e2d3235362e706e67" alt="Project 3" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <p>JavaScript is a versatile, high-level programming language primarily used to create interactive and dynamic content...</p>
                                                <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://www.w3schools.com/js/default.asp')}>Learn More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="icon arrow" src="https://www.pngarts.com/files/2/Down-Arrow-Transparent-Image.png" alt="arrow" onClick={() => window.location.hash = '#Introduction'} />
            </section>

            <footer>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#Introduction">Introduction</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#Importance">Importance</a></li>
                        <li><a href="#Tools">Tools</a></li>
                    </ul>
                </nav>
                <p className="copy">Copyright &copy; 2024 RYOM JAMES ALEMANIA. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default App;
