import React from 'react'
import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.label}>
                <h2>Weather App</h2>
            </div>
        </div>
    )
}

export default Header
