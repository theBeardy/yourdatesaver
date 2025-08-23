import { useState } from "react";
import axios from "axios";
import { Context } from "../App";

function InviteeForm(){

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.startsWith(name + '=')) {
                cookieValue = decodeURIComponent(cookie.slice(name.length + 1));
                break;
            }
            }
        }
        return cookieValue;
    }

    const csrftoken = getCookie('csrftoken');

    const [invitee, setInvitee] = useState('');
    const [invite_type, setInviteType] = useState('In-Person');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = { invitee, invite_type };

        axios.post("http://localhost:8000/api/invitees/", form, {
            headers: {
                "X-CSRFToken": csrftoken
            },
            withCredentials: true  // required if your frontend is on a different origin
        })
        .then(res => console.log("Success:", res.data))
        .catch(err => console.error("Error:", err.response ? err.response.data : err.message));
        window.location.reload();
    }

    const formStyle = "w-auto flex flex-col gap-4 mx-2 p-4 bg-gray-300";
    const labelStyle = "text-xl font-bold m-3";
    const fieldStyle = "bg-gray-400 w-72 p-4 text-lg font-medium m-3 h-[3.25rem] rounded-md";
    const buttonStyle = "w-24 h-12 m-4 bg-gray-800 text-white rounded-4xl self-end";

    return (
        <div>
            <form className={formStyle} onSubmit={handleSubmit} action="">
                <h1 className="text-2xl text-center font-bold mb-2">Add someone to the invite list.</h1>
                <label className={labelStyle} htmlFor="invitee">
                    <input 
                        className={fieldStyle} 
                        type="text" 
                        placeholder="Enter Name"
                        value={invitee}
                        onChange={(e) => setInvitee(e.target.value)}
                    />
                </label>
                <label className={labelStyle} htmlFor="invite_type">
                    <select 
                        className={fieldStyle}
                        value={invite_type}
                        onChange={(e) => setInviteType(e.target.value)}
                    >
                        <option value="In-Person">In-Person</option>
                        <option value="LiveStream">LiveStream</option>
                    </select>
                </label>
                <button className={buttonStyle} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default InviteeForm;