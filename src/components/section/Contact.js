import React from 'react'
import { contact, section5Title, social } from '../../profile'

const Contact = () => {
    
    return (
        <div className="parallax">
                <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
                    <>
                <div className="git-head-div text-center mx-auto">
                        <h1 id="Contact" className="git-head">{section5Title}</h1>
                </div>
                </>
                <div className="container">
            <div className="git-cont row">
                <div className="col-12 col-sm-6 half">
                    <form action= "submit">
                        <input type="text" id="fname" name="firstname" placeholder="Your name" required></input>
                        <input type="mail" id="mailid" name="Email" placeholder="Email Address" required></input>
                        <input type="text" id="sub" name="Subject" placeholder="Subject" required></input>
                        <textarea id="msg" name="message" placeholder="Message" required></textarea>
                        <button style={{cursor: 'pointer'}} type="submit"><label style={{cursor: 'pointer'}} id="not-dark">Send Message</label></button>
                    </form>
                </div>
                <div className="col-12 col-sm-6 half">
                    <p className="lead">
                        {contact.pitch}        
                    </p>
                <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="inline-block">
                    {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank"  href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                    {social.github && <a title="Visit github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}
                    {social.Behance && <a title="Visit Behance profile" rel="noopener noreferrer" target="_blank" href={social.Behance}><i className="fab fa-behance"></i></a>}
                    <br/>
                </div>
                    
                </div>
                </div>
            </div>
            </div>
        </div>
           
        </div>
    )
    
}

export default Contact;

