import React, {Component }  from 'react'
import SingleOrder from './SingleOrder/SingleOrder';
import Spinner from '../../UI/Spinner/Spinner';
import axios from '../../../axios-orders';


class Orders extends Component{

    state = {
        loading: false,
        orders: null
    }

    componentDidMount(){
        this.setState({loading: true});
        axios.get('/orders.json')
            .then(response => {
                console.log(response.data);
                this.setState({
                    orders: response.data,
                    loading: false
                })
            })
            .catch(e => console.log(e));
    }

    render(){
        let orders = <Spinner/>
        if(!this.state.loading && this.state.orders !== null){
            orders = Object.keys(this.state.orders).map(orderKey => {
                return <SingleOrder 
                        key={orderKey} 
                        price={this.state.orders[orderKey].totalPrice}
                        ingredients={this.state.orders[orderKey].ingredients}/>
            })
        }
        return(
            <div>
                {orders}
            </div>
            
        )
    }
}

export default Orders;