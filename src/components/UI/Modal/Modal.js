import React from 'react'
import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxillary/Auxillary';


const modal = (props) => (
    <Aux>
        <Backdrop show={props.showModal} clicked={props.closeModal}></Backdrop>
        <div 
            className={classes.Modal}
            style={{
                transform: props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.showModal ? 1 : 0
                }}>
            {props.children}
        </div>
    </Aux>
    
);

export default modal;