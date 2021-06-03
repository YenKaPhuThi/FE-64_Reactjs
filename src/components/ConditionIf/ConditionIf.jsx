import React, { Component } from "react";

export default class ConditionIf extends Component {
  isLogin = true;
  userName = "Yen Ka";

  // renderUserName = () => {
  //   if (this.isLogin) {
  //     return <div>Welcome {this.userName}</div>;
  //   }

  //   return <button type="button" class="btn btn-primary">Login</button>;
  // };

  render() {
    return (
      <div>
        {this.isLogin ? (
          <div>Welcome {this.userName}</div>
        ) : (
          <button type="button" class="btn btn-primary">
            Login
          </button>
        )}{" "}
      </div>
    );
  }
}
