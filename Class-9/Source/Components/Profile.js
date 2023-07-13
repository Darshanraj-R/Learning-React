import { useEffect,useState } from "react"


const Profile = () =>{

    const [userData,setUserData] = useState();

    useEffect(() =>{
      fetchUserData();
    },[]);

    async function fetchUserData() {
        const data = await fetch("https://api.github.com/users/Darshanraj-R");
        const json  = await data.json();
        setUserData(json)
    }

    return(
        
        <> 
        
        <div>
             

              <img src={userData?.avatar_url} />
              <h3>UserName : {userData?.name}</h3>
              <h5>{userData?.bio}</h5>



        </div>
        
         </>
    )
}


export default Profile;