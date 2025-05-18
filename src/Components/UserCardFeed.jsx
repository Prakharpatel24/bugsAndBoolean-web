const UserCardFeed = ({ user, showConnectionButtons }) => {
    console.log(user, "user");
    const { firstName, lastName, age, gender, about, photoURL, skills } = user;
    console.log(about, "about");
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
                    <button className="btn bg-red-600 font-mono">Git Ignore</button>
                    <button className="btn bg-green-600 font-mono">Let's Git It</button>
                </div>}
            </div>
        </div>
    )
}

export default UserCardFeed;