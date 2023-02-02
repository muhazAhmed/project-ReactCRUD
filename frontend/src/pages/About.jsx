import React from 'react'

const About = () => {
  return (
    <div className="about">
        <h1>Our Services</h1>
        <div className="row" >
            <div className="service" data-aos="slide-right">
                <i className="fa-solid fa-link"></i>
                <h2>NO ADS!</h2>
                <p>This website is a total ad free.<br></br>
                    This helps you to have a great experience, without any interruption </p>
            </div>
            <div className="service" data-aos="zoom-in">
                <i className="fa-brands fa-cloudsmith"></i>
                <h2>How it works</h2>
                <p>This is a CRUD Op. page<br></br>
                    You can Create, Read, Update, and Delete User</p>
            </div>
            <div className="service" data-aos="slide-left">
                <i className="fa-solid fa-droplet"></i>
                <h2>UI</h2>
                <p>The design is of this website is so minimal that, it easy to use and beautiful</p>
            </div>
            <div className="service" data-aos="slide-up">
                <i className="fa-solid fa-user-shield"></i>
                <h2>Saftey</h2>
                <p>The data we are storing is for security purpose, and rest assure that, it is safe and protected
                    with the best database encryption</p>
            </div>
            <div className="service" data-aos="slide-up">
                <i className="fa-solid fa-bolt"></i>
                <h2>Speed</h2>
                <p>The gentrated URL performance acts same as the original without any delay</p>
            </div>
            <div className="service" data-aos="slide-up">
                <i className="fa-solid fa-dollar-sign"></i>
                <h2>Cost</h2>
                <p>Yes!!, its Free.<br></br>
                    We dont charge a single penny for this feature</p>
            </div>
        </div>
    </div>
  )
}

export default About
