import React, { Component } from "react";
import style from "./style.module.css";

class MyNewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_age: this.props.age,
    };
  }

  increaseAge = () => {
    this.setState({
      current_age: this.state.current_age + 1,
    });
  };

  render() {
    return (
      <div>
        <h2>
          {this.props.firstName} {this.props.lastName}
        </h2>
        <h3>{this.state.current_age}</h3>
        <h3>{this.props.hairColor}</h3>
        <button onClick={this.increaseAge} className={style.btn}>
          Birthday Button for {this.props.firstName}
        </button>
      </div>
    );
  }
}

export default MyNewComponent;
