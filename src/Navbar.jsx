import React, { Component } from 'react';
export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loader: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loader: false
            })
        }, 2000);
    }

    render() {
        let loader;
        if (this.state.loader) {
            loader = <div class="progress light-blue lighten-5" style={{ zIndex: "1", top: "-9px" }}>
                <div class="indeterminate deep-purple accent-2"></div>
            </div>
        }
        return (
            <div>
                <div class="navbar-fixed" style={{ backgroundColor: "#F6F0EF" }} >
                    <nav>
                        <div class="nav-wrapper" style={{ backgroundColor: "#F6F0EF" }} >
                            <a href="#!" class="brand-logo">Logo</a>

                        </div>
                    </nav>
                </div>
                {loader}

            </div>
        )
    }
}