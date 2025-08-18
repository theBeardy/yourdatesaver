import axios from "axios";
import React from "react";

class App extends React.Component {

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

  divBox = "w-[50%] text-center bg-blue-400 rounded-md mx-auto my-4"
  anchorNav = "mx-auto bg-gray-400 p-2 hover:bg-teal-400 w-full text-center"
  headerClass = "text-3xl"
  textClass = "text-2xl"
  
  render() {
    return (
      <div>
        <div className={this.divBox}>
          <h1 className={this.headerClass}>In-Person Invitees</h1>
          {this.state.details.map((output, id) => (
            <div key={id}>
              <div>
                {output.invite_type === "In-Person" ? 
                  <div>
                    <h2 className={this.textClass}>{output.invitee}</h2>
                    <h3>{output.invite_type}</h3>
                  </div>
                : ''}
              </div>
            </div>
          ))}
        </div>
        <div className={this.divBox}>
          <h1 className={this.headerClass}>Live-Stream Invitees</h1>
          {this.state.details.map((output, id) => (
            <div key={id}>
              <div>
                {output.invite_type !== "In-Person" ? 
                  <div>
                    <h2 className={this.textClass}>{output.invitee}</h2>
                    <h3>{output.invite_type}</h3>
                  </div>
                : ''}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }


}

export default App;
