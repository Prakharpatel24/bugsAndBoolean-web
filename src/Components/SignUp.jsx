import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/slice/userSlice";
import { GoogleLogin } from "@react-oauth/google";

const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleGoogleSignUp = async (credentialResponse) => {
        try {
            const { credential } = credentialResponse;
            const res = await axios.post(
                BASE_URL + "/auth/signup-with-google",
                { credential },
                { withCredentials: true }
            );
            if (res?.data?.status === 201) {
                toast.success(
                    "Welcome! Your account has been created successfully. Tell us more about you to start connecting.",
                    {
                        toastId: "new_user",
                        autoClose: 5000
                    },
                );
                dispatch(addUser(res?.data));
                return navigate("/profile");
            }
        } catch (err) {
            if (err?.response?.data?.status !== 201) {
                toast.error(err?.response?.data?.message);
            }
            console.log("ERROR:", err);
        }
    }

    const handleSubmitClick = async () => {
        try {
            if (firstName === "") {
                return toast.error("First name is required.", {
                    toastId: "first-name-required"
                });
            }
            if (lastName === "") {
                return toast.error("Last name is required.", {
                    toastId: "last-name-required"
                });
            }
            if (emailId === "") {
                return toast.error("Email ID is required.", {
                    toastId: "emailId-required"
                });
            }
            if (password === "") {
                return toast.error("Password is required.", {
                    toastId: "password-required"
                });
            }

            const payload = {
                firstName,
                lastName,
                emailId,
                password
            }
            const res = await axios.post(
                BASE_URL + "/auth/signup",
                payload,
                { withCredentials: true }
            );
            if (res?.data?.status === 201) {
                toast.success(res?.data?.message);
                dispatch(addUser(res?.data));
                return navigate("/");
            }
        } catch (err) {
            if (err?.response?.data?.status !== 201) {
                toast.error(err?.response?.data?.message);
            }
            console.log("ERROR:", err);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen px-4 py-10 sm:py-20">
            <div className="card card-border bg-base-300 w-full max-w-md shadow-lg">
                <div className="card-body">
                    <h2 className="card-title mb-4 text-center">Sign Up</h2>

                    <div className="flex justify-center my-4">
                        <GoogleLogin
                            text="signup_with"
                            onSuccess={handleGoogleSignUp}
                        />
                    </div>

                    <div className="flex items-center my-4">
                        <hr className="flex-grow border-t border-gray-400" />
                        <span className="mx-4 text-gray-500">OR</span>
                        <hr className="flex-grow border-t border-gray-400" />
                    </div>

                    <input
                        type="text"
                        placeholder="Firstname"
                        className="input input-bordered mb-3 w-full"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Lastname"
                        className="input input-bordered mb-3 w-full"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Email"
                        className="input input-bordered mb-3 w-full"
                        value={emailId}
                        onChange={(e) => setEmailId(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered mb-3 w-full"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="card-actions justify-center">
                        <button className="btn btn-primary w-full sm:w-auto" onClick={handleSubmitClick}>
                            Submit
                        </button>
                    </div>

                    <p className="mt-4 text-center text-sm">
                        {/* New to <strong>Bugs&Boolean</strong>?{" "} */}
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="link link-info hover:underline"
                        >
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );

}

export default SignUp