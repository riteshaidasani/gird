import React, { Component } from "react"

export default class Sidebar extends Component {
    render() {
        return (
            <div id="sideNav" className="deep-purple accent-2" style={{
                height: "calc(100vh - 4rem)", width: "60px", position: "fixed", borderRight: "1px solid #e0e0e0", top: "4rem", left: "0px", padding: "4px"
            }}>
                <div class="divider"></div>
                <p>Stuff</p>
                <div class="divider"></div>
                <p>Stuff</p>
                <div class="divider"></div>
                <p>Stuff</p>
                <div class="divider"></div>
                <p>Stuff</p>
                <div class="divider"></div>
                <p>Stuff</p>
                <div class="divider"></div>
                <p>Stuff</p>
                <div class="divider"></div>
                <p>Stuff</p>
                <div class="divider"></div>
                <p>Stuff</p>
                <div class="divider"></div>
                <p>Stuff</p>

            </div >
        )
    }
} 