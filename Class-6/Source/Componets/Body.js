import {restaurantList,imgLink} from "../Config";
import React,{ useState,useEffect } from "react";
import Skeleton, { SkeletonTheme }  from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Shimmer from "./Shimmer";


function updateData(list, searchValue) {
    
    if(searchValue === "" ){
        return list;
    }

      
    list = list.filter((restaurant) => restaurant.data.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    console.log(list);
    return list;
  }





export const Body = () =>{
  const [loading, setLoading] = useState(true);
  const [list,setList] = useState([]);
    const [filteredList,setFilteredList] = useState([]);
    const [val,setValue] = useState("hello");
    const [notFound,setNotFound] = useState("");

    useEffect(() => {
      fetchData();
    },[]);
    
    

    
    
    async function  fetchData(){
      try{
        setLoading(true);
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
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
   
    if(filteredList?.length===null) return null;

    return loading ? (
      <div className="Body">
      {Array.from({ length: 16 }, (_, index) => (
        <Shimmer key={index} />
      ))}
    </div>
    
    ) :
    (
        <>
        
         <input type="text" value={val} onChange={(e)=> setValue(e.target.value)}></input>
         <input type="submit" onClick={ () => {
           const data = updateData(list,val.toLocaleLowerCase()); 

           if(data.length <= 0){
            setNotFound("Not Found");
            setFilteredList(list)
           }
           else{
            setFilteredList(data)
            setNotFound("");
           }// console.log(data)
         }
         }/>
         <h3>{notFound}</h3>
    <>
    
    </>
            <div className="Body">
      
      {filteredList.map( (restaurant) => {

       return <FoodDetail  {...restaurant.data} key={restaurant.data.id} />
      }
      )}

        </div>
        </>

        )
}


export const FoodDetail = (props)=>{

return(

   <>
  
   <div className="bodyContainer">
        
        <img src= {imgLink+ props.cloudinaryImageId } alt="not fond"/>
        <div className="foodName">{props.name}</div>
        <div>✳️ {props.avgRating}</div>
        <div className="cuisineName">{(props.cuisines).join(', ')}</div>
    </div>

    
   </>
)


}
