import React, {Component} from "react";
import update from "immutability-helper";
import math from "mathjs";

export default class Button extends Component {
  render() {
    return (
      <div
        onClick={this.props.onClick}
        className="Button"
        data-size={this.props.size}
        data-value={this.props.value}
        >
        {this.props.label}
      </div>
    );
  }
  calculateOperations = () => {
    let result = this.state.operations.join("");
    if (result) {
      result = math.eval(result);
      result = math.format(result, { precision: 14 });
      result = String(result);
      this.setState({
        operations: [result]
      });
    }
  };

  handleClick = e => {
    const value = e.target.getAttribute("data-value");
    switch (value) {
      case "clear":
        this.setState({
          operations: []
        });
        break;
      case "equal":
        this.calculateOperations();
        break;
      default:
        const newOperations = update(this.state.operations, {
          $push: [value]
        });
        this.setState({
          operations: newOperations
        });
        break;
    }
  };
}
