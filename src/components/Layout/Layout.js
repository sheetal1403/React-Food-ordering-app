import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component  {

    state = {
        showSideDrawer: true
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
        return (
            <Aux>
                
                <SideDrawer 
                    showSideDrawer = {this.state.showSideDrawer} 
                    open={this.openSideDrawerHandler}
                    close={this.closeSideDrawerHandler}></SideDrawer>
                <Toolbar open={this.openSideDrawerHandler}></Toolbar>
                <main  className = {classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
    
}

export default Layout;