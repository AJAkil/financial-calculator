import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";

export class NetWorthCalc extends Component {
  state = {
    asset1: null,
    asset2: null,
    asset3: null,
    asset4: null,
    asset5: null,

    liab1: null,
    liab2: null,
    liab3: null,
    liab4: null,
    liab5: null,
  };

  static propTypes = {
    setNetWorth: PropTypes.func.isRequired,
  };

  // Function to handle the change of value for the forms
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle the submit of the forms
  onSubmit = (e) => {
    e.preventDefault();

    if (
      this.state.asset1 === null ||
      this.state.asset2 === null ||
      this.state.asset3 === null ||
      this.state.asset4 === null ||
      this.state.asset5 === null ||
      this.state.liab1 === null ||
      this.state.liab2 === null ||
      this.state.liab3 == null ||
      this.state.liab4 === null ||
      this.state.liab5 === null
    ) {
      alert("Please Do not leave any place empty!");
    } else {
      let netWorth = 0;

      for (const [key, value] of Object.entries(this.state)) {
        key.startsWith("a")
          ? (netWorth += parseInt(value))
          : (netWorth -= parseInt(value));
      }

      // passing the value up
      this.props.setNetWorth(netWorth);

      this.controller = true;
    }
  };

  render() {
    return (
      <div className="form-container">
        <form className="form" onSubmit={this.onSubmit}>
          <div className="left-form">
            <h1>Assets</h1>
            <label htmlFor="RealEstate ">Real Estate $</label>
            <input
              name="asset1"
              type="number"
              placeholder="10000$"
              value={this.state.asset1}
              onChange={this.onChange}
            ></input>
            <label htmlFor="SavingAcc">Saving Accounts $</label>
            <input
              name="asset2"
              type="number"
              placeholder="10000$"
              value={this.state.asset2}
              onChange={this.onChange}
            ></input>
            <label htmlFor="Retirement">Retirement Accounts $</label>
            <input
              name="asset3"
              type="number"
              placeholder="10000$"
              value={this.state.asset3}
              onChange={this.onChange}
            ></input>
            <label htmlFor="Autos">Autos $</label>
            <input
              name="asset4"
              type="number"
              placeholder="10000$"
              value={this.state.asset4}
              onChange={this.onChange}
            ></input>
            <label htmlFor="Others">Others $</label>
            <input
              name="asset5"
              type="number"
              placeholder="10000$"
              value={this.state.asset5}
              onChange={this.onChange}
            ></input>
          </div>
          <div className="right-form">
            <h1>Liabilities</h1>

            <label htmlFor="Mortgages">Mortgages $</label>
            <input
              name="liab1"
              type="number"
              placeholder="0$"
              value={this.state.liab1}
              onChange={this.onChange}
            ></input>

            <label htmlFor="PersonalLoans">Personal Loans $ </label>
            <input
              name="liab2"
              type="number"
              placeholder="0$"
              value={this.state.liab2}
              onChange={this.onChange}
            ></input>

            <label htmlFor="StudentLoans">Student Loans $</label>
            <input
              name="liab3"
              type="number"
              placeholder="0$"
              value={this.state.liab3}
              onChange={this.onChange}
            ></input>

            <label htmlFor="AutoLoans"> Auto Loans $</label>
            <input
              name="liab4"
              type="number"
              placeholder="0$"
              value={this.state.liab4}
              onChange={this.onChange}
            ></input>

            <label htmlFor="OtherLoans">Other Loans $</label>
            <input
              name="liab5"
              type="number"
              placeholder="0$"
              value={this.state.liab5}
              onChange={this.onChange}
            ></input>
          </div>

          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default NetWorthCalc;
