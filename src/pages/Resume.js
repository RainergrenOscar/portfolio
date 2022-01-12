import React from 'react'
import classes from "./Resume.module.scss"
import ResumeImage from "../img/Desktop.png"

const Resume = () => {
    return (
        <div className={classes.container}>
            <img src={ResumeImage} className={classes.image_logo} alt="" />
        </div>
    )
}

export default Resume
