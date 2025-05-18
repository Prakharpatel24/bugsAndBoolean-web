import { useState } from "react";
import UserCardFeed from "./UserCardFeed";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/slice/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

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

    console.log(about);
    

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setSkills([...currentSkills]);
        }
    }

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
        <>
            <div className="card bg-base-300 w-96 shadow-sm mr-10">
                <div className="card-body">
                    <h2 className="card-title mb-4">Edit Profile</h2>

                    <span>Firstname</span>
                    <input
                        type="text"
                        className="input text-gray-400"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <span>Lastname</span>
                    <input
                        type="text"
                        className="input text-gray-400"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />

                    <span>Age</span>
                    <input
                        type="text"
                        className="input text-gray-400"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />

                    <span>Gender</span>
                    <input
                        type="text"
                        className="input text-gray-400"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />

                    <span>About</span>
                    <textarea
                        className="textarea text-gray-400"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                    >

                    </textarea>

                    <span>PhotoURL</span>
                    <input
                        type="text"
                        className="input text-gray-400"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                    />

                    <span>Skills (Done? Just hit Enter)</span>
                    <input
                        type="text"
                        className="input text-gray-400"
                        value={currentSkills}
                        onChange={(e) => setCurrentSkills([e.target.value])}
                        onKeyDown={handleKeyDown}
                    />

                    <div className="card-actions justify-center mt-2">
                        <button className="btn btn-primary" onClick={handleSubmitClick}>Submit</button>
                    </div>
                </div>
            </div>
            <UserCardFeed user={
                {
                    firstName,
                    lastName,
                    age,
                    gender,
                    about,
                    photoURL,
                    skills
                }}
                showConnectionButtons={true}
            />
        </>
    )
}

export default EditProfile;