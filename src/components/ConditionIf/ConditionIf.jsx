import React, { Component } from "react";

export default class ConditionIf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      userName: "",
    };
  }

  // renderUserName = () => {
  //   if (this.isLogin) {
  //     return <div>Welcome {this.userName}</div>;
  //   }

  //   return <button type="button" class="btn btn-primary">Login</button>;
  // };

  login = () => {
    this.setState(
      {
        isLogin: true,
        userName: "Yen ka",
      },
      () => {
        console.log(this.state.isLogin, this.state.userName);
      }
    );
  };

  logout = () => {
    this.setState(
      {
        isLogin: false,
        userName: "",
      },
      () => {
        console.log(this.state.isLogin, this.state.userName);
      }
    );
  };

  render() {
    return (
      <div>
        {this.state.isLogin ? (
          <div>
            Welcome {this.state.userName}{" "}
            <button type="button" class="btn btn-danger" onClick={this.logout}>
              Logout
            </button>
          </div>
        ) : (
          <button type="button" class="btn btn-primary" onClick={this.login}>
            Login
          </button>
        )}{" "}
      </div>
    );
  }
}
