import React from 'react';
import Homeimg from '../imag/Home.jpg';
// import instagram from '../icons/instagram.png'; 
// import linkedin from '../icons/linkedin.png';
// import twitter from '../icons/twitter.png';
// import youtube from '../icons/youtube.png';
import instagram from '../icons/i.png'; 
import linkedin from '../icons/l.png';
import twitter from '../icons/t.png';
import youtube from '../icons/y.png';
import image1 from '../imag/Moksha.jpg'; 
import image2 from '../imag/Moksha.jpg';
import iitgnlogo from '../icons/IITGN Logo.webp';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="overlay"></div>
        <div className="content">
          <h1 style={{ fontFamily: 'sans-serif' }}>IIT Gandhinagar Motorsport</h1>
          <p>Tagline goes here</p>
        </div>
        <div className="social-icons">
          <div className="icon"><img src={instagram} alt="Instagram" /></div>
          <div className="icon"><img src={linkedin} alt="Linkedin" /></div>
          <div className="icon"><img src={twitter} alt="Twitter" /></div>
          <div className="icon"><img src={youtube} alt="Youtube" /></div>
        </div>
        <img src={Homeimg} alt="Home background" className="background-img" />
      </div>

      <div className="section-divider"></div>

      <div className="section">
        <div className="section-content">
          <div className="section-image">
            <img src={image1} alt="Section 1" />
          </div>
          <div className="section-text">
            <h2>Title for Section 1</h2>
            <p>Description for the first section. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta hic fugit, sint ex molestias blanditiis quae nemo! Incidunt, placeat recusandae, hic debitis velit odio animi laboriosam nam praesentium, enim qui Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste itaque iure, corporis omnis ad assumenda quam facilis ullam mollitia modi ducimus totam nam.</p>
          </div>
        </div>
      </div>

      <div className="section-divider"></div>

      <div className="section">
        <div className="section-content">
          
          <div className="section-text">
            <h2>Title for Section 1</h2>
            <p>Description for the first section. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta hic fugit, sint ex molestias blanditiis quae nemo! Incidunt, placeat recusandae, hic debitis velit odio animi laboriosam nam praesentium, enim qui Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste itaque iure, corporis omnis ad assumenda quam facilis ullam mollitia modi ducimus totam nam.</p>
          </div>
          <div className="section-image">
            <img src={image2} alt="Section 1" />
          </div>
        </div>
      </div>
     
      <div className="section-divider"></div>

      <div className="footer">
  <div className="footer-container">
    <div className="footer-content">
      <p className="footer-item h-semibold">Moksha IITGN</p>
      <p className="footer-item h-semibold">
        Block 6, Indian Institute of Technology Gandhinagar <br /> Palaj, Gandhinagar, Gujarat - 382355
      </p>
      <div className="footer-item btn">
        <p className="h-semibold">
          <a rel="noreferrer" href="mailto:moksha@iitgn.ac.in" target="_blank">
          moksha@iitgn.ac.in
          </a>
        </p>
      </div>
      
       
     </div> 
    <div className="footer-logo">
      <img src={iitgnlogo} alt="IITGN Logo" />
    </div>
  </div>
</div>


    </>
  );
};

export default Home;

