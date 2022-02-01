import React from 'react';
import { Link } from 'react-router-dom';
import GIF from "../img/gif.gif"
import classes from "./PageNotFound.module.scss"



const PageNotFound = () => {
    return <section className={classes.section}>
        <div className={classes.section__container}>
            <img src={GIF} alt="" />
            <Link to="/"><button>Take me back 🏃‍♂️ </button></Link>
        </div>
    </section>;
};

export default PageNotFound;
