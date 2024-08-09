import React from 'react';
import contactus from '../imag/contactus.jpg';


function ContactUs() {
  return (
      <>
        {/* <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form> */}
        <div>
         <div className="home-container">
      <div className="overlay"></div>
      <div className="content">
        <h1>Contact Us...</h1>
       
      </div>
      
      <img src={contactus} alt="Home background" className="background-img" />
    </div>
    </div>
        </>

  );
}

export default ContactUs;
