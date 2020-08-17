import React from 'react';
import classes from './AuthInput.css';

const authInput = (props) => {
    let inputElement = null;
    let classNames = [classes.AuthInput]
    if(props.inValid && props.touched){
        classNames.push(classes.Invalid);
    }

    switch(props.elementType){
        case ('input'):
            inputElement = <input {...props.elementConfig} className={classNames.join(' ')} value={props.value} onChange={props.changed}/>;
            break;
        case ('textarea'):
            inputElement = <textarea {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        default:
            inputElement = <input/>;
    }


    return(
        <div>
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
};

export default authInput