import React from 'react'
import classes from "./Resume.module.scss"
import ResumeImage from "../img/Desktop.png"
import resume from "../img/CV.pdf"


const Resume = () => {
    return (
        <div className={classes.container}>
            <div className={classes.container__wrapper}>
            <div className={classes.container__wrapper__download}>
                <a href={resume} download><p>Download resume as PDF</p></a>
            </div>
                <img src={ResumeImage} className={classes.image_logo} alt="" />
            </div>
        </div>
    )
}

export default Resume
