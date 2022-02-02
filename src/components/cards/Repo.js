import React, { useEffect,useState } from 'react'
import classes from "./Repo.module.scss"
import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';



const Repo = (props) => {
    const [repo, setRepo] = useState([])

    useEffect(() => {
        axios.get("https://api.github.com/users/rainergrenoscar/repos")
            .then((res) => {
            setRepo(res.data)
            })
        console.log(repo)
    }, []);



    useEffect(() => {
    Aos.init({duration: 1000 });
     }, []);
        return (
        <div className={classes.container} >
            {repo.map((projects) => (
               <a href={projects.html_url} target="_blank"> <div  className={classes.container__card} key={projects.id} data-aos="fade-up" >
                    <div  className={classes.container__card__image} data-aos="fade-up">
                         <h3 className={classes.container__card__image__text}>{projects.name}</h3>
                    </div>
                    <div className={classes.container__card__text}data-aos="fade-up" >
                        <div>
                            <p>{projects.description}</p>
                        </div>  
                    </div>  
                </div>
                </a>
        ))}
        </div>
    )
}

export default Repo
