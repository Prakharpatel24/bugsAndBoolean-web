import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/slice/userSlice";

const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [about, setAbout] = useState("");
    const [photoURL, setPhotoURL] = useState();
    const [skills, setSkills] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmitClick = async () => {
        try {
            if (firstName === "") {
                return toast.error("First name is required.");
            }
            if (lastName === "") {
                return toast.error("Last name is required.");
            }
            if (age === "") {
                return toast.error("Age is required.");
            }
            if (emailId === "") {
                return toast.error("Email ID is required.");
            }
            if (password === "") {
                return toast.error("Password is required.");
            }

            const res = await axios.post(
                BASE_URL + "/auth/signup",
                { firstName, lastName, age, emailId, password, gender, about, photoURL, skills },
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
                        placeholder="Age"
                        className="input input-bordered mb-3 w-full"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
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

                    <input
                        type="text"
                        placeholder="Gender"
                        className="input input-bordered mb-3 w-full"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />

                    <textarea
                        placeholder="About"
                        className="textarea textarea-bordered mb-3 w-full"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                    ></textarea>

                    <input
                        type="text"
                        placeholder="Photo URL"
                        className="input input-bordered mb-3 w-full"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                    />

                    <textarea
                        placeholder="Skills"
                        className="textarea textarea-bordered mb-4 w-full"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                    ></textarea>

                    <div className="card-actions justify-center">
                        <button className="btn btn-primary w-full sm:w-auto" onClick={handleSubmitClick}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default SignUp