import React, {Component }  from 'react'
import SingleOrder from './SingleOrder/SingleOrder';
import Spinner from '../../UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';


class Orders extends Component{

    state = {
        loading: false,
        orders: null,
        error: false
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
            .catch(e => {
                console.log(e);
                this.setState({error: true});
            });
    }

    render(){
        let orders = this.state.error ? <p style={{textAlign: 'center'}}>Orders could not be loaded</p> : <Spinner/>
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

export default withErrorHandler(Orders, axios);