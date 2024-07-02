import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        // Hooks in class-component
        this.state = {
            count: 0,
        }
    }

    componentDidMount(){
        console.log("Child Component Did Mount")
    }

    render(){
        const {name, location} = this.props;
        const {count} = this.state;
        return(
            <div className="user-card">
            <h2>Count: {count}</h2>
            <button onClick={()=>{
                //never update state variable directly
                this.setState({
                    count: this.state.count+1,
                })
            }}>Count Increase</button>
            <h3>Name: {name}</h3>
            <h4>Location: {location}</h4>
            <h4>Contact: abhinandansah222@gmail.com</h4>
        </div>
        );
    }
}

export default UserClass;