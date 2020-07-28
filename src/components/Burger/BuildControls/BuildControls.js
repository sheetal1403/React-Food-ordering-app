import React from 'react';
import BuildSingleControl from '../BuildControls/BuildSingleControl/BuildSingleControl';
import classes from './BuildControls.css';

const buildControls = (props) => {

    const controls = Object.keys(props.ingredients).map((ingredKey) => {
        return <BuildSingleControl label={ingredKey}></BuildSingleControl>
    })

    return (
        <div className={classes.BuildControls}>
            {controls}
        </div>
    );

};

export default buildControls;