import React from 'react'
import classes from './Logo.module.css'
import burgerLogo from '../../assests/images/burger-logo.png'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt='Burger' />
    </div>
)

export default logo