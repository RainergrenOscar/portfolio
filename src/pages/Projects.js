import classes from "./Projects.module.scss"
import GuyInChair2 from "../img/peep-47.svg"
import Cards from "../components/cards/Cards"


const Projects = () => {

    return (
        <section className={classes.section}>
            <div className={classes.section__container}>
                <div className={classes.section__container__item}>
                    <img src={GuyInChair2} className={classes.section__container__item__img} alt="Guy sitting at computer table" />
                    <div className={classes.section__container__item__text}><p>Well hello there! Check out my recent works</p></div>
                </div>
                <Cards  />
            </div>
        </section>
        
    )
}

export default Projects
