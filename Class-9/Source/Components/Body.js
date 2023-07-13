import {restaurantList,imgLink} from "../Config";
import React,{ useState,useEffect } from "react";
import Skeleton, { SkeletonTheme }  from 'react-loading-skeleton';
import { Link } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css';
import Shimmer from "./Shimmer";
import { updateData } from "../utils/helper";
import useRestrantList from "../utils/useRestrantList";

import useOnline from "../utils/useOnline"

export const Body = () =>{
  
    const [val,setValue] = useState("");
    const [notFound,setNotFound] = useState("");
      //  console.log(useState());

       
     const [list] = useRestrantList();
     const [filteredList,setFilterList] = useState(null);

    // console.log(dataq);
   
   
     const isOnline = useOnline();

   

    if(!isOnline) return <> 🔴Offline, pls Check your Internet </>;
    
    const onSubmitSearch = (e) => {
      e.preventDefault();
       const data = updateData(list,val.toLocaleLowerCase()); 

       if(data?.length <= 0){
        setNotFound("Not Found");
       setFilterList(list);
       }
       else{
        setFilterList(data);
       // filteredList = data;
        setNotFound("");
       }// console.log(data)
     }
    
   
    

    return !list ? (
      <div className="Body">
      <form className="input-container">
         <input className="input1" style={{justifyContent:"center",alignItems:"center"}} type="text" value={val} onChange={(e)=> setValue(e.target.value)} placeholder=".........pls enable cros 🔍"></input>
        </form>
      {Array.from({ length: 16 }, (_, index) => (
        <Shimmer key={index} />
      ))}
    </div>
    
    ) :
    (
        <>
         <form className="input-container" 
         
         onSubmit={onSubmitSearch}
         >
         <input className="input1" style={{justifyContent:"center",alignItems:"center"}} type="text" value={val} onChange={(e)=> setValue(e.target.value)} placeholder=".........enter resturant name 🔍"></input>
        </form>
         <h3>{notFound}</h3>
    <>
    
    </>
            <div className="Body">
      
      {(filteredList === null ? list : filteredList).map((restaurant) => {

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
