import React from 'react'
import LandingPage from '../../pages/LandingPage'
import Footer from '../footer/Footer'

import Navbar from "../navbar/Navbar"
import classes from "./Layout.module.scss"

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <div className={classes.container}>
                <div className={classes.container__content}>{children}</div>
            </div>
            <Footer/>
        </>
    )
}

export default Layout
