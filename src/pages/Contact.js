import React, { useState } from 'react'
import classes from "./Contact.module.scss"
import emailjs from "emailjs-com"
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { IoLocationSharp,IoMail } from "react-icons/io5"
import { AiTwotonePhone } from 'react-icons/ai'




const Contact = () => {
const [email, setEmail] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ygaubbh', 'template_3ull0u2', e.target, 'user_MCREa0vhcI7v7wpZph9ij')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };


    return (
        <section className={classes.container}>
            <div className={classes.container__title}>
                <h1>CONTACT</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>

                <form onSubmit={sendEmail}>
                    <div className={classes.container__form}>
                        <label htmlFor="user_name">Name</label>
                        <input type="text" name='user_name' placeholder='Name'className={classes.container__form__element} required />
                    </div>
                    <div className={classes.container__form}>
                        <label htmlFor="user_lastname">Lastname</label>
                        <input type="text" name='user_lastname' placeholder='Lastname'className={classes.container__form__element} required/>
                    </div>
                    <div className={classes.container__form}>
                        <label htmlFor="user_mail">Mail</label>
                        <input type="text" name='user_mail' placeholder='Mail'className={classes.container__form__element}required />
                    </div>
                    <div className={classes.container__form}>
                        <label htmlFor="user_telephone">Tel</label>
                        <input type="text" name='user_telephone' placeholder='Phonenumber'className={classes.container__form__element} required />
                    </div>
                    <div className={classes.container__form__full}>
                        <label htmlFor="user_message">Message</label>
                        <textarea type="text-area" name='user_message' placeholder="Message"className={classes.container__form__full__textarea} required/>
                    </div>
                    <div className={classes.container__submit}>
                        <button type='submit' value="Send">Send</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact

