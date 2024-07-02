import User from "./User.js";
import UserClass from "./UserClass.js"

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            <UserClass name={"Abhinandan"} location={"Punjab"}/>
        </div>
    );
};

export default About;