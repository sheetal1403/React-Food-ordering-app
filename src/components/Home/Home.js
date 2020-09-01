import React from 'react';
import classes from './Home.css';
import { Link } from 'react-router-dom'

const home = props => (
    <div className={classes.HomeContainer}>
        <div className={classes.Home}>
            <h1>Create your own food!</h1>
            <div>
                <Link to="/burger"><button className={classes.BurgerButton}>Burger</button></Link>
            </div>
        </div>
    </div>
    
);

export default home;