/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classes from './Footer.css';

const footer = props => (
    <div className={classes.Footer}>
        <p>&copy; XYZ@2020</p>
        <div className={classes.Contact}>
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
        </div>
    </div>
)

export default footer;