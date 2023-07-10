import React from "react";
import ProfileData from "./ProfileData";

class ProfileClass extends React.Component{
   constructor(props){
       

        this.state ={
            count : 1,
            user :"",
        }
        console.log("Contructor created")
   }

    componentDidMount(){

    console.log(" parent componentDidMount")
    // const data = await fetch("https://api.github.com/users/Darshanraj-R");
    // const json  = await data.json();
    // this.setState({user:json});

}

//    componentDidUpdate(){
//     console.log("Parent Component did update")
//    }

//    componentWillUnmount(){
//     console.log("Parent Component will Unmount")
//    }

    render(){
        console.log(" Parent render")
    return (
        <>
        
        {/* <input typeof="button" onClick={
            () => {
                this.setState({count:2})
            }
        }/>
        <br/> */}
        <ProfileData name="Darshan"/>
        {/* <ProfileData name="Raj"/> */}
        {/* <img src={this.state.user.avatar_url} alt="not fnd"/>
      {this.state.user.name} */}

        </>
    )
   }
}


export default ProfileClass;