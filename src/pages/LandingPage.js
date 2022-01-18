import classes from "./LandingPage.module.scss"
import GuyInChair from "../img/peep-54.svg"
import ProfilePicture from "../img/Profile.png"
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { CgChevronRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { HighlightProjects } from "../components/cards/Data";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";




const LandingPage = () => {
    useEffect(() => {
    Aos.init({duration: 1000 });
     }, []);
    return (
        // Presentation section
        <section className={classes.section}>
            <div className={classes.section__container}>
                <div className={classes.section__container__item}>
                    <img src={GuyInChair} className={classes.section__container__item__img}  alt="Guy sitting at computer table" />
                    <div className={classes.section__container__item__text}><p>Hi! I am a future Front-End Developer who is currently studying in Stockholm</p></div>
                </div>
                <div className={classes.section__container__split}>
                    <div className={classes.section__container__split__name} >
                        <h1>Oscar Rainergren</h1>
                        <p>(Front-end Developer based in Stockholm)</p>
                    </div>
                    <div className={classes.section__container__split__img} >
                        <img src={ProfilePicture} className={classes.section__container__split__img}alt="Guy face profile picture" />
                    </div>
                </div>

                {/* Facts section */}
                <div className={classes.section__container__info} >
                    <div className={classes.section__container__info__about} data-aos="fade-up" > 
                        <h2>About</h2>
                        <p>I am a future Front-End developer who is currently studying att KYH in Stockholm. Lorem ipsum I am a future Front-End developer who is currently studying att KYH in Stockholm. Lorem ipsum I am a future Front-End dolm.uture Front-End developer who is currently studying att KYH in Stockholm. Lorem ipsum I am a f</p>
                    </div>
                    <div className={classes.section__container__info__interest} data-aos="fade-up" > 
                        <h2>Interest</h2>
                        <p><span style={{color: "#ff6767"}}>Coding,</span>  Music,  Gaming,  Making pasta (particularly ravioli),  <span style={{color: "#fed393"}}>Eating my Pasta,</span>  Etcetra</p>
                    </div>

                    {/* Social media section */}
                    <div className={classes.section__container__info__socials} data-aos="fade-up">
                        <h2>Socials</h2>
                        <div className={classes.section__container__info__socials__items}>
                            <BsGithub className={classes.section__container__info__socials__items__symbol} />
                            <p>@Rainergrenoscar</p>
                        </div>
                        <div className={classes.section__container__info__socials__items}>
                            <BsLinkedin className={classes.section__container__info__socials__items__symbol} />
                            <p>@Oscar-rainergren</p>
                        </div>
                        <div className={classes.section__container__info__socials__items}>
                            <BsInstagram className={classes.section__container__info__socials__items__symbol}/>
                            <p>@Oscarrainergren</p>
                        </div>
                    </div>
                    <div className={classes.section__container__info__button} data-aos="fade-up"> 
                        <Link to="/resume"><button>Resume<CgChevronRight className={classes.section__container__info__button__arrow}/></button></Link>
                    </div>

                  {/* Latest card gets data from data.js file */}
                <div className={classes.section__container__info__projects} data-aos="fade-up">
                        <h2>Latest projects</h2>    
                        
                        <div className={classes.container}>
                            {HighlightProjects.map((projects) => (
                                <div className={classes.container__card} key={projects.id}>
                                    <div className={classes.container__card__image}>
                                        <img className={classes.container__card__image__item} src={projects.image} alt="" />
                                    </div>
                                    <div className={classes.container__card__text}>
                                        <div><h1>{projects.title}</h1></div>
                                        <div><p>{projects.description.substring(0, 100)}...</p></div>
                                    </div>
                                </div>
                            ))}
                    </div>  </div>
                </div> 

            </div>
        </section>
        
    )
}

export default LandingPage
