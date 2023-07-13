import { useEffect, useState } from "react"

const UseOnline = () =>{

    const [isOnline,setIsOnline]= useState(true);

    useEffect(()=>{
       const handelOnline = () =>{
        setIsOnline(true);
       }

       const handelOffline = () =>{
        setIsOnline(false);
       }

        window.addEventListener("online",handelOnline);
        window.addEventListener("offline",handelOffline);
    
        return () =>{
             window.removeEventListener("online",handelOnline);
             window.removeEventListener("offline",handelOffline);
        };
    },[])

     
    return  isOnline;
}

export default UseOnline ;