import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/slice/userSlice";
import { removeFeed } from "../utils/slice/feedSlice";
import { isOpen } from "../utils/slice/navbarDropdownSlice";

const Navbar = () => {
    const navbarDropdown = useSelector((store) => store.navbarDropdown.dropdown);
    const userInfo = useSelector((store) => store.user.userInfo);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUserAvatarClick = () => {
        navbarDropdown ? dispatch(isOpen(false)) : dispatch(isOpen(true));
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
        <div className="sticky top-0 z-50 navbar bg-base-300 shadow-sm px-4 sm:px-6 md:px-10">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-lg sm:text-xl">
                    Bugs&Boolean
                </Link>
            </div>

            {userInfo?.data && (
                <div className="flex items-center gap-2">
                    <div className="dropdown dropdown-end">
                        <div className="flex items-center">
                            <span className="hidden sm:block mr-2 capitalize text-sm sm:text-base">
                                Welcome, {userInfo?.data?.firstName}
                            </span>
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar"
                                onClick={handleUserAvatarClick}
                            >
                                <div className="w-9 sm:w-10 rounded-full">
                                    <img
                                        alt="User Avatar"
                                        src={userInfo?.data?.photoURL}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {navbarDropdown && (
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-48 sm:w-52 p-2 shadow"
                            >
                                <li>
                                    <Link to="/profile" className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/connections">Connections</Link>
                                </li>
                                <li>
                                    <Link to="/requests">Pending Requests</Link>
                                </li>
                                <li onClick={handleLogoutBtnClick}>
                                    <a>Logout</a>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            )}
        </div>
    );


}

export default Navbar;