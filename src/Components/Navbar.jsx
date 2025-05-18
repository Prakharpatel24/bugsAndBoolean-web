import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/slice/userSlice";
import { removeFeed } from "../utils/slice/feedSlice";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const userInfo = useSelector((store) => store.user.userInfo);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUserAvatarClick = () => {
        isDropdownOpen ? setIsDropdownOpen(false) : setIsDropdownOpen(true);
    }

    const handleLogoutBtnClick = async () => {
        try {
            await axios.post(
                BASE_URL + "/auth/logout",
                {},
                { withCredentials: true }
            );
            dispatch(removeUser());
            dispatch(removeFeed(null));
            navigate("/login");
        } catch (error) {
            console.log("ERROR:", error);
        }
    }

    return (
        <div className="navbar bg-base-300 shadow-sm">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">TechMate</Link>
            </div>
            {userInfo?.data && <div className="flex gap-2">
                <div className="dropdown dropdown-end mr-3">
                    <div className="flex items-center">
                        <span className="mr-2 capitalize">Welcome, {userInfo?.data?.firstName}</span>
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                            onClick={handleUserAvatarClick}
                        >
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={userInfo?.data?.photoURL} />
                            </div>
                        </div>
                    </div>
                    {isDropdownOpen &&
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <Link to="/profile" className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/connections">
                                    Connections
                                </Link>
                            </li>
                            <li onClick={handleLogoutBtnClick}><a>Logout</a></li>
                        </ul>}
                </div>
            </div>}
        </div>
    )
}

export default Navbar;