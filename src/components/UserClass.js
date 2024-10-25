import React from "react"


class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(this.props)
        console.log(this.props.name + "child Consrtuctor")

        this.state = {
         userInfo:{
            name: "dummy",
            location :"default",
         },
        }
    }
    
    async componentDidMount() {
        console.log(this.props.name + "child component did mount")

        const data = await fetch("https://api.github.com/users/akshaymarch7")        
        const json = await data.json();
        // console.log(json);

        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate(){
        console.log(this.props.name + "compoenent did update");
    }

    componentWillUnmount(){
        console.log("compoenent will unmount")
    }
    
    render(){

        const {avatar_url, name, location, login} = this.state.userInfo;
        console.log(this.props.name + "child render");  

        return(
            <div className="user-cart">
             <img src={avatar_url}/>
             <h2>Name: {name}</h2>
             <h2>Location: {location}</h2>
             <h3>login: {login}</h3>
             
            </div>
        )
    }
}


export default UserClass;