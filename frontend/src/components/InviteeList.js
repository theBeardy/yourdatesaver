import axios from "axios";
import React, { useState } from "react";
import { Modal } from "./Modal";
import InviteeEditForm from "./InviteeEditForm";

class InviteeList extends React.Component {

  state = { 
    details: [], 
    showModal: false,
    currentInvitee: null
  }

  componentDidMount() {

    let data;
    axios.get('http://localhost:8000/api/invitees')
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
  gridTextAlign = "h-10 bg-gray-200 flex justify-between items-center rounded-sm odd:text-left even:text-right"
  headerClass = "mt-4 text-3xl text-center"
  textClass = "mx-4 text-2xl"
  
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
                    <Modal trigger={<i class="fa-solid fa-pen-to-square text-gray-400"></i>}>
                      <InviteeEditForm
                        inviteeData = {output}
                        onClose={() => this.setState({ showModal: false })}
                        onUpdated={(updated) => {
                          this.setState(prev => ({
                            details: prev.details.map(item =>
                              item.id === updated.id ? updated : item
                            )
                          }))
                        }}
                      />
                    </Modal>
                    {/* <button
                      onClick={() => this.setState({ showModal: true, currentInvitee: output })} 
                      className="mx-2"
                    >
                      <i class="fa-solid fa-pen-to-square text-gray-400 text-gray-400 hover:text-gray-600"></i>
                    </button> */}
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
                  <Modal trigger={<i class="fa-solid fa-pen-to-square text-gray-400"></i>}>
                      <InviteeEditForm
                        inviteeData = {output}
                        onClose={() => this.setState({ showModal: false })}
                        onUpdated={(updated) => {
                          this.setState(prev => ({
                            details: prev.details.map(item =>
                              item.id === updated.id ? updated : item
                            )
                          }))
                        }}
                      />
                    </Modal>
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
