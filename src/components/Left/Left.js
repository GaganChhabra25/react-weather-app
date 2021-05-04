import React from 'react'
import classes from './Left.module.css'

function Left() {
    return (
        <section className={classes.left}>
            <p>Your city</p>
            <input type="text"/>
        </section>
    )
}

export default Left
