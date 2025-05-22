import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import UserCardFeed from "./UserCardFeed";
import { toast } from "react-toastify";

const Requests = () => {
    const [requestData, setRequestData] = useState(null);
    const navigate = useNavigate();
    const getRequests = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/requests", { withCredentials: true });
            setRequestData(res?.data);
        } catch (err) {
            if (err?.response?.data?.status === 401) {
                navigate("/login");
            }
            if (err?.response?.data?.status !== 200) {
                toast.error(err?.response?.data?.message);
            }
            console.log('Error:', err);
        }
    }

    const handleReviewRequest = async (status, _id) => {
        try {
            const url = `${BASE_URL}/request/review/${status}/${_id}`;
            const res = await axios.post(
                url,
                {},
                { withCredentials: true }
            );
            if (res?.data?.status === 200) {
                toast.success(res?.data?.message);
                getRequests();
            }
        } catch (err) {
            if (err?.response?.data?.status === 401) {
                navigate("/login");
            }
            if (err?.response?.data?.status !== 200) {
                toast.error(err?.response?.data?.message);
            }
            console.log('Error:', err);
        }
    }

    useEffect(() => {
        getRequests();
    }, [])

    return requestData?.length === 0 ? (
        <div className="p-5 max-w-xl mx-auto">
            <div className="mockup-code w-full">
                <pre data-prefix="$" className="whitespace-normal text-center">
                    <code>You're all caught up — no pending connection requests.</code>
                </pre>
            </div>
        </div>
    ) : (
        <div className="flex flex-col gap-4 p-4 max-w-xl mx-auto">
            {requestData?.map((request) => (
                <div
                    className="mockup-code w-full rounded-lg shadow-sm overflow-hidden"
                    key={request?.fromUserId?._id}
                >
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full px-4 py-3 gap-3 sm:gap-0">
                        <pre data-prefix="$" className="m-0 whitespace-nowrap truncate max-w-xs sm:max-w-none text-ellipsis">
                            <code>
                                {request?.fromUserId?.firstName + " " + request?.fromUserId?.lastName}
                            </code>
                        </pre>

                        <button
                            className="btn btn-primary whitespace-nowrap"
                            onClick={() => document.getElementById(request?.fromUserId?._id).showModal()}
                        >
                            View Profile
                        </button>

                        <dialog
                            id={request?.fromUserId?._id}
                            className="modal modal-bottom sm:modal-middle"
                        >
                            <div className="modal-box max-w-sm sm:max-w-md">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-black z-10">✕</button>
                                </form>

                                <div className="flex justify-center mb-4">
                                    <UserCardFeed
                                        user={request?.fromUserId}
                                        showConnectionButtons={false}
                                    />
                                </div>

                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <button
                                        className="btn bg-red-600 hover:bg-red-700 w-full sm:w-auto"
                                        onClick={() => handleReviewRequest("rejected", request?._id)}
                                    >
                                        Reject
                                    </button>
                                    <button
                                        className="btn bg-green-600 hover:bg-green-700 w-full sm:w-auto"
                                        onClick={() => handleReviewRequest("accepted", request?._id)}
                                    >
                                        Accept
                                    </button>
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

export default Requests;