import React, { Component } from 'react';

class Toggle extends Component {
    constructor(props){
        super(props)
        this.state ={
            isToggleOn:false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {
                        this.state.isToggleOn?'ON':'OFF'
                    }
                </button>
            </div>
        );
    }

    handleClick =()=>{
        console.log('handleClick()')
        this.setState(
            {isToggleOn:!this.state.isToggleOn}
        )
    }
}

export default Toggle;