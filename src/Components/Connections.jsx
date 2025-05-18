import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import UserCardFeed from "./UserCardFeed";

const Connections = () => {

    const [connectionData, setConnectionData] = useState(null);
    const navigate = useNavigate();
    const getConnections = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/connections", { withCredentials: true });
            setConnectionData(res?.data?.data);
        } catch (err) {
            if (err?.response?.data?.status === 401) navigate("/login");
            if (err?.response?.data?.status !== 200) {
                toast.error(err?.response?.data?.message);
            }
            console.log('ERROR:', err);
        }
    }

    useEffect(() => {
        getConnections()
    }, [])

    return connectionData?.length === 0
        ? (
            <div className="p-5">
                <div className="mockup-code w-full">
                    <pre
                        data-prefix="$">
                        <code>No connections yet — send a few requests and build your network.</code>
                    </pre>
                </div>
            </div>
        )
        : (
            <div>
                {
                    connectionData?.map((connection) => {
                        return (
                            <div className="p-3" key={connection?._id}>
                                <div className="mockup-code w-full">
                                    <div className="flex items-center justify-between w-full px-4 py-2">
                                        <pre data-prefix="$" className="m-0">
                                            <code>{connection?.firstName + " " + connection?.lastName}</code>
                                        </pre>
                                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => document.getElementById(connection?._id).showModal()}
                                        >
                                            View Profile
                                        </button>
                                        <dialog
                                            id={connection?._id}
                                            className="modal modal-bottom sm:modal-middle"
                                        >
                                            <div className="modal-box">
                                                <form method="dialog">
                                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                </form>
                                                <div className="flex justify-center">
                                                    <UserCardFeed
                                                        user={connection}
                                                        showConnectionButtons={false}
                                                    />
                                                </div>
                                            </div>
                                            <form method="dialog" className="modal-backdrop">
                                                <button>close</button>
                                            </form>
                                        </dialog>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
}

export default Connections;