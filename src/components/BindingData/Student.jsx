import React, { Component } from "react";

export default class Student extends Component {
  hotTen = "Yen";
  class = "FE 64";

  arrangeLevel = (type) => {
    return (
      <div>
        <p>{type}</p>
        <p>{this.hotTen}</p>
        <p>{this.class}</p>
      </div>
    );
  };

  render() {
    let point = 10;
    return (
      <div>
        Student: {point} {this.arrangeLevel("Giỏi")}
      </div>
    );
  }
}
