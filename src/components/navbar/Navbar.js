import React, {useState,useEffect} from 'react'
import { BiMenuAltRight } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { MdLightbulb } from "react-icons/md";


import classes from "./Navbar.module.scss"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false) //setting state to change navbar on smaller screen
    const [size, setSize] = useState({
        width: undefined,
        height: undefined
    })
    
    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    },[])

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false)
        }
    },[size.width, menuOpen])

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p)
    }

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                
                <h2 className={classes.header__content__logo}><MdLightbulb className={classes.header__content__wiggle}/>Oscar Rainergren</h2>
            
            <nav className={`${classes.header__content__nav} ${menuOpen && size.width < 768 ? classes.isMenu : ""}`}>
                <ul>
                    <li>
                        <NavLink to="/about" onClick={menuToggleHandler}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" onClick={menuToggleHandler}>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/resume" onClick={menuToggleHandler}>Resume</NavLink>
                        </li>  
                </ul>
            </nav>
            <div className={classes.header__content__toggle}>
                    {!menuOpen ? (<BiMenuAltRight onClick={menuToggleHandler}/>) : (<AiOutlineClose onClick={menuToggleHandler}/>)}
                </div>
            </div>
        </header>
    )
}

export default Navbar
