import React, { Component } from "react";

export default class Event extends Component {
  showMessage = (message) => {
    alert(message);
  };

  render() {
    let message = "hi Chipu";
    return (
      // <button
      //   type="button"
      //   className="btn btn-primary"
      //   onClick={this.showMessage.bind(this, message)}
      // >
      //   Show message
      // </button>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => {
          this.showMessage(message);
        }}
      >
        Show message
      </button>
    );
  }
}
