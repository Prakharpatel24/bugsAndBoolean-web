import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../constants";
import { addRequestData, setNumberOfRequests } from "../slice/requestsSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const useFetchRequests = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getRequests = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/requests", { withCredentials: true });
            dispatch(setNumberOfRequests(res?.data?.length));
            dispatch(addRequestData(res?.data));
        } catch (err) {
            if (err?.response?.data?.status === 401) {
                navigate("/login");
            }
            if (err?.response?.data?.status !== 200) {
                toast.error(err?.response?.data?.message, {
                    toastId: err?.response?.data?.message
                });
            }
            console.log('Error:', err);
        }
    }

    useEffect(() => {
        getRequests();
    }, []);

    return { getRequests }
}

export default useFetchRequests;