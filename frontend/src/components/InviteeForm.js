import { useState } from "react";
import axios from "axios";

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
    }

    const formStyle = "flex flex-col p-6 bg-purple-300 w-[50%] mx-auto";
    const labelStyle = "text-xl";
    const fieldStyle = "m-2 p-2 bg-gray-400";
    const buttonStyle = "w-[100px] p-2 bg-yellow-600 mt-3";

    return (
        <div>
            <form className={formStyle} onSubmit={handleSubmit} action="">
                <h1 className="text-2xl text-center font-bold mb-2">Add someone to the invite list.</h1>
                <label className={labelStyle} htmlFor="invitee">Enter Name:
                    <input 
                        className={fieldStyle} 
                        type="text" 
                        value={invitee}
                        onChange={(e) => setInvitee(e.target.value)}
                    />
                </label>
                <label className={labelStyle} htmlFor="invite_type">Invite Type
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