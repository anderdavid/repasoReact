import React, { Component } from 'react';

class Clock extends Component {
    constructor(props){
        super(props)
        this.state ={ date:new Date()}
    }
    componentDidMount(){
        this.timerID=setInterval(() => this.tick(),1000);
    }
    componentWillMount(){
        clearInterval(this.timerID)
    }
    render() {
        return (
            <div className="componente">
                <h3>Clock</h3>
                <p>time: {this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    }

    tick =()=>{
        console.log('tick()')
        this.setState(
            {date:new Date()}
        )
    }
}

export default Clock;