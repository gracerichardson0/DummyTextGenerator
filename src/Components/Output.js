import React, { Component } from 'react';

class Output extends Component {
    //Takes in property which is the actual text
    constructor(props) {
        super(props);
        this.state = {
            //Whatever is passed in as a property as the value is going to go into the state value as well
            value: props.value
        }
    }

    render() {
        return (
            <div className="well output">
                {this.props.value}
            </div>
        )
    }
}

export default Output;