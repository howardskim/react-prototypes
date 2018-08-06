import React, {Component} from 'react';
import DateObject from './time';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date()
        }
    }

    tick(){
        this.setState({
            time: new Date()
        })
    }
    componentDidMount(){
        setInterval(function(){
            this.tick()
        }, 1000);
    }

    render(){
        return (
            <div>
                <h1>The time is: {this.state.time.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default Clock;