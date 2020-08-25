import React, { Component } from "react";
import "./App.css";
import NetWorthCalc from "./Components/NetWorthCalc";

class App extends Component {
  state = {
<<<<<<< HEAD
    netWorth: "10000",
=======
    netWorth: 10000,
>>>>>>> e7fd628d5c99672174fba65e3679befaf6dbfe62
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
