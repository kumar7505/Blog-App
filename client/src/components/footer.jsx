import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faLinkedin,   
//  faGithub } from '@fortawesome/free-brands-svg-icons';   
import './footer.css'


const footer = () => {
    return (
        <footer>
            <div className="row primary">
                <div className="column about">

                    <h3>Kollish Developer</h3>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                        voluptatem corporis error non, 
                    </p>

                    <div className="social">
                        <i className="fa-brands fa-facebook-square" style={{color: 'blue'}}></i>
                        <i className="fa-brands fa-instagram-square" style={{color: '#ff0084'}}></i>
                        <i className="fa-brands fa-twitter-square" style={{color: 'rgb(0, 166, 255)'}}></i>
                        <i className="fa-brands fa-youtube-square" style={{color: 'red'}}></i>
                    </div>
                </div>

                <div className="column subscribe">
                    <h3>Newsletter for Premium</h3>
                    <div>
                        <input type="email" placeholder="Your email id here" />
                        <button>Subscribe</button>
                    </div>
                </div>
                
                <div className="column links">
                    <h3>Contact US</h3>
                    <ul>
                        <li><a href="#name">Kumar P</a></li>
                        <li><a href="#mail">imkumar@gmail.com</a></li>
                        <li><a href="#terms-of-services">Terms Of Service</a></li>
                        <li><a href="#support">Chennai, India</a></li>
                    </ul>
                </div>

            
            </div>

                <div className="row copyright">
                    <div className="footer-menu">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                        <a href="">Blog</a>
                        <a href="">Social</a>
                    </div>
                    <p>Copyright &copy; 2024 Foolish Developer</p>
                </div>
        </footer>

        /* <div className="column links">
            <h3>Some Links</h3>

            <ul>

            <li>
            <a href="#faq">F.A.Q</a>
            </li>
            <li>
            <a href="#cookies-policy">Cookies Policy</a>
            </li>
            <li>
            <a href="#terms-of-services">Terms Of Service</a>
            </li>
            <li>
            <a href="#support">Support</a>
            </li>
            </ul>

            </div>


            <div className="column links">
            <h3>Some Links</h3>
            <ul>
                <li>
                <a href="#faq">F.A.Q</a>
                </li>
                <li>
                <a href="#cookies-policy">Cookies Policy</a>
                </li>
                <li>
                <a href="#terms-of-services">Terms Of Service</a>
                </li>
                <li>
                <a href="#support">Support</a>
                </li>
            </ul>
            </div> */
);
};

export default footer;