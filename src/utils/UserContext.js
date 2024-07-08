//Let assume that it is a global kind of context
import { createContext } from "react";

const UserContext = createContext({
    //Global Object
    loggedInUser:"DefaultUser"
});

export default UserContext;