import axios from "axios";
import { useState } from "react";
import bugsAndBooleanLogo from "../../src/assets/bugsAndBooleanLogo.png";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/slice/userSlice";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const res = await axios.post(BASE_URL + "/auth/login", {
                emailId,
                password
            }, {
                withCredentials: true
            });
            dispatch(addUser(res?.data));
            if (res?.data?.status === 200) navigate("/");
        } catch (error) {
            toast.error(error?.response?.data?.message);
            console.log("ERROR:", error);
        }
    }

    return (
        <div className="flex justify-center items-center p-20">
            <div className="card card-border bg-base-300 w-96">
                <div className="card-body">
                    <figure>
                        <img
                            src={bugsAndBooleanLogo}
                            alt="techMateLogo" />
                    </figure>
                    <h2 className="card-title mb-2.5">Login</h2>
                    <input
                        type="text"
                        placeholder="Email"
                        className="input mb-2.5"
                        value={emailId}
                        onChange={(e) => setEmailId(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input mb-2.5"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="card-actions justify-center">
                        <button
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <span>New to Bugs&Boolean ?
                            <a className="link-info cursor-pointer hover:underline"> Join Now</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;