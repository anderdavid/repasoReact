import React from 'react';
import {connect} from 'react-redux'
import {buycake} from '../../redux'

function TestRedux(props) {
    return (
        <div className="container">
            <h2>TestRedux</h2>
            <h3>cakeContainer</h3>
            <p>numOfCakes: {props.numOfCakes}</p>
            <button onClick={props.buycake}>buyCakes</button>
        </div>
    );
}

const mapStateToProps =state=>{
    return{
        numOfCakes:state.cake.numOfCakes
    }
}

const  mapDispatchToProps =dispatch =>{
    return{
        buycake:() =>dispatch(buycake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
(TestRedux)