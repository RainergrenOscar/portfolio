import { Link } from "react-router-dom"
import classes from "./Cards.module.scss"
import { HighlightProjects } from "./Data"


const HighlightCards = () => {
        return (
        <div className={classes.container}>
            {HighlightProjects.map((projects) => (
                <div  className={classes.container__card} key={projects.id}>
                    <div  className={classes.container__card__image}>
                        <img className={classes.container__card__image__item} src={projects.image} alt="" />
                    </div>
                    <div className={classes.container__card__text}>
                        <div><h1>{projects.title}</h1></div>
                          <div><p>{projects.description.substring(0,100)}...</p></div>  
                    </div>
                </div>
        ))}
        </div>
    )
}

export default HighlightCards
