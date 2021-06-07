import React, { Component } from "react";

export default class Student extends Component {
  // Properties
  firstName = "Yen";
  lastName = "Ka Phu";
  middleName = "Thi"

  // Method
  arrangeStudentLevel (point) {
    let result = '';
    if (8 < point <= 10) {
      result = "Excellence"
    } else if (6 < point <= 8) {
      result = "Good"
    } else if (0 <= point <= 6) {
      result = "Bad"
    } else {
      result = "Not valid point"
    }
    return result;
  }


  render() {
    let point = 10;
    return (
      <div>
        <h3>Student information</h3>
        <p>Full name: {this.firstName + " " + this.lastName + " " + this.middleName}</p>
        <p>Level: {this.arrangeStudentLevel(point)}</p>
      </div>
    );
  }
}
