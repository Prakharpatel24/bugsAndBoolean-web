import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFromFeed } from "../utils/slice/feedSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const UserCardFeed = ({ user, showConnectionButtons }) => {
    console.log(user, "user");
    const { _id, firstName, lastName, age, gender, about, photoURL, skills } = user;
    console.log(about, "about");

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
                toast.error(err?.response?.data?.message);
            }
            console.log('ERROR:', err);
        }
    }
    return (
        <div className="card bg-base-300 w-96 shadow-sm p-5">
            <figure>
                <img
                    src={photoURL}
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <div>
                    <h2 className="card-title">const dev =
                        <span
                            className="text-cyan-300"
                        >
                            {`"${firstName + " " + lastName}"`}
                        </span>;
                    </h2>
                </div>
                <span className="font-mono">Runtime: {age} years</span>
                <span className="font-mono">Gender: {gender}</span>
                <span className="font-mono">Skills: {`${[skills]}`}</span>
                <span className="font-mono">About: {about}</span>
                <p></p>
                {showConnectionButtons && <div className="card-actions justify-between">
                    <button
                        className="btn bg-red-600 hover:bg-red-700"
                        onClick={() => handleConnectionButtonClick("ignored", _id)}
                    >
                        Git Ignore
                    </button>
                    <button
                        className="btn bg-green-600 hover:bg-green-700"
                        onClick={() => handleConnectionButtonClick("interested", _id)}
                    >
                        Let's Git It
                    </button>
                </div>}
            </div>
        </div>
    )
}

export default UserCardFeed;