import { Component } from "react";

class ProfileData extends Component{
   constructor(props){
       console.log("child Constructor::"+props.name);
        super(props);
        
        this.state = {
            name: props.name,
            user:"",
        };

}

async componentDidMount(){
    console.log(" child Component did Mount");
    const data = await fetch("https://api.github.com/users/Darshanraj-R");
    const json  = await data.json();
    this.setState({user:json})
}

    render(){
        
        return (
            <>
            {console.log("child render::"+this.state.name)}
            {this.props.name}
            </>
        )
    }
}

export default ProfileData; 