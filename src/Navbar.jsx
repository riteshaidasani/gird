import React, { Component } from 'react';
export default class Navbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="navbar-fixed teal lighten-2 ">
                <nav>
                    <div class="nav-wrapper  striped teal lighten-2">
                        <a href="#!" class="brand-logo">Logo</a>
                        <ul class="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}