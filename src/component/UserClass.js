import React from "react";

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

    async componentDidMount(){
         const data = await fetch("https://api.github.com/users/Abhinandan-Sah")
         const json = await data.json();
         console.log(json);

         this.setState({
            userInfo: json,
         })
    }

    render(){
        const {name, location, avatar_url} = this.state.userInfo;
        return(
            <div className="user-card"> 
            <img src={avatar_url} />
            <h3>Name: {name}</h3>
            <h4>Location: {location}</h4>
            <h4>Contact: abhinandansah222@gmail.com</h4>
        </div>
        );
    }
}

export default UserClass;