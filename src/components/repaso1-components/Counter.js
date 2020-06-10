import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props)
        this.state ={
            actualNumber:0
        }
        this.increment =this.increment.bind(this)
    }
    render() {
        return (
            <div>
              <p>counter: {this.state.actualNumber} 
                <button onClick={this.increment}>+</button>
              </p>
            </div>
        );
    }
    increment =()=>{
        this.setState(
            {
                actualNumber:this.state.actualNumber +1
            }
        )
    }
}

export default Counter;