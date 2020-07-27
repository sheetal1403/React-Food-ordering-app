import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';

const layout = (props) => {
    return (
        <Aux>
            <div>Toollbar, navigation</div>
            <main>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout;