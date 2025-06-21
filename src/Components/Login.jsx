import axios from "axios";
import { useState } from "react";
import bugsAndBooleanLogo from "../../src/assets/bugsAndBooleanLogo.png";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/slice/userSlice";
import { BASE_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleLogin = async (credentialResponse) => {
        try {
            const { credential } = credentialResponse;
            const res = await axios.post(
                BASE_URL + "/auth/login-with-google",
                { credential },
                { withCredentials: true }
            );
            dispatch(addUser(res?.data));
            if (res?.data?.status === 200) navigate("/");
        } catch (error) {
            toast.error(error?.response?.data?.message, {
                toastId: error?.response?.data?.message
            });
            if(error?.status === 400) navigate("/signup")
            console.log("ERROR:", error);
        }
    }

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
            toast.error(error?.response?.data?.message, {
                toastId: error?.response?.data?.message
            });
            console.log("ERROR:", error);
        }
    }

    return (
        <div className="min-h-screen flex flex-col md:flex-row">

            <div className="w-full md:w-1/2 bg-base-100 md:bg-base-200 lg:bg-base-200 flex items-center justify-center p-6 md:p-8">
                <img
                    src={bugsAndBooleanLogo}
                    alt="Bugs & Boolean Logo"
                    className="max-w-[120px] sm:max-w-xs md:max-w-md"
                />
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-base-100">
                <div className="w-full max-w-md">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Welcome Back</h2>

                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Email"
                            className="input input-bordered w-full"
                            value={emailId}
                            onChange={(e) => setEmailId(e.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button
                            className="btn btn-primary w-full"
                            onClick={handleSubmit}
                        >
                            Login
                        </button>

                        <div className="flex justify-center items-center">
                            <GoogleLogin
                                text="continue_with"
                                onSuccess={handleGoogleLogin}
                            />
                        </div>
                    </div>

                    <p className="mt-4 text-center text-sm">
                        New to <strong>Bugs&Boolean</strong>?{" "}
                        <Link
                            to="/signup"
                            className="link link-info hover:underline"
                        >
                            Join Now
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );


}

export default Login;