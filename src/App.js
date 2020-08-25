import React, { Component } from "react";
import "./App.css";
import NetWorthCalc from "./Components/NetWorthCalc";

class App extends Component {
  state = {
    netWorth: "10000",
  };

  // Sets the netWorth state
  setNetWorth = (netWorthValue) => {
    
    this.setState({
      netWorth: netWorthValue,
    });
  };

  render() {
    return (
      <div className="App">
        <p style={this.Networthstyle}>{`Net Worth : ${this.state.netWorth}$`}</p>
        <NetWorthCalc setNetWorth={this.setNetWorth} />
      </div>
    );
  }

  Networthstyle = {
    textAlign: "center",
    fontSize: "100px",
  }
}

export default App;
