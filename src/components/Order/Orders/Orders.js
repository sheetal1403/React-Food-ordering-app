import React, {Component }  from 'react'
import SingleOrder from './SingleOrder/SingleOrder';
import Spinner from '../../UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';


class Orders extends Component{


    componentDidMount(){

        this.props.onFetchOrders(this.props.token);
        // this.setState({loading: true});
        // axios.get('/orders.json')
        //     .then(response => {
        //         console.log(response.data);
        //         this.setState({
        //             orders: response.data,
        //             loading: false
        //         })
        //     })
        //     .catch(e => {
        //         console.log(e);
        //         this.setState({error: true});
        //     });
    }

    render(){
        let orders = this.props.error ? <p style={{textAlign: 'center'}}>Orders could not be loaded</p> : <Spinner/>
        if(this.props.orders.length !== 0){
            orders = Object.keys(this.props.orders).map(orderKey => {
                return <SingleOrder 
                        key={orderKey} 
                        price={this.props.orders[orderKey].totalPrice}
                        ingredients={this.props.orders[orderKey].ingredients}/>
            })
        }
        return(
            <div>
                {orders}
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return{
        orders: state.order.orders,
        loading: state.order.loading,
        error: state.order.error,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onFetchOrders: (token) => dispatch(actions.fetchOrders(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));