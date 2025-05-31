import axios from "axios";
import { BASE_URL } from "../constants";
import { useDispatch } from "react-redux";
import { addConnectionData, setNumberOfConnections } from "../slice/connectionsSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const useFetchConnections = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getConnections = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/connections", { withCredentials: true });
            dispatch(setNumberOfConnections(res?.data?.data?.length));
            dispatch(addConnectionData(res?.data?.data));
            return res?.data?.data
        } catch (err) {
            if (err?.response?.data?.status === 401) navigate("/login");
            if (err?.response?.data?.status !== 200) {
                toast.error(err?.response?.data?.message, {
                    toastId: err?.response?.data?.message
                });
            }
            console.log('ERROR:', err);
        }
    }

    useEffect(() => {
        getConnections();
    }, []);

    return { getConnections }
}

export default useFetchConnections;