import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/slice/feedSlice";
import UserCardFeed from "./UserCardFeed";

const Feed = () => {
    const feedData = useSelector((store) => store.feed);
    console.log(feedData, "feedData");
    const dispatch = useDispatch();

    const getFeed = async () => {
        try {
            if (feedData) return;
            const res = await axios.get(BASE_URL + "/user/feed", { withCredentials: true });
            console.log(res?.data, "feedRes");
            dispatch(addFeed(res?.data));
        } catch (error) {
            console.log("ERROR:", error);
        }
    }
    useEffect(() => {
        getFeed()
    }, [])

    return (
        <>
            {feedData &&
                <div className="flex justify-center items-center p-30">
                    <UserCardFeed user={feedData[0]} />
                </div>}
        </>
    )
}

export default Feed;