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
            sortElement: null,
            method: true
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

                return 0;
            });
            rowData = newSortedData;
            if (this.state.method == false) {
                rowData.reverse();
            }
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
        if (sortElement == this.state.sortElement) {
            this.setState({
                method: !this.state.method
            })
        }
        else {
            this.setState({
                sortElement: sortElement
            })
        }
    }
    render() {
        let tableHtml = this.getRowHtml();


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

