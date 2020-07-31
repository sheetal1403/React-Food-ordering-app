import React, { Component } from 'react'
import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxillary/Auxillary';


class Modal extends Component{

    shouldComponentUpdate(nextProps, nextState){
        // if(nextProps.showModal !== this.props.showModal){
        //     return true;
        // }
        //     return false;
        return (nextProps.showModal !== this.props.showModal);
    }

    componentWillUpdate() {
        console.log('Modal update')
    }

    render(){
        return (
            <Aux>
                <Backdrop show={this.props.showModal} clicked={this.props.closeModal}></Backdrop>
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.showModal ? 1 : 0
                        }}>
                    {this.props.children}
                </div>
            </Aux>
            
        );
    }
} 

export default Modal;