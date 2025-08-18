function InviteeForm(){

    const labelStyle = "";
    const inputTextStyle = "p-2 bg-gray-400";

    return (
        <form className="flex justify-center" action="">
            <label htmlFor="">Enter Name:
                <input className={inputTextStyle} type="text" />
            </label>
            <label htmlFor="">Invite Type
                <input type="text" />
            </label>
        </form>
    )
}

export default InviteeForm;