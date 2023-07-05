import {restaurantList,imgLink} from "../Config";
import React,{ useState,useEffect } from "react";
import Skeleton, { SkeletonTheme }  from 'react-loading-skeleton';
import { Link } from "react-router-dom";

import 'react-loading-skeleton/dist/skeleton.css';
import Shimmer from "./Shimmer";

function updateData(list, searchValue) {
    
    if(searchValue === "" ){
        return list;
    }

      
    list = list.filter((restaurant) => restaurant.data.name.toLowerCase().includes(searchValue.toLowerCase())
    );
   
    return list;
  }





export const Body = () =>{
  const [loading, setLoading] = useState(true);
  const [list,setList] = useState([]);
    const [filteredList,setFilteredList] = useState([]);
    const [val,setValue] = useState("");
    const [notFound,setNotFound] = useState("");
       console.log(useState());
    useEffect(() => {
      fetchData();
    },[]);
    
    

    
    
    async function  fetchData(){
      try{
        setLoading(true);
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json();
      setList(json.data?.cards[2]?.data?.data?.cards);
      setFilteredList(json.data?.cards[2]?.data?.data?.cards);
      setTimeout(() => {
        setLoading(false);
      }, 800);
      }
      catch(error){
        console.log(error)
      }
    }
   
    if(filteredList?.length === null) return null;

    return loading ? (
      <div className="Body">
      {Array.from({ length: 16 }, (_, index) => (
        <Shimmer key={index} />
      ))}
    </div>
    
    ) :
    (
        <>
         <form className="input-container" onClick={ (e) => {
          e.preventDefault();
           const data = updateData(list,val.toLocaleLowerCase()); 

           if(data?.length <= 0){
            setNotFound("Not Found");
            setFilteredList(list)
           }
           else{
            setFilteredList(data)
            setNotFound("");
           }// console.log(data)
         }
         }>
         <input className="input1" style={{justifyContent:"center",alignItems:"center"}} type="text" value={val} onChange={(e)=> setValue(e.target.value)} placeholder=".........enter resturant name 🔍"></input>
        </form>
         <h3>{notFound}</h3>
    <>
    
    </>
            <div className="Body">
      
      {filteredList?.map( (restaurant) => {

       return <FoodDetail  {...restaurant?.data} key={restaurant?.data?.id} />
      }
      )}

        </div>
        </>

        )
}


export const FoodDetail = (props)=>{
  
return(

   <>
  <Link to={'/rest/'+props.id} style={{ textDecoration: 'none', color: 'inherit' }}>
   <div className="bodyContainer">
        
        <img src= {imgLink+ props.cloudinaryImageId } alt="not fond"/>
        <div className="foodName">{props.name}</div>
        <div>✳️ {props.avgRating}</div>
        <div className="cuisineName">{(props.cuisines).join(', ')}</div>
    </div>
    </Link>
    
   </>
)


}
