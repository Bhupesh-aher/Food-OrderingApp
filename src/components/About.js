import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{
    constructor(props){
        super(props);
        //  console.log("parent constructor")

    }

    componentDidMount() {
        // console.log("parent component did mount")
    }

    render(){
        // console.log("parent render")

        return (
            <div>
                <h1>About</h1>
                <div>
                    <UserContext.Consumer>
                        {({loggedInUser})=> <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
               <h2>Namaste React</h2>
                {/* <UserClass name= {"First"} location={"Deharadun Class"}/> */}
                {/* <UserClass name= {"Second"} location={"Deharadun Class"}/> */}
                <User name= {"Second"}/>
            </div>
        )
    }
}

   

export default About; 