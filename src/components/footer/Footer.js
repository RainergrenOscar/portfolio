import React from 'react'
import classes from "./Footer.module.scss"
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footer__content}>
                <div className={classes.footer__content__left}>
                    <p>Developed by <span>Oscar Rainergren.</span></p>
                    <p>Built with <span>React. </span>Styled with <span>SASS. </span> Created with <span>Love. </span></p>
                </div>
                <div className={classes.footer__content__right}>
                    <a href="https://github.com/RainergrenOscar"><BsGithub /></a>
                    <a href="https://www.instagram.com/oscarrainergren/"><BsInstagram className={classes.footer__content__right__link}/></a>
                    <a href="https://www.linkedin.com/in/oscar-rainergren/"><BsLinkedin/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
