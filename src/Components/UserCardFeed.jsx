const UserCardFeed = ({ user }) => {
    const { firstName, lastName, age, gender, about, photoURL, skills } = user;
    console.log(about, "about");
    return (
        <div className="card bg-base-300 w-96 shadow-sm p-5">
            <figure>
                <img
                    src={photoURL}
                    alt="Shoes"/>
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
                <span>Runtime: {age} years</span>
                <span>Gender: {gender}</span>
                <span>Skills: {skills}</span>
                <span>About: {about}</span>
                <p></p>
                <div className="card-actions justify-between">
                    <button className="btn bg-red-600">Git Ignore</button>
                    <button className="btn bg-green-600">Let's Git It</button>
                </div>
            </div>
        </div>
    )
}

export default UserCardFeed;