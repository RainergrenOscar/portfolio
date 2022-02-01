import React, { useState, useEffect } from 'react'
import classes from "./Contact.module.scss"
import emailjs from "emailjs-com"
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import Aos from 'aos';



const Contact = () => {
    const [email, setEmail] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); //checks if window is under 768px

    useEffect(() => {
    Aos.init({duration: 1000 });
    }, []);
    
    const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_rzew9eh', 'template_3ull0u2', e.target, 'user_MCREa0vhcI7v7wpZph9ij')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      setEmail(true)
  };
    

    
    useEffect(() => { // Removes Data aos if the screen width is less than 768 px for better phone view
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 768;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]); 
    


    return (
        <section>
            <div className={classes.container}>
                <div className={classes.container__split}>
                    <div>
                        <h1 data-aos="fade-down">Contact me.</h1>
                        <p data-aos="fade-right" >Let’s have a conversation! I’d love to hear about what you’re working on and find a way to work together.</p>
                        <div className={classes.container__split__icons} data-aos="fade-up">
                            <div className={classes.container__split__icons__hover}>
                               <a href="https://www.facebook.com/oscar.rainergren/" target="_blank"><BsFacebook  /></a> 
                            </div>
                            <div className={classes.container__split__icons__hover}>
                                <a href="https://www.linkedin.com/in/oscar-rainergren/" target="_blank"><BsLinkedin /></a>
                            </div>
                            <div className={classes.container__split__icons__hover}>
                                <a href="https://www.instagram.com/oscarrainergren/" target="_blank"><BsGithub /></a>
                            </div>
                        </div>
                       
                    </div>
                    <div>
                        <form onSubmit={sendEmail} >
                            <div className={classes.form__container}>
                                <input type="text" placeholder='Name' name='name' required data-aos={`${isMobile ? "" : "fade-down"}`}/>
                            </div>
                            <div className={classes.form__container}>
                                <input type="text" placeholder='Email' name='email' data-aos={`${isMobile ? "" : "fade-left"}`} required />
                            </div>
                            <div className={classes.form__container}>
                                <textarea placeholder='Message' name='message' data-aos={`${isMobile ? "" : "fade-right"}`} required></textarea>
                            </div>
                            <div className={classes.form__container__button} data-aos={`${isMobile ? "" : "fade-up"}`}>
                            <button type='submit' value="send" className={classes.form__container__button__center}>Send</button>
                            </div>
                        </form>
                    </div>
                </div>{!email ? "" : alert("Thanks for getting in touch with me! 🤌")}
            </div>
        </section>
        
    )
}

export default Contact

