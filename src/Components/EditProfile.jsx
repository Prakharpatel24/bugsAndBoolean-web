import { useEffect, useState } from "react";
import UserCardFeed from "./UserCardFeed";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/slice/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { isOpen } from "../utils/slice/navbarDropdownSlice";

const EditProfile = ({ user }) => {
    const [firstName, setFirstName] = useState(user?.firstName);
    const [lastName, setLastName] = useState(user?.lastName);
    const [age, setAge] = useState(user?.age);
    const [gender, setGender] = useState(user?.gender);
    const [about, setAbout] = useState(user?.about);
    const [photoURL, setPhotoURL] = useState(user?.photoURL);
    const [skills, setSkills] = useState(user?.skills);
    const [currentSkills, setCurrentSkills] = useState([...skills]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setSkills([...currentSkills]);
        }
    }

    useEffect(() => {
        dispatch(isOpen(false));
    }, []);

    const handleSubmitClick = async () => {
        try {
            const res = await axios.post(BASE_URL + "/profile/edit",
                {
                    firstName,
                    lastName,
                    age,
                    gender,
                    about,
                    photoURL,
                    skills
                },
                {
                    withCredentials: true
                }
            )
            if (res?.data?.status === 201) {
                dispatch(addUser(res?.data));
                toast.success("Profile updates successfuly");
            }
        } catch (error) {
            if (error?.response?.data?.status === 401) navigate("/login");
            toast.error(error?.response?.data?.message || 'Something went wrong');
        }
    }

    return (
        <div className="flex flex-col md:flex-row justify-center items-start md:items-stretch p-6 md:p-10 gap-8 max-w-7xl mx-auto">
            <div className="card bg-base-300 w-full md:w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-4">Edit Profile</h2>

                    <label className="block mb-1 font-semibold">Firstname</label>
                    <input
                        type="text"
                        className="input input-bordered w-full mb-4 text-gray-400"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <label className="block mb-1 font-semibold">Lastname</label>
                    <input
                        type="text"
                        className="input input-bordered w-full mb-4 text-gray-400"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />

                    <label className="block mb-1 font-semibold">Age</label>
                    <input
                        type="text"
                        className="input input-bordered w-full mb-4 ttext-gray-400"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />

                    <label className="block mb-1 font-semibold">Gender</label>
                    <input
                        type="text"
                        className="input input-bordered w-full mb-4 text-gray-400"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />

                    <label className="block mb-1 font-semibold">About</label>
                    <textarea
                        className="textarea textarea-bordered w-full mb-4 text-gray-400 resize-none"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        rows={4}
                    />

                    <label className="block mb-1 font-semibold">PhotoURL</label>
                    <input
                        type="text"
                        className="input input-bordered w-full mb-4 text-gray-400"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                    />

                    <label className="block mb-1 font-semibold">
                        Skills (Done? Just hit Enter)
                    </label>
                    <input
                        type="text"
                        className="input input-bordered w-full mb-4 text-gray-400"
                        value={currentSkills}
                        onChange={(e) => setCurrentSkills([e.target.value])}
                        onKeyDown={handleKeyDown}
                    />

                    <div className="card-actions justify-center mt-2">
                        <button
                            className="btn btn-primary w-full md:w-auto"
                            onClick={handleSubmitClick}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-auto md:flex-1">
                <UserCardFeed
                    user={{
                        firstName,
                        lastName,
                        age,
                        gender,
                        about,
                        photoURL,
                        skills,
                    }}
                    showConnectionButtons={false}
                />
            </div>
        </div>
    );

}

export default EditProfile;