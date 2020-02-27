import React, { Component } from 'react';
import Cell from "./Cell"

var rowData = [
    {
        name: "A",
        sname: "Oreo",
        price: "1"
    },
    {
        name: "D",
        sname: "Dairy Milk",
        price: "6"
    },
    {
        name: "c",
        sname: "Kitkat",
        price: "3"
    }
]


export default class Table extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.getRowHtml = this.getRowHtml.bind(this);
        this.state = {
            istextBox: false,
            sortElement: null
        }
    }


    getRowHtml() {
        let mappedData = [];
        let newSortedData = [];

        if (this.state.sortElement) {
            var that = this;
            newSortedData = rowData.sort(function (a, b) {
                var sortElement = that.state.sortElement;
                let nameA = a[sortElement].toUpperCase(); // ignore upper and lowercase
                let nameB = b[sortElement].toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                // names must be equal
                return 0;
            });
            rowData = newSortedData
        }

        rowData.forEach(Element => {
            let cellData = [];
            for (const key in Element) {
                cellData.push(
                    <Cell value={Element[key]} />
                )
            }

            mappedData.push(
                <tr key={Math.random()}>{cellData}</tr>
            )
        })
        return (mappedData)
    }

    handleClick(sortElement) {
        // let tableRows = this.getRowHtml(sortElement);
        this.setState({
            sortElement: sortElement
        })
    }
    render() {
        let tableHtml = this.getRowHtml();
        // if (this.state.sortElement) {
        //     tableHtml = this.getRowHtml
        // }
        // else {
        //     tableHtml = this.getRowHtml(this.state.sortElement);
        // }

        return (
            <table className="striped">
                <thead>
                    <tr>
                        <th onClick={() => this.handleClick("name")}> <i class="material-icons">swap_vert</i>Name</th>
                        <th onClick={() => this.handleClick("sname")}><i class="material-icons">swap_vert</i>Item Name</th>
                        <th onClick={() => this.handleClick("price")}> <i class="material-icons">swap_vert</i>Item Price</th>
                    </tr>
                </thead>

                <tbody>
                    {tableHtml}
                </tbody>
            </table>
        )
    }
}

