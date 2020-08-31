import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Footer from '../Navigation/Footer/Footer';
import { connect } from 'react-redux';


class Layout extends Component  {

    state = {
        showSideDrawer: false
    }

    closeSideDrawerHandler = () => {
        const updatedState = false;
        this.setState({showSideDrawer: updatedState});
    }

    openSideDrawerHandler = () => {
        const updatedState = true;
        this.setState({showSideDrawer: updatedState});
    }
 
    render(){

        let footer = this.props.isAuthenticated && <Footer></Footer>

        return (
            <Aux>
                
                <SideDrawer 
                    showSideDrawer = {this.state.showSideDrawer} 
                    open={this.openSideDrawerHandler}
                    close={this.closeSideDrawerHandler}
                    isAuth={this.props.isAuthenticated}></SideDrawer>
                <Toolbar open={this.openSideDrawerHandler} isAuth={this.props.isAuthenticated}></Toolbar>
                <main  className = {classes.Content}>
                    {this.props.children}
                </main>
                {footer}
            </Aux>
        )
    }
    
}

const mapStateToProps = state => {
    return{
        isAuthenticated : state.auth.token === null ? false : true
    }
}

export default connect(mapStateToProps)(Layout);