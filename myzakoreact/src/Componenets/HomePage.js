import React, { Component } from "react";
import "./HomePage.css";
export default class HomePage extends Component {
  state = {
    count: 0,

    
  };

  handleOk = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleMuns = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };

  handleReset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="h1">Funksiyalar</h1>

        <div className="row">
          <div className="col">
            <div className="card">
              <h3>Count: {this.state.count}</h3>
              <button onClick={this.handleMuns}>count -</button>
              <button onClick={this.handleReset}>Reset</button>
              <button onClick={this.handleOk}>count +</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
