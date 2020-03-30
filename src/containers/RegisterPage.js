import React from "react";
import uuidv1 from "uuid/v1";
import AxiosInstance from "../config/axiosConfig";
import "./RegisterPage.css";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuidv1(),
      username: "",
      password: ""
    };
  }

  usernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  passwordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  onSubmit = () => {
    const userObject = {
      id: this.state.id,
      username: this.state.username,
      password: this.state.password
    };
    AxiosInstance.post("/users/register", userObject)
      .then(res => {
        alert("Account Created! Please log in");
        console.log(res.data);
      })
      .catch(error => {
        alert("Wrong entry");
        console.log(error);
      });
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <div className="login-form">
        <div className="username">
          Desired Username:{" "}
          <input
            type="text"
            value={this.state.username}
            onChange={this.usernameChange}
          />
        </div>
        <br />
        <div className="password">
          Desired Password:{" "}
          <input
            type="password"
            value={this.state.password}
            onChange={this.passwordChange}
          />
        </div>
        <br />
        <button onClick={this.onSubmit}>Register User</button>
      </div>
    );
  }
}

export default RegisterPage;
