import classes from "./LandingPage.module.scss"
import GuyInChair from "../img/peep-54.svg"
import GuyInChair2 from "../img/peep-47.svg"
import ProfilePicture from "../img/Profile.png"
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { CgChevronRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import HighlightCards from "../components/cards/HighlightCards";




const LandingPage = () => {
    return (
        // Presentation section
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
                {/* Facts section */}
                <div className={classes.section__container__info}>
                    <div className={classes.section__container__info__about}> 
                        <h2>About</h2>
                        <p>I am a future Front-End developer who is currently studying att KYH in Stockholm. Lorem ipsum I am a future Front-End developer who is currently studying att KYH in Stockholm. Lorem ipsum I am a future Front-End dolm.uture Front-End developer who is currently studying att KYH in Stockholm. Lorem ipsum I am a f</p>
                    </div>
                    <div className={classes.section__container__info__interest}> 
                        <h2>Interest</h2>
                        <p><span style={{color: "#ff6767"}}>Coding,</span>  Music,  Gaming,  Making pasta (particularly ravioli),  <span style={{color: "#fed393"}}>Eating my Pasta,</span>  Etcetra</p>
                    </div>
                    <div className={classes.section__container__info__socials}>
                        <h2>Socials</h2>
                        <div className={classes.section__container__info__socials__items}>
                            <BsGithub />
                            <p>@Rainergrenoscar</p>
                        </div>
                        <div className={classes.section__container__info__socials__items}>
                            <BsLinkedin />
                            <p>@Oscar-rainergren</p>
                        </div>
                        <div className={classes.section__container__info__socials__items}>
                            <BsInstagram />
                            <p>@Oscarrainergren</p>
                        </div>
                    </div>
                    <div className={classes.section__container__info__button}> 
                        <Link to="/resume"><button>Resume<CgChevronRight className={classes.section__container__info__button__arrow}/></button></Link>
                    </div>
                  
                <div className={classes.section__container__info__projects}>
                    <h2>Latest projects</h2>
                    
                        <HighlightCards />
                    </div>
                </div> 
            </div>
        </section>
        
    )
}

export default LandingPage
