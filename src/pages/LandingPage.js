import classes from "./LandingPage.module.scss"
import GuyInChair from "../img/desktopboy.svg"


const LandingPage = () => {
    return (
        <section className={classes.section}>
            <div className={classes.section__container}>
                <div className={classes.section__container__item}>
                    <img src={GuyInChair} className={classes.section__container__item__img} alt="Guy sitting at computer table" />
                    <div className={classes.section__container__item__text}><p>Hi! I am a future Front-End Developer who is currently studying in Stockholm</p></div>
                </div>

            </div>
        </section>
        
            

    )
}

export default LandingPage
