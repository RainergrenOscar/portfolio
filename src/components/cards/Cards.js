import React, { useEffect } from 'react'
import classes from "./Cards.module.scss"
import { ProjectsData } from "./Data"
import Aos from 'aos';
import 'aos/dist/aos.css';



const Cards = () => {
    useEffect(() => {
    Aos.init({duration: 1000 });
     }, []);
        return (
        <div className={classes.container} >
            {ProjectsData.map((projects) => (
                <div  className={classes.container__card} key={projects.id} data-aos="fade-up" >
                    <div  className={classes.container__card__image} data-aos="fade-up">
                       <a href={projects.link} target="_blank"> <img className={classes.container__card__image__item} src={projects.image} title="GO TO PROJECT"  /></a>
                    </div>
                    <div className={classes.container__card__text}data-aos="fade-up" >
                        <div><h1>{projects.title}</h1></div>
                          <div><p>{projects.description}</p></div>  
                    </div>
                    
                </div>
        ))}
        </div>
    )
}

export default Cards
