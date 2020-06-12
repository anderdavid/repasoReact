import React from 'react';
import {connect} from 'react-redux'
import {buyIceCream} from '../../redux'

function IceCreamContainer(props) {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <h2>IceCream container</h2>
            <p>NumOfIceCream:{props.numOfIceCream}</p>
            <button onClick={props.buyIceCream}>buy IceCream</button>
        </div>

    );
}

const mapStateToProps=state=>{
    return{
        numOfIceCream:state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        buyIceCream:()=>dispatch(buyIceCream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer)