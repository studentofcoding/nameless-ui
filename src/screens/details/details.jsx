import React, { Component } from "react";
import Header from "../../components/header/header";
import Take from "../../screens/details/take/take";
import Give from "../../screens/details/give/give";
import "./details.css";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      takeFeedback: this.props.location.state.takeFeedback || false,
    };
  }

  lpStyle = {
    background: 'url("/assets/images/bg.png")',
    backgroundPosition: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundColor: "#FAFAFA",
    overflowX: "hidden",
    minWidth: "100vw",
    minHeight: "100vh",
    userSelect: 'none'
  };

  render() {
    return (
      <div className="details-page" style={this.lpStyle}>
        <Header />
        <div className="details-container">
          <div className="floating-card">
            {this.state.takeFeedback ? <Take /> : <Give />}
          </div>
        </div>
      </div>
    );
  }
}
