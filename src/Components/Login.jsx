import axios from "axios";
import { useState } from "react";
import techMateLogo from "../../src/assets/techMateLogo.png";

const BASE_URL = "http://localhost:7777";

const Login = () => {
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        try {
            const res = await axios.post(BASE_URL + "/auth/login", {
                emailId,
                password
            }, {
                withCredentials: true
            });
            console.log(res?.data);
        } catch (error) {
            console.log("ERROR:", error);
        }
    }

    return (
        <div className="flex justify-center items-center p-20">
            <div className="card card-border bg-base-300 w-96">
                <div className="card-body">
                    <figure>
                        <img
                            src={techMateLogo}
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
                </div>
            </div>
        </div>
    )
}

export default Login;