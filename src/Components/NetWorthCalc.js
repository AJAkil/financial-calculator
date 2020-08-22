import React, { Component } from "react";
import PropTypes from "prop-types";

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

    let netWorth = 0;

    for (const [key, value] of Object.entries(this.state)) {
      console.log(`The key is ${key} and the value is ${value}`);
      key.startsWith("a")
        ? (netWorth += parseInt(value))
        : (netWorth -= parseInt(value));
    }

    // passing the value up
    this.props.setNetWorth(netWorth);
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <div className="form1">
            <label htmlFor="RealEstate ">Real Estate $</label>
            <input
              name="asset1"
              type="number"
              placeholder="10000$"
              value={this.state.asset1}
              onChange={this.onChange}
            ></input>
          </div>
          <div className="form2">
            <label htmlFor="SavingAcc">Saving Accounts $</label>
            <input
              name="asset2"
              type="number"
              placeholder="10000$"
              value={this.state.asset2}
              onChange={this.onChange}
            ></input>
          </div>
          <div className="form3">
            <label htmlFor="Retirement">Retirement Accounts $</label>
            <input
              name="asset3"
              type="number"
              placeholder="10000$"
              value={this.state.asset3}
              onChange={this.onChange}
            ></input>
          </div>
          <div className="form4">
            <label htmlFor="Autos">Autos $</label>
            <input
              name="asset4"
              type="number"
              placeholder="10000$"
              value={this.state.asset4}
              onChange={this.onChange}
            ></input>
          </div>
          <div className="form5">
            <label htmlFor="Others">Others $</label>
            <input
              name="asset5"
              type="number"
              placeholder="10000$"
              value={this.state.asset5}
              onChange={this.onChange}
            ></input>
          </div>
          <div className="form6">
            <label htmlFor="Mortgages">Mortgages $</label>
            <input
              name="liab1"
              type="number"
              placeholder="0$"
              value={this.state.liab1}
              onChange={this.onChange}
            ></input>
          </div>
          <div className="form7">
            <label htmlFor="PersonalLoans">Personal Loans $ </label>
            <input
              name="liab2"
              type="number"
              placeholder="0$"
              value={this.state.liab2}
              onChange={this.onChange}
            ></input>
          </div>
          <div className="form8">
            <label htmlFor="StudentLoans">Student Loans $</label>
            <input
              name="liab3"
              type="number"
              placeholder="0$"
              value={this.state.liab3}
              onChange={this.onChange}
            ></input>
          </div>
          <div className="form9">
            <label htmlFor="AutoLoans"> Auto Loans $</label>
            <input
              name="liab4"
              type="number"
              placeholder="0$"
              value={this.state.liab4}
              onChange={this.onChange}
            ></input>
          </div>
          <div className="form10">
            <label htmlFor="OtherLoans">Other Loans $</label>
            <input
              name="liab5"
              type="number"
              placeholder="0$"
              value={this.state.liab5}
              onChange={this.onChange}
            ></input>
          </div>

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NetWorthCalc;
