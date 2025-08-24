import { useState } from "react";

const openButton = "w-12 h-12 m-4";
const closeButton = "w-12 h-12 mx-4 mt-64 self-start";
const modalBG = "fixed inset-0 z-50 w-[100vw] overflow-auto bg-gray-800/50 flex justify-center items-center";
const modalStyle = "bg-white max-h-[500px] p-[20px] flex justify-start"

const ModalBackground = ({ onClick, children }) => {
    return <div onClick={onClick} className={modalBG}>
        {children}
    </div>;
}

const ModalBody = ({ onClick, children }) => {
    return <div onClick={onClick} className={modalStyle}>
        {children}
    </div>;
}

export const Modal = ({ children }) => {
    const [shouldShow, setShouldShow] = useState(false);

    return (
        <>
            <button className={openButton} onClick={() => setShouldShow(true)}><i class="fa-solid fa-circle-plus fa-2xl scale-125"></i></button>
            {shouldShow && (
                <ModalBackground onClick={() => setShouldShow(false)}>
                    <button className={closeButton} onClick={() => setShouldShow(false)}><i class="fa-solid fa-circle-xmark fa-rotate-90 fa-2xl scale-125 text-white"></i></button>
                    <ModalBody onClick={(e) => e.stopPropagation()}>
                        {children}
                    </ModalBody>
                </ModalBackground>
            )}
        </>
    )
}