import classes from "./LandingPage.module.scss"
import GuyInChair from "../img/peep-54.svg"
import ProfilePicture from "../img/Profile.png"



const LandingPage = () => {
    return (
        <section className={classes.section}>
            <div className={classes.section__container}>
                <div className={classes.section__container__item}>
                    <img src={GuyInChair} className={classes.section__container__item__img} alt="Guy sitting at computer table" />
                    <div className={classes.section__container__item__text}><p>Hi! I am a future Front-End Developer who is currently studying in Stockholm</p></div>
                </div>
                <div className={classes.section__container__split}>
                    <div className={classes.section__container__split__name}>
                        <h1>Oscar Rainergren</h1>
                        <p>(Front-end Developer based in Stockholm)</p>
                    </div>
                    <div className={classes.section__container__split__img}>
                        <img src={ProfilePicture} className={classes.section__container__split__img}alt="Guy face profile picture" />
                    </div>
                </div>
            </div>
        </section>
        
            

    )
}

export default LandingPage
