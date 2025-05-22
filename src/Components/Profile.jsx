import axios from "axios";
import EditProfile from "./EditProfile";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/slice/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((store) => store.user.userInfo);
    // console.log(userData, "UD");

    const fetchUser = async () => {
        try {
            if (userData) return;
            const res = await axios.get(
                BASE_URL + "/profile/view",
                {
                    withCredentials: true
                }
            );
            dispatch(addUser(res?.data));
        } catch (error) {
            if (error?.response?.data?.status === 401) navigate("/login");
            else console.log("ERROR:", error);
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);


    return (
        <div className="flex justify-center p-10">
            {userData &&
                <EditProfile user={userData.data} />}
        </div>
    )
}

export default Profile;