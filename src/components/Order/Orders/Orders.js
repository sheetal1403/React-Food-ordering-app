import React, {Component }  from 'react'
import SingleOrder from './SingleOrder/SingleOrder';


class Orders extends Component{
    render(){
        return(
            <div>
                <SingleOrder/>
                <SingleOrder/>
                <SingleOrder/>
                <SingleOrder/>
            </div>
            
        )
    }
}

export default Orders;