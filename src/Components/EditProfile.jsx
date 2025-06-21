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
    const [file, setFile] = useState(null);
    const [photoURL, setPhotoURL] = useState(user?.photoURL);
    const [previewUrl, setPreviewURL] = useState("");
    const [skills, setSkills] = useState(user?.skills);
    const [currentSkills, setCurrentSkills] = useState([...skills]);
    const [githubUsername, setGithubUsername] = useState(user?.githubUsername);
    const [instagramUsername, setInstagramUsername] = useState(user?.instagramUsername);
    const [linkedInUsername, setLinkedInUsername] = useState(user?.linkedInUsername);
    const [xUsername, setXUsername] = useState(user?.xUsername);


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
            const formData = new FormData();
            if (file) {
                formData.append("profileImage", file);
            }
            formData.append("firstName", firstName);
            formData.append("lastName", lastName);
            formData.append("age", age);
            formData.append("gender", gender);
            formData.append("about", about);
            formData.append("skills", skills);
            formData.append("githubUsername", githubUsername);
            formData.append("instagramUsername", instagramUsername);
            formData.append("linkedInUsername", linkedInUsername);
            formData.append("xUsername", xUsername);

            const res = await axios.post(BASE_URL + "/profile/edit",
                formData,
                {
                    withCredentials: true
                }
            )
            if (res?.data?.status === 201) {
                setPhotoURL(res?.data?.photoURL);
                dispatch(addUser(res?.data));
                toast.success("Profile updated successfuly");
            }
        } catch (error) {
            if (error?.response?.data?.status === 401) navigate("/login");
            toast.error(error?.response?.data?.message || 'Something went wrong', {
                toastId: error?.response?.data?.message || 'Something went wrong'
            });
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
                        className="input input-bordered w-full mb-4 text-gray-400"
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

                    <label className="block mb-1 font-semibold">Upload Picture</label>
                    {/* <div className="mb-4">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setFile(e.target.files[0])}
                            className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/80"
                        />
                    </div> */}

                    <div className="mb-4">
                        <input
                            type="file"
                            className="btn btn-primary file-input file-input-ghost p-0"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                setFile(file);
                                setPreviewURL(URL.createObjectURL(file));
                                setPhotoURL("");
                            }}
                        />
                    </div>

                    <label className="block mb-1 font-semibold">About</label>
                    <textarea
                        className="textarea textarea-bordered w-full mb-4 text-gray-400 resize-none"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        rows={4}
                    />

                    {/* <label className="block mb-1 font-semibold">PhotoURL</label> */}
                    {/* <input
                        type="text"
                        className="input input-bordered w-full mb-4 text-gray-400"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                    /> */}

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

                    <label className="block mb-1 font-semibold">GitHub username</label>
                    <input
                        type="text"
                        className="input input-bordered w-full mb-4 text-gray-400"
                        value={githubUsername}
                        onChange={(e) => setGithubUsername(e.target.value)}
                    />

                    <label className="block mb-1 font-semibold">Instagram username</label>
                    <input
                        type="text"
                        className="input input-bordered w-full mb-4 text-gray-400"
                        value={instagramUsername}
                        onChange={(e) => setInstagramUsername(e.target.value)}
                    />

                    <label className="block mb-1 font-semibold">LinkedIn profile ID</label>
                    <input
                        type="text"
                        className="input input-bordered w-full mb-4 text-gray-400"
                        value={linkedInUsername}
                        onChange={(e) => setLinkedInUsername(e.target.value)}
                    />

                    <label className="block mb-1 font-semibold">X (formerly Twitter) username</label>
                    <input
                        type="text"
                        className="input input-bordered w-full mb-4 text-gray-400"
                        value={xUsername}
                        onChange={(e) => setXUsername(e.target.value)}
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
                        photoURL: photoURL === "" ? previewUrl : photoURL,
                        skills,
                        githubUsername,
                        instagramUsername,
                        linkedInUsername,
                        xUsername
                    }}
                    showConnectionButtons={false}
                />
            </div>
        </div>
    );

}

export default EditProfile;