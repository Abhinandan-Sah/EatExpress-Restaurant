import React from "react";
import UserContext from "../utils/UserContext.js";
import { useContext } from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        // Hooks in class-component
        this.state = { 
            userInfo:{
                name: "Dummy",
                location: "DummyLocation",
            }
        }
    }

    // async componentDidMount(){
    //      const data = await fetch("https://api.github.com/users/Abhinandan-Sah")
    //      const json = await data.json();
    //      console.log(json);

    //      this.setState({
    //         userInfo: json,
    //      })
    // }

    render(){
        const {name, location, avatar_url} = this.state.userInfo;
        return(
            <div className="user-card"> 
            
            <img src={avatar_url} />
            <h3>Name: EatExpress</h3>
            <h4>Location: Lovely Profession university</h4>
            <h4>Contact: EatExpress@gmail.com</h4>
            <div>LoggedIn User - 
                <UserContext.Consumer>
                    {({loggedInUser}) => (<h1 className="font-bold">{loggedInUser}</h1>)}
                </UserContext.Consumer>
            </div>
        </div>

        
        );
    }
}

export default UserClass;