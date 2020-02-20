import React, { Component } from 'react';
import Cell from "./Cell"

var rowData = [
    {
        name: "A",
        sname: "Eclair",
        price: "$0.87"
    },
    {
        name: "D",
        sname: "Eclair",
        price: "$0.87"
    },
    {
        name: "c",
        sname: "Eclair",
        price: "$0.87"
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
        if (this.state.sortElement != null) {
            newSortedData = rowData.sort(function (a, b) {
                var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.toUpperCase(); // ignore upper and lowercase
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
                <tr>{cellData}</tr>
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
        let tableHtml=this.getRowHtml();
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
                        <th><i class="material-icons">swap_vert</i>Item Name</th>
                        <th> <i class="material-icons">swap_vert</i>Item Price</th>
                    </tr>
                </thead>

                <tbody>
                    {tableHtml}
                </tbody>
            </table>
        )
    }
}

