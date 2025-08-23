import axios from "axios";
import React from "react";

class InviteeList extends React.Component {

  state = { details: [], }

  componentDidMount() {

    let data;
    axios.get('http://localhost:8000')
    .then(res => {
      data = res.data;
      this.setState({
        details: data
      });
    })
    .catch(err => { 
      console.error("Error fetching data:", err)
    })
  }

  divBox = "flex flex-col w-[50%] bg-gray-400 rounded-md mx-auto my-4"
  namesGrid = "grid grid-cols-2 gap-2 p-8 w-[100%]"
  gridTextAlign = "odd:text-left even:text-right"
  headerClass = "mt-4 text-3xl text-center"
  textClass = "mx-8 text-2xl"
  
  render() {
    return (
      <div>
        <div className={this.divBox}>
          <h1 className={this.headerClass}>In-Person Invitees</h1>
          <div className={this.namesGrid}>
            {this.state.details.map((output, id) => (
              output.invite_type === "In-Person" && (
                <div key={id} className={this.gridTextAlign}>
                  <h2 className={this.textClass}>{output.invitee}</h2>
                </div>
              )
            ))}
          </div>
        </div>
        <div className={this.divBox}>
          <h1 className={this.headerClass}>Live-Stream Invitees</h1>
          <div className={this.namesGrid}>
            {this.state.details.map((output, id) => (
              output.invite_type !== "In-Person" && (
                <div key={id} className={this.gridTextAlign}>
                  <h2 className={this.textClass}>{output.invitee}</h2>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    )
  }


}

export default InviteeList;
