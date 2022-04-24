import React, { Component } from "react";
// import "./HomePage.css";
import globs from "./../img/pexels-pixabay-302743.jpg";
import { Button, Card, Container, Row } from "react-bootstrap";
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

          <Container>
            <Row>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={globs} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
