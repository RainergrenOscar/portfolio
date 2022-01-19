import React, { useState } from 'react'
import classes from "./Contact.module.scss"
import emailjs from "emailjs-com"
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom'



const Contact = () => {
const [email, setEmail] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('outlook', 'template_3ull0u2', e.target, 'user_MCREa0vhcI7v7wpZph9ij')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };


    return (
        <div className={classes.container}>
            <div className={classes.container__card}>
                <div className={classes.container__card__header}>
                    <h1>What are you working on?</h1>
                    <p>Let's have a conversation</p>
                </div>
                <form action="">
                    <div className={classes.container__card__split}>
                        <div className={classes.container__card__split__left}>
                            <div>
                            <label htmlFor="user_name">Name</label>
                            <input type="text" name="user_name" />
                            </div>
                            <div>
                            <label htmlFor="user_name">Phone</label>
                            <input type="text" name="user_name" />
                            </div>
                        </div>
                        <div className={classes.container__card__split__right}>

                        </div>
                    </div>
                </form>
                <div className={classes.container__card__socials}>
                    <a href='/'>
                        <div className={classes.container__card__socials__item}>
                        <BsGithub  className={classes.container__card__socials__item__img}/>
                        
                        </div>
                    </a>

                    <a href="/">
                    
                    <div className={classes.container__card__socials__item}>
                        <BsInstagram className={classes.container__card__socials__item__img}/>
                        
                        </div>
                    </a>

                    <a href="/">
                    <div className={classes.container__card__socials__item}>
                        <BsLinkedin className={classes.container__card__socials__item__img}/>
                        
                        </div>
                    </a>
                </div>
                
            </div>
        </div>
    )
}

export default Contact

