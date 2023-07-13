import { useEffect, useState } from "react";
import {imgLink} from "../Config"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useMenuData from "../utils/useMenuData";

const ReacturantDeatail = () => {
  
    const {resId} = useParams();
    
    const menu = useMenuData(resId);
    
 

  
    return !menu ? (
    <Shimmer/> 
    ): (
         <div id="menuCard"> 
         <h3>{menu?.data?.cards[0]?.card?.card?.info?.name}</h3>
         {menu?.data?.cards[0]?.card?.card?.info?.cuisines.map((value)=>{
            return <span>{value} </span>;
         })}
         <h5>AreaName:{menu?.data?.cards[0]?.card?.card?.info?.areaName}</h5>
         <h5>{menu?.data?.cards[0]?.card?.card?.info?.city}</h5>
         <h5>Avg Rating: {menu?.data?.cards[0]?.card?.card?.info?.avgRating}</h5>
          <h5> {menu?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}</h5>

          <div className="itemDeatils">
          {menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((item,index)=>{
              return( <> <div className="itemCard" key={index}> 
                  <div>
                        <div className="itemName">{item?.card?.info?.name}</div>
                        <div className="itemPrice">₹{(item?.card?.info?.price)/100}</div>
                        <div className="description">{item?.card?.info?.description}</div>
                        </div> 
                        <img className="itemImg" src={imgLink+ item?.card?.info?.imageId}/> 
                       </div> </>)})}

          </div>
         </div>
    )
}

export default ReacturantDeatail;

