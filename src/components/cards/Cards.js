import React, { useEffect } from 'react'
import classes from "./Cards.module.scss"
import { ProjectsData } from "./Data"


const Cards = () => {
    
       
    return (
        <div className={classes.container}>
            {ProjectsData.map((projects) => (
                <div  className={classes.container__card} key={projects.id}>
                    <div  className={classes.container__card__image}>
                        <img className={classes.container__card__image__item} src={projects.image} alt="" />
                    </div>
                    <div className={classes.container__card__text}>
                        <div><h1>{projects.title}</h1></div>
                          <div><p>{projects.description}</p></div>  
                    </div>
                    
                </div>
        ))}
        </div>
    )
}

export default Cards
