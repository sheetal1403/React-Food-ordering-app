import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
        return(
            <div>
                <div style={{width: '100%', margin: 'auto'}}>
                    <Burger addOns={props.addOns}/>
                    <Button btnType="Success" clicked>Continue</Button>
                    <Button btnType="Danger" clicked>Cancel</Button>
                </div>

                
                
               
                
                
            </div>
        );
};

export default checkoutSummary;