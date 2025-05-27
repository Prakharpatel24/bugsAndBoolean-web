import { Navigate, Outlet, useNavigate } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/slice/userSlice";

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo } = useSelector((store) => store?.user);
    console.log(userInfo, "userInfo");

    const fetchUser = async () => {
        try {
            if (userInfo) return;
            const res = await axios.get(
                BASE_URL + "/profile/view",
                {
                    withCredentials: true
                }
            );
            dispatch(addUser(res?.data));
        } catch (error) {
            if (error?.status === 401) navigate("/login");
            else console.log("ERROR:", error);
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-grow">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Body;