import React, { Component } from "react";

export default class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let result;
        if (
            this.props.title === "Computer" &&
            this.props.result !== "tie" &&
            this.props.result !== ""
        ) {
            result = this.props.result === "win" ? "lose" : "win";
        } else {
            result = this.props.result;
        }
        return (
            <div className={`box ${result}`}>
                <h1>{this.props.title}</h1>
                <img
                    className="item-img"
                    src={this.props.item && this.props.item.img}
                />
                <h2>{result}</h2>
            </div>
        );
    }
}
