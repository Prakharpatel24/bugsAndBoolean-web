import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { createSocketConnection } from "../utils/socketIO";
import { useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import useFetchConnections from "../utils/customHooks/useFetchConnections";

const Chat = () => {
    const userData = useSelector((store) => store.user.userInfo);
    const loggedInUserId = userData?.data?._id;
    const firstName = userData?.data?.firstName;
    const { targetUserId } = useParams();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [targetUserPhotoURL, setTargetUserPhotoURL] = useState();
    const { getConnections } = useFetchConnections();

    const getTargetUserPhotoURL = async () => {
        const res = await getConnections();
        console.log(res, "RES");
        const targetUser = res?.filter((connection) => connection?._id === targetUserId);
        setTargetUserPhotoURL(targetUser[0]?.photoURL);
    }

    const fetchChats = async () => {
        const response = await axios.get(
            `${BASE_URL}/user/chat/${targetUserId}`,
            { withCredentials: true }
        );
        // console.log(response?.data);
        const chatMessages = response?.data?.data?.messages?.map((msg) => {
            return {
                firstName: msg?.senderId?.firstName,
                lastName: msg?.senderId?.lastName,
                text: msg?.text
            }
        });
        setMessages(chatMessages);
    }

    const handleSendMessage = () => {
        const socket = createSocketConnection();
        socket.emit("sendMessage", { firstName, loggedInUserId, targetUserId, text: newMessage });
        setNewMessage("");
    }

    useEffect(() => {
        fetchChats();
    }, [])

    useEffect(() => {
        getTargetUserPhotoURL();
    }, [])

    useEffect(() => {
        if (!loggedInUserId) return;
        const socket = createSocketConnection();
        socket.emit("joinChat", { firstName, loggedInUserId, targetUserId });

        socket.on("messageReceived", ({ firstName, text, targetUserPhotoURL }) => {
            setMessages((messages) => [...messages, { firstName, text, targetUserPhotoURL }]);
        })

        return () => {
            socket.disconnect();
        }
    }, [firstName, loggedInUserId, targetUserId]);

    return (
        <div className="min-h-screen px-4 py-10 sm:px-6 md:px-10 lg:px-16 bg-base-200">
            <div className="max-w-4xl mx-auto flex flex-col h-[80vh] bg-base-300 shadow-lg rounded-lg overflow-hidden">

                {/* Header */}
                <div className="bg-base-100 px-4 py-3 border-b border-base-200 text-lg font-semibold">
                    Chat Room
                </div>

                {/* Message Area */}
                <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
                    {messages.map((msg, index) => {
                        return (
                            <div
                                key={index}
                                className={"chat " +
                                    (msg?.firstName === userData?.data?.firstName ? "chat-end" : "chat-start")
                                }
                            >
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS chat bubble component"
                                            src={msg?.firstName === userData?.data?.firstName ? userData?.data?.photoURL : targetUserPhotoURL}
                                        />
                                    </div>
                                </div>
                                <div className="chat-header capitalize">
                                    {msg?.firstName}
                                </div>
                                <div className="chat-bubble chat-bubble-info">{msg?.text}</div>
                            </div>
                        )
                    })}
                </div>

                {/* Input Area */}
                <div className="px-4 py-3 bg-base-100 border-t border-base-200">
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            // onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            className="input input-bordered w-full"
                        />
                        <button
                            onClick={handleSendMessage}
                            className="btn btn-primary whitespace-nowrap"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;