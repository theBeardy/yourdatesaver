import React, { useState } from "react";
import NavBar from './components/NavBar';
import InviteeForm from './components/InviteeForm';
import InviteeList from './components/InviteeList';
import { Modal } from "./components/Modal";

export const Context = React.createContext();

function App(){

  const [invitee, setInvitee] = useState('');
  const [invite_type, setInviteType] = useState('In-Person');

  return (
    <>
      <NavBar />
      <Modal>
        <InviteeForm/>
      </Modal>
      <InviteeList />
    </>
  );

}

export default App;