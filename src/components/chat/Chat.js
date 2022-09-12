import React, { useRef, useEffect, useState } from "react";
import ChatWindow from "./chat-window/ChatWindow";
import Avatar from "./Avatar";

const Chat = () => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    const [visible, setVisible] = useState(false)

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setVisible(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    return (
        <div ref={wrapperRef}>
            <ChatWindow visible={visible} />

            <Avatar 
                onClick={() => setVisible(!visible)}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                }}
            />
        </div>
    )
}

export default Chat;