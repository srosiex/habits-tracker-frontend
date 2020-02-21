import React, { Component } from "react";
export { connect } from 'react-redux'


export class HabitWeek extends Component{
    state = {
        monColor: "#fff",
        tuesColor: "#fff",
        wedsColor: "#fff",
        thursColor: "#fff",
        frisColor: "#fff",
        satsColor: "#fff",
        sunsColor: "#fff"

      };
    
      // onClicks = () => {
      //   this.setState({ color: "#333" });
      // };
    
      onClicks = e => {
        if (e.target.id === "m") {
          this.setState({ monColor: "#d3e2e3" });
        }
        if (e.target.id === "t") {
          this.setState({ tuesColor: "#d3e2e3" });
        }
        if (e.target.id === "w") {
          this.setState({ wedsColor: "#d3e2e3" });
        }
        if (e.target.id === "th") {
          this.setState({ thursColor: "#d3e2e3" });
        }
        if (e.target.id === "f") {
          this.setState({ frisColor: "#d3e2e3" });
        }
        if (e.target.id === "s") {
          this.setState({ satsColor: "#d3e2e3" });
        }
        if (e.target.id === "su") {
          this.setState({ sunsColor: "#d3e2e3" });
        }
      };
    
      handleClear = e => {
        if (e.target.id === "clearButton") {
          this.setState({
            monColor: "#fff",
            tuesColor: "#fff",
            wedsColor: "#fff",
            thursColor: "#fff",
            frisColor: "#fff",
            satsColor: "#fff",
            sunsColor: "#fff"
          });
        }
      };
    
      render() {
        return (
          <div className="habit_week">
            <center>
              <table >
                <thead>
                  <tr>
                    <th
                      id="m"
                      bgcolor={this.state.monColor}
                      onClick={this.onClicks}
                    >
                      Mon
                    </th>
                    <th
                      id="t"
                      bgcolor={this.state.tuesColor}
                      onClick={this.onClicks}
                    >
                      Tues
                    </th>
                    <th
                      id="w"
                      bgcolor={this.state.wedsColor}
                      onClick={this.onClicks}
                    >
                      Weds
                    </th>
                    <th
                      id="th"
                      bgcolor={this.state.thursColor}
                      onClick={this.onClicks}
                    >
                      Thur
                    </th>
                    <th
                      id="f"
                      bgcolor={this.state.frisColor}
                      onClick={this.onClicks}
                    >
                      Fri
                    </th>
                    <th
                      id="s"
                      bgcolor={this.state.satsColor}
                      onClick={this.onClicks}
                    >
                      Sat
                    </th>
                    <th
                      id="su"
                      bgcolor={this.state.sunsColor}
                      onClick={this.onClicks}
                    >
                      Sun
                    </th>
                  </tr>
                </thead>
              </table>
            </center>
            <center><button id="clearButton" onClick={this.handleClear}>
              Clear
            </button></center>
          </div>
        );
      }


}
