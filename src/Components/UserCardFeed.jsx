import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFromFeed } from "../utils/slice/feedSlice";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const UserCardFeed = ({ user, showConnectionButtons }) => {
    console.log(user, "user");
    const {
        _id,
        firstName,
        lastName,
        age,
        gender,
        about,
        photoURL,
        skills,
        githubUsername,
        instagramUsername,
        linkedInUsername,
        xUsername
    } = user;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleConnectionButtonClick = async (status, _id) => {
        try {
            const url = `${BASE_URL}/request/send/${status}/${_id}`;
            const res = await axios.post(
                url,
                {},
                { withCredentials: true }
            )
            if (res?.data?.status === 200) {
                dispatch(removeFromFeed(_id));
            }
        } catch (err) {
            if (err?.response?.data?.status === 401) {
                navigate("/login");
            }
            if (err?.response?.data?.status !== 200) {
                toast.error(err?.response?.data?.message, {
                    toastId: err?.response?.data?.message
                });
            }
            console.log('ERROR:', err);
        }
    }
    const highResPhotoURL = photoURL?.replace(/=s\d+-c$/, '=s400-c');
    return (
        <div className="mockup-code w-full max-w-sm sm:max-w-md md:max-w-lg bg-base-300 shadow-xl rounded-xl p-5 sm:p-8 border border-base-200">
            <figure className="w-full flex justify-center mb-6">
                <img
                    src={highResPhotoURL}
                    alt="Profile"
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full object-cover ring ring-accent ring-offset-base-100 ring-offset-2 shadow-md"
                />
            </figure>

            <div className="card-body p-0 text-center">
                <h2 className="text-xl md:text-2xl font-bold font-mono text-cyan-300 mb-2 break-words">
                    const name = <span>{`"${firstName} ${lastName}"`}</span>;
                </h2>

                <div className="text-sm sm:text-base space-y-2 mb-4">
                    {age && <p className="font-mono text-neutral-content">Runtime: <span className="text-primary">{age} years</span></p>}
                    {gender && <p
                        className="font-mono text-neutral-content"
                    >
                        Gender:
                        <span
                            className="capitalize"
                        >
                            {" " + gender}
                        </span>
                    </p>}

                    {skills.length !== 0
                        && skills[0] !== ""
                        && <div className="font-mono text-neutral-content">
                            Skills:
                            <div className="flex flex-wrap justify-center gap-1 mt-1">
                                {(Array.isArray(skills) ? skills : skills.split(',')).map((skill, i) => (
                                    <span
                                        key={i}
                                        className="badge badge-accent badge-outline text-xs sm:text-sm px-2 py-1"
                                    >
                                        {skill.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>}

                    {about && <div className="font-mono text-neutral-content">
                        About:
                        <p className="mt-1 max-h-28 overflow-y-auto text-sm px-3">{about}</p>
                    </div>}
                </div>

                <div>
                    {githubUsername
                        && githubUsername !== ""
                        && <a
                            href={`https://github.com/${githubUsername}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="text-3xl mr-4 cursor-pointer hover:text-gray-600"
                            />
                        </a>}
                    {instagramUsername
                        && instagramUsername !== ""
                        && <a
                            href={`https://www.instagram.com/${instagramUsername}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="text-3xl mr-4 cursor-pointer hover:text-pink-600"
                            />
                        </a>}
                    {linkedInUsername
                        && linkedInUsername !== ""
                        && <a
                            href={`https://www.linkedin.com/in/${linkedInUsername}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="text-3xl mr-4 cursor-pointer hover:text-blue-600"
                            />
                        </a>}
                    {xUsername
                        && xUsername !== ""
                        && <a
                            href={`https://x.com/${xUsername}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faXTwitter}
                                className="text-3xl mr-4 cursor-pointer hover:text-gray-600"
                            />
                        </a>}
                </div>
                {showConnectionButtons && (
                    <div className="card-actions mt-5 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                        <button
                            className="btn btn-error btn-outline w-full sm:w-auto"
                            onClick={() => handleConnectionButtonClick("ignored", _id)}
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728" />
                            </svg>
                            Git Ignore
                        </button>
                        <button
                            className="btn btn-success w-full sm:w-auto"
                            onClick={() => handleConnectionButtonClick("interested", _id)}
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            Let's Git It
                        </button>
                    </div>
                )}
            </div>
        </div>
    );

}

export default UserCardFeed;