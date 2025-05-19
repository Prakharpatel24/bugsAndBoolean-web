import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/slice/feedSlice";
import UserCardFeed from "./UserCardFeed";
import { useNavigate } from "react-router";

const Feed = () => {
    const feedData = useSelector((store) => store.feed);
    console.log(feedData, "feedData");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getFeed = async () => {
        try {
            if (feedData) return;
            const res = await axios.get(BASE_URL + "/user/feed", { withCredentials: true });
            console.log(res?.data, "feedRes");
            dispatch(addFeed(res?.data));
        } catch (error) {
            if (error?.response?.data?.status === 401) navigate("/login");
            console.log("ERROR:", error);
        }
    }
    useEffect(() => {
        getFeed()
    }, [])

    return feedData?.length === 0
        ? (
            <div className="p-5">
                <div className="mockup-code w-full">
                    <pre
                        data-prefix="$">
                        <code>That's all for now! Check back later for more updates.</code>
                    </pre>
                </div>
            </div>
        ) : (
            <>
                {feedData &&
                    <div className="flex justify-center items-center p-30">
                        <UserCardFeed
                            user={feedData[0]}
                            showConnectionButtons={true}
                        />
                    </div>}
            </>
        )
}

export default Feed;