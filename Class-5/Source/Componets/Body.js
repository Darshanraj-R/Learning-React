import {restaurantList,imgLink} from "../Config";
import { useState } from "react";



function updateData(list, searchValue) {
    
    if(searchValue === ""){
        return restaurantList;
    }


    list = list.filter((restaurant) => restaurant.data.name.includes(searchValue)
    );
    console.log(list);
    return list;
  }

  


export const Body = () =>{
    let [list,setList] = useState(restaurantList);
    let [val,setValue] = useState("hello");
    const [notFound,setNotFound] = useState("");

    
   

    return(
        <>
         <input type="text" value={val} onChange={(e)=> setValue(e.target.value)}></input>
         <input type="submit" onClick={ () => {
           const data = updateData(list,val); 

           if(data.length <= 0){
            setNotFound("Not Found");
           }
           else{
            setList(data);
            setNotFound("");
           }// console.log(data)
         }
         }/>
         <h3>{notFound}</h3>
    <>
    
    </>
            <div className="Body">
      
      {list.map( (restaurant) => {

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
        <div>Rating: {props.avgRating}</div>
        <div>{(props.cuisines).join(', ')}</div>
    </div>
   </>
)


}
