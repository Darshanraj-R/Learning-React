import {useState,useEffect} from "react";
import {RESTAURANT_PAGE_API} from '../Config'

const useRestrantList = () =>{
    
    const [resList,setResList] = useState(null);
   
    useEffect(() => {
        fetchData();
      },[]);

      async function  fetchData(){
        try{
        const data = await fetch(RESTAURANT_PAGE_API)
        const json = await data.json();
        setResList(json.data?.cards[2]?.data?.data?.cards);
        
        }
        catch(error){
          console.log(error)
        }
      }

      
   
      return [resList];



}

export default useRestrantList;