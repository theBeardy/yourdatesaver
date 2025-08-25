import React, { useState } from "react";
import NavBar from './components/NavBar';
import InviteeForm from './components/InviteeForm';
import InviteeList from './components/InviteeList';
import { Modal } from "./components/Modal";

export const Context = React.createContext();

function App(){

  return (
    <>
      <NavBar />
      <Modal trigger={<i class="fa-solid fa-circle-plus fa-2xl scale-125 text-gray-200"></i>}>
        <InviteeForm/>
      </Modal>
      <InviteeList />
    </>
  );

}

export default App;