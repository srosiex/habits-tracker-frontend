import React, { Component } from "react";
export { connect } from 'react-redux'


export class HabitWeek extends Component{
    state = {
        monColor: "#fff",
        tuesColor: "#fff",
        wedsColor: "#fff"
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
      };
    
      handleClear = e => {
        if (e.target.id === "clearButton") {
          this.setState({
            monColor: "#fff",
            tuesColor: "#fff",
            wedsColor: "#fff"
          });
        }
      };
    
      render() {
        return (
          <div>
            <center>
              <table>
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
                  </tr>
                </thead>
              </table>
            </center>
            <button id="clearButton" onClick={this.handleClear}>
              Clear
            </button>
          </div>
        );
      }


}
