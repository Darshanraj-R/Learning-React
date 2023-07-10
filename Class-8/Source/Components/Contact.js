import { Link, Outlet } from "react-router-dom";
import Profile from "./Profile"

const Contact = () =>{
    return (
        <>
        <h1>Contact</h1>
        <Outlet/>
       <Link to={'/contact/profile'}>UserData</Link>        </>
    )
}

export default Contact;