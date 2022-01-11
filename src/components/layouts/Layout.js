import React from 'react'
import Navbar from "../navbar/Navbar"
import classes from "./Layout.module.scss"

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <div className={classes.container}>{children}</div>
        </>
    )
}

export default Layout
