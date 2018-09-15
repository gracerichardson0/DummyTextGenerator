import React, { Component } from 'react';

class Select extends Component {
    //Takes in property which is the actual text
    constructor(props) {
        super(props);
        this.state = {
            //Whatever is passed in as a property as the value is going to go into the state value as well
            value: props.value
        }
    }

    onChange = (e) => {
        this.setState({ value: e.target.value }, function () {
            this.props.onChange(this.state.value);
        });
    }

    render() {
        return (
            <div>
                <select className="form-control" onChange={this.onChange} >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>
        );
    }
}

export default Select; 