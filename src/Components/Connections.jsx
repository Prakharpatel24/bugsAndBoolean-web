import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import UserCardFeed from "./UserCardFeed";
import { useDispatch, useSelector } from "react-redux";
import { isOpen } from "../utils/slice/navbarDropdownSlice";
import useFetchConnections from "../utils/customHooks/useFetchConnections";
import { Link } from "react-router";

const Connections = () => {
    const dispatch = useDispatch();
    useFetchConnections();
    const connectionData = useSelector((store) => store.connections.connectionData);

    useEffect(() => {
        dispatch(isOpen(false));
    }, []);

    return connectionData?.length === 0 ? (
        <div className="p-5 max-w-xl mx-auto">
            <div className="mockup-code w-full">
                <pre data-prefix="$" className="whitespace-normal text-center">
                    <code>No connections yet — send a few requests and build your network.</code>
                </pre>
            </div>
        </div>
    ) : (
        <div className="flex flex-col gap-4 p-4 max-w-xl mx-auto">
            {connectionData?.map((connection) => (
                <div
                    className="mockup-code w-full rounded-lg shadow-sm overflow-hidden"
                    key={connection?._id}
                >
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full px-4 py-3 gap-3 sm:gap-0">
                        <pre
                            data-prefix="$"
                            className="m-0 whitespace-nowrap truncate max-w-xs sm:max-w-none text-ellipsis"
                        >
                            <code>{connection?.firstName + " " + connection?.lastName}</code>
                        </pre>

                        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                            <button
                                className="btn btn-primary whitespace-nowrap w-full sm:w-auto"
                                onClick={() => document.getElementById(connection?._id).showModal()}
                            >
                                View Profile
                            </button>
                            <Link to={`/chat/${connection?._id}`}>
                                <button className="btn btn-secondary whitespace-nowrap w-full sm:w-auto">Chat</button>
                            </Link>
                        </div>

                        <dialog
                            id={connection?._id}
                            className="modal modal-bottom sm:modal-middle"
                        >
                            <div className="modal-box max-w-sm sm:max-w-md">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-black z-10">
                                        ✕
                                    </button>
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
            ))}
        </div>
    );

}

export default Connections;