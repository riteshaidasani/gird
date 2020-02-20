import React, { Component } from 'react';


export default class Cell extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
        this.transition = this.transition.bind(this);
        this.state = {
            value: this.props.value ? this.props.value : "",
            istextBox: false
        }
    }

    onChange(e) {
        return (
            this.setState({
                value: e.target.value
            })
        )
    }

    transition() {
        this.setState({
            istextBox: !this.state.istextBox
        })

    }

    getCellHtml() {
        if (this.state.istextBox) {
            return (
                <input type="text" onChange={this.onChange} onBlur={this.transition} value={this.state.value} />
            )

        }

        else {
            return (<td onDoubleClick={ this.transition}>{this.state.value}</td>)
        }
    }


    render() {
        return (
            this.getCellHtml()
        )
    }
}

